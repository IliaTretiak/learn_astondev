type PostCardProps = {
	children: string
	isOpen: boolean
}

const CommentList = ({ children, isOpen }: PostCardProps) => {
	if (!isOpen) return null
	else
		return (
			<p>{children}</p>
		)
}

export default CommentList