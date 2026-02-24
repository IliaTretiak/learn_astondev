// import { useEffect } from 'react'
// import { useGetAlbumsQuery } from '../../../../entities/[entity]/api/albumsApi'
// import { useGetCommentsQuery } from '../../../../entities/[entity]/api/commentsApi'
// import { useDispatch } from 'react-redux'
import { useGetPostsQuery } from '../../../../entities/[entity]/api/postsApi'
// import { postReceived } from '../../../../entities/[entity]/model/slice/postSlice'
// import { useDispatch } from 'react-redux'
// import { postReceived } from '../../../../entities/[entity]/model/slice/postSlice'

function usePosts() {
	const { data } = useGetPostsQuery()
	// const { data } = useGetAlbumsQuery()
	// const { data } = useGetCommentsQuery()
	const posts = data || []

	return posts
}

export default usePosts