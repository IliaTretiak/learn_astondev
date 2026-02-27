import { useState } from 'react'
import { ThemeContext, type Theme, type ThemeContextProviderProps } from './ThemeContext';
import type { PropsWithChildren } from 'react'

function ThemeProvider(props: PropsWithChildren<ThemeContextProviderProps>) {
	const [theme, setTheme] = useState<Theme>("light")

	const toggleTheme = () => {
		const updatedTheme = theme == "dark" ? "light" : "dark"
		setTheme(updatedTheme)
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>{props.children}</ThemeContext.Provider>
	);
}

export default ThemeProvider