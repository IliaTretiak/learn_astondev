import { useContext } from 'react';
import { useGetTodosQuery } from '@entities/[entity]/api/todosApi';
import style from '@widgets/PostList/postList.module.css'
import styles from '@shared/ui/Button/button.module.css'
import { ThemeContext, type ThemeContextType } from '@shared/lib/theme/ThemeContext';
import Button from '@shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';

function Todos() {
	const { theme } = useContext(ThemeContext) as ThemeContextType
	const className = 'theme__main-' + theme

	const { data } = useGetTodosQuery(1)
	const todos = data || []

	const navigate = useNavigate()
	return (
		<div className={`${className} ${style.page} ${style.postList}`}>
			<Button onclick={() => navigate(-1)} children={"Назад"} styles={styles.button__navigate} />
			{
				todos.map((todo) => (
					<div key={todo.id}>{todo.title}</div>
				))
			}
		</div>
	)
}

export default Todos