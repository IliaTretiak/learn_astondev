import type { Post } from '../../../entities/[entity]/model/types';

function filterByLength(length: string | undefined, array: Post[]) {
	return array.map((elem) => elem).filter(elem => elem.title.length > Number(length))
}

export default filterByLength