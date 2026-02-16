import { useCallback, useState } from 'react'
import CommentList from '../../../widgets/CommentList/ui/CommentList'
import styles from './postCard.module.css'

export interface PostCardProps {
	post: {
		userId: number,
		id: number,
		title: string,
		body: string
	}
}

function PostCard({ post }: PostCardProps) {
	const [visible, setVisible] = useState<boolean>(false)
	// const isvisible = useCallback(() => {
	// 	setVisible(!visible)
	// }, [])


	return (
		<div>
			<h2 className={styles.postCard} onClick={() => setVisible(!visible)}>{post.title}</h2>
			<CommentList isOpen={visible} children={post.body} />
		</div>
	)
}

export default PostCard