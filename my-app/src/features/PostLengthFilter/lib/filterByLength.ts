import type { Post } from '../../../widgets/PostList/PostList';

export default function filterByLength(length: string | undefined, array: Post[]) {
	return array.map((elem) => elem).filter(elem => elem.title.length > Number(length))
}
