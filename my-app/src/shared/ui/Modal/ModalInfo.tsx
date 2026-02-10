import { createPortal } from 'react-dom'
import style from './modalInfo.module.css'
import Cross from '../Button/Cross';

interface CrossProps {
	onclick: () => void;
}
const portalDiv: HTMLElement = document.getElementById('portal-root')!;

function ModalInfo({ onclick }: CrossProps) {
	return createPortal(
		<div >
			<div className={style.modalInfo}>
				<div className={style.modalInfo__title}>
					<h2> О проекте</h2>
					<Cross onclick={onclick} />
				</div>
				<p>Это учебный проект в рамках интенсива по React компании Astons</p>
				<p>выполняет Третьяк Илья</p>
			</div>
		</div>,
		portalDiv)
}

export default ModalInfo




