import { createPortal } from 'react-dom'
import style from './modal.module.css'
import Cross from '../Button/Cross';

export interface ModalProps {
	isOpen: boolean;
	onclick: () => void;
	children: React.ReactNode;
}

export interface ModalChild {
	children: React.ReactNode;
}

const portalDiv: HTMLElement = document.getElementById('portal-root')!;

function Modal({ isOpen, children, onclick }: ModalProps) {
	if (!isOpen) return null
	else
		return createPortal(
			<div className={style.modal__backdrop}>
				<div className={style.modal}>
					<div className={style.modal__cross}>
						<Cross onclick={onclick} />
					</div>
					{children}
				</div>
			</div>,
			portalDiv)
};

Modal.Header = ({ children }: ModalChild) => {
	return (
		<div className={style.modal__title}>
			{children}
		</div>
	)
}

Modal.Body = ({ children }: ModalChild) => {
	return (
		<div>{children}</div>
	)
}

Modal.Footer = ({ children }: ModalChild) => {
	return (
		<div>{children}</div>
	)
}

export default Modal




