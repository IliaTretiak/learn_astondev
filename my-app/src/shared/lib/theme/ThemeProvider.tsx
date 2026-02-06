import { createContext, useState } from 'react'

type Theme = "light" | "dark"

type ThemeContextProviderProps = {
	children: React.ReactNode;
}

// type ThemeContextType = {
// 	theme: Theme;
// 	toggleTheme: () => void
// }

//перепроверить тип
export const ThemeContext = createContext<any>("light")

export default function ThemeProvider({
	children,
}: ThemeContextProviderProps) {
	const [theme, setTheme] = useState<Theme>("light")

	const toggleTheme = () => {
		const updatedTheme = theme == "dark" ? "light" : "dark"
		setTheme(updatedTheme)
		console.log(theme)
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
	);
}

