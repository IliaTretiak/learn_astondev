export type Post = {
	userId: number,
	id: number,
	title: string,
	body: string,
}

export type PostListProps = {
	setLength: (value: string) => void
	children: string
}

export type PostCardProps = {
	post: Post
}

export type CommentListProps = {
	children: string
	isOpen: boolean
}

export type ModalProps = {
	isOpen: boolean;
	onclick: () => void;
	children: React.ReactNode;
}

export type ModalChild = {
	children: React.ReactNode;
}

export type CrossProps = {
	onclick: () => void;
}

export type ButtonProps = {
	onclick: () => void;
	children: string;
	styles: string
}

export type RoutsProps = {
	routs: string[]
}
