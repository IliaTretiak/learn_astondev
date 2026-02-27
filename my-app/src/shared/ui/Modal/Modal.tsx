import { createPortal } from 'react-dom'
import style from './modal.module.css'
import Cross from '../Button/Cross';
import type { ModalChild, ModalProps } from '../../../entities/[entity]/model/types';
import type { PropsWithChildren } from 'react'

const portalDiv: HTMLElement = document.getElementById('portal-root')!;

function Modal(props: PropsWithChildren<ModalProps>) {
	if (!props.isOpen) return null
	else
		return createPortal(
			<div className={style.modal__backdrop}>
				<div className={style.modal}>
					<div className={style.modal__cross}>
						<Cross onclick={props.onclick} />
					</div>
					{props.children}
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




