import { useState } from 'react'
import CommentList from '../../../widgets/CommentList/ui/CommentList'
import styles from './postCard.module.css'
import Button from '../../../shared/ui/Button/Button'
import type { PostCardProps } from '../../[entity]/model/types'
import type { PropsWithChildren } from 'react'

function PostCard(props: PropsWithChildren<PostCardProps>) {
	const [visible, setVisible] = useState<boolean>(false)

	return (
		<div>
			<h2 className={styles.postCard}>{props.post.title}</h2>
			<Button styles={''} onclick={() => setVisible(!visible)} children={"Комментарии"} />
			<CommentList isOpen={visible} children={props.post.body} />
		</div>
	)
}

export default PostCard