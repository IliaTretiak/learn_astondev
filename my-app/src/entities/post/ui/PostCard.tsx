import { useState } from 'react'
import CommentList from '../../../widgets/CommentList/ui/CommentList'
import styles from './postCard.module.css'
import Button from '../../../shared/ui/Button/Button'

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

	return (
		<div>
			<h2 className={styles.postCard}>{post.title}</h2>
			<Button styles={''} onclick={() => setVisible(!visible)} children={"Комментарии"} />
			<CommentList isOpen={visible} children={post.body} />
		</div>
	)
}

export default PostCard