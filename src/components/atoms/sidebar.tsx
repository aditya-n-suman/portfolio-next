/* eslint-disable react/display-name */
declare module "react" {
	function forwardRef<T, P = {}>(
		render: (props: P, ref: React.RefObject<T>) => React.ReactNode | null
	): (props: P & { ref: React.RefObject<T> }) => React.ReactNode | null;
}

import IconClose from "@/assets/icons/close";
import { forwardRef, PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}
const Modal = forwardRef<HTMLDialogElement, PropsWithChildren<ModalProps>>(
	({ isOpen, onClose, children }, modalRef) => {
		const handleClose = () => {
			onClose();
		};
		useEffect(() => {
			if (modalRef.current && isOpen) {
				modalRef.current.showModal();
				document.body.style.overflow = "hidden";
				document.body.classList.add("blur-sm");
			}
			return () => {
				document.body.style.overflow = "";
				document.body.classList.remove("blur-sm");
			};
		}, [modalRef, isOpen]);

		// if (!isOpen) return null;

		return createPortal(
			<dialog
				onCancel={handleClose}
				ref={modalRef}
				className="bg-transparent relative m-0 h-screen max-h-none max-w-none w-screen modal-dialog">
				<div className="flex justify-end">
					<div className="bg-navy-light relative flex flex-col ">
						<div className="absolute w-full flex justify-end pr-5 pt-6">
							<button
								autoFocus
								className={`text-green top-7 right-5 z-11`}
								onClick={handleClose}>
								<IconClose height="42px" width="42px" />
							</button>
						</div>
						<div className="flex-1">{children}</div>
					</div>
				</div>
			</dialog>,
			document.body
		);
	}
);

export default Modal;
