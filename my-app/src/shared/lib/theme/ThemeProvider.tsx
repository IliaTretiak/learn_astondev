import { useState } from 'react'
import { ThemeContext, type Theme, type ThemeContextProviderProps } from './ThemeContext';

export default function ThemeProvider({
	children,
}: ThemeContextProviderProps) {
	const [theme, setTheme] = useState<Theme>("light")

	const toggleTheme = () => {
		const updatedTheme = theme == "dark" ? "light" : "dark"
		setTheme(updatedTheme)
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
	);
}

