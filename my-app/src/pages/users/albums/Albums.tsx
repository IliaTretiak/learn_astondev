import { useContext } from 'react';
import { useGetAlbumsQuery } from '../../../entities/[entity]/api/albumsApi';
import style from '../../../widgets/PostList/postList.module.css'
import { ThemeContext, type ThemeContextType } from '../../../shared/lib/theme/ThemeContext';

function Albums() {
	const { theme } = useContext(ThemeContext) as ThemeContextType
	const className = 'theme__main-' + theme

	const { data } = useGetAlbumsQuery(1)
	const albums = data || []
	return (
		<div className={`${className} ${style.page} ${style.postList}`}>

			{
				albums.map((album) => (
					<div key={album.id}>{album.title}</div>
				))
			}
		</div>
	)
}

export default Albums