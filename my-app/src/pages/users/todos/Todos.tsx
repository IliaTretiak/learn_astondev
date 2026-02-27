import { useContext } from 'react';
import { useGetTodosQuery } from '../../../entities/[entity]/api/todosApi';
import style from '../../../widgets/PostList/postList.module.css'
import { ThemeContext, type ThemeContextType } from '../../../shared/lib/theme/ThemeContext';

function Todos() {
	const { theme } = useContext(ThemeContext) as ThemeContextType
	const className = 'theme__main-' + theme

	const { data } = useGetTodosQuery(1)
	const todos = data || []
	return (
		<div className={`${className} ${style.page} ${style.postList}`}>
			{
				todos.map((todo) => (
					<div key={todo.id}>{todo.title}</div>
				))
			}
		</div>
	)
}

export default Todos