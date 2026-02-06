import { createPortal } from 'react-dom'
import style from './modalInfo.module.css'

const portalDiv: HTMLElement = document.getElementById('portal-root')!;

function ModalInfo() {
	return createPortal(
		<div >
			<div className={style.modalInfo}>
				<h2> О проекте</h2>
				<p>Это учебный проект в рамках интенсива по React компании Astons</p>
				<p>выполняет Третьяк Илья</p>
			</div>
		</div>,
		portalDiv)
}

export default ModalInfo




