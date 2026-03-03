import { useContext } from 'react';
import { useGetAlbumsQuery } from '@entities/entity/api/albumsApi';
import style from '@widgets/PostList/postList.module.css'
import styles from '@shared/ui/Button/button.module.css'
import { ThemeContext, type ThemeContextType } from '@shared/lib/theme/ThemeContext';
import { useNavigate } from 'react-router-dom';
import Button from '@shared/ui/Button/Button';

function Albums() {
	const { theme } = useContext(ThemeContext) as ThemeContextType
	const className = 'theme__main-' + theme

	const { data } = useGetAlbumsQuery(1)
	const albums = data || []

	const navigate = useNavigate()
	return (
		<div className={`${className} ${style.page} ${style.postList}`}>
			<Button onclick={() => navigate(-1)} children={"Назад"} styles={styles.button__navigate} />
			{
				albums.map((album) => (
					<div key={album.id}>{album.title}</div>
				))
			}
		</div>
	)
}

export default Albums