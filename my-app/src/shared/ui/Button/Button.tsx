interface ButtonProps {
	onclick: () => void;
	children: string;
	styles: string
}

function Button({
	onclick,
	children,
	styles
}: ButtonProps) {
	return (
		<button className={styles} onClick={onclick}>{children}</button>
	)
}

export default Button


