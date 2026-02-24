import { createBrowserRouter } from 'react-router-dom';
import Albums from '../../../pages/albums/Albums';
import Albums_user from '../../../pages/users/id/albums/Albums'
import App from '../../App';
import MainLayout from '../../../shared/layouts/MainLayout';
import Photos from '../../../pages/albums/id/photos/Photos';
import Posts from '../../../pages/users/id/posts/Posts';
import Users from '../../../pages/users/Users';
import Todos from '../../../pages/users/id/todos/Todos';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <MainLayout />,
			},
			{
				path: "posts",
				element: <Posts />,
			},
			{
				path: "users/id/albums",
				element: <Albums_user />
			},
			{
				path: "albums/id/photos",
				element: <Photos />,
			},
			{
				path: "users/id/todos",
				element: <Todos />
			},
			{
				path: "users/id/posts",
				element: <Posts />
			},
			{
				path: "albums",
				element: <Albums />,
			},
			{
				path: "users",
				element: <Users />,
			},
		]
	}
])

export default router


