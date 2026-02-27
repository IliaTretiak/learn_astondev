import type { CommentListProps } from '../../../entities/[entity]/model/types'
import type { PropsWithChildren } from 'react'

function CommentList(props: PropsWithChildren<CommentListProps>) {
	if (!props.isOpen) return null
	else
		return (
			<p>{props.children}</p>
		)
}

export default CommentList