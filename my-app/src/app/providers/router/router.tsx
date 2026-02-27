import { createBrowserRouter } from 'react-router-dom';
import Albums from '../../../pages/albums/Albums';
import Albums_user from '../../../pages/users/albums/Albums'
import App from '../../App';
import MainLayout from '../../../shared/layouts/MainLayout';
import Photos from '../../../pages/albums/photos/Photos';
import Users from '../../../pages/users/Users';
import Todos from '../../../pages/users/todos/Todos';
import Posts from '../../../pages/posts/Posts';
import Posts__users from '../../../pages/users/posts/Posts'

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
				path: "posts/:id",
				element: <Posts />,
			},
			{
				path: "users",
				element: <Users />,
			},
			{
				path: "users/:id",
				element: <Users />,
			},
			{
				path: "users/:id/albums",
				element: <Albums_user />
			},
			{
				path: "users/:id/todos",
				element: <Todos />
			},
			{
				path: "users/:id/posts",
				element: <Posts__users />
			},

			{
				path: "albums/id/photos",
				element: <Photos />,
			},

			{
				path: "albums",
				element: <Albums />,
			},
		]
	}
])

export default router


