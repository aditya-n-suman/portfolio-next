"use client";
import IconHam from "@/assets/icons/hamburger";
import LogoBG from "@/assets/logo_bg";
import Logo from "@/assets/logo_complete";
import { NAV_ITEMS } from "@/utils/constants";
import Modal from "./atoms/sidebar";
import { useEffect, useRef, useState } from "react";

const NavItems = ({ linkSelector = () => {} }) => (
	<>
		<ol className="flex flex-col md:flex-row list-zero list-outside gap-6 lg:gap-14 ">
			{NAV_ITEMS.map((item, index) => (
				<li
					onClick={linkSelector}
					className="flex flex-col md:flex-row md:gap-2 items-center text-xs font-mono"
					key={item}>
					<div className="text-green ">0{index + 1}.</div>
					<a
						href={`#${item.toLowerCase()}`}
						className="hover:text-green text-lg md:text-xs">
						{item}
					</a>
				</li>
			))}
		</ol>
		<a
			href="/Aditya_nath_suman.pdf"
			download
			className="flex items-center text-green border-green border-1px rounded-1.5 px-12 md:px-8 py-3 pt-3.5 fz-transition hover:fz-shadow hover:fz-translate leading-4">
			Resume
		</a>
	</>
);
const Header = () => {
	const [visible, setVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [openModal, setOpenModal] = useState(false);
	const modalRef = useRef<HTMLDialogElement>(null);
	const modalCloser = () => {
		if (modalRef.current) {
			modalRef.current.close();
			setOpenModal(false);
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY && currentScrollY > 25) {
				// Scrolling down
				setVisible(false);
			} else if (currentScrollY < lastScrollY) {
				// Scrolling up
				setVisible(true);
			}

			setLastScrollY(currentScrollY);
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);

	return (
		<header
			className={`fixed z-2 transition-all px-6 lg:px-[50px] h-[100px] w-full flex items-center ${
				lastScrollY > 0 ? "drop-shadow-2xl" : ""
			} ${visible ? "translate-y-0 bg-navy" : "-translate-y-full"}`}>
			<nav className="flex justify-between h-tab flex-1 font-mono items-center">
				<div className="">
					<a
						href="/"
						className="flex z-1 relative h-tab aspect-square text-green">
						<div className="absolute -z-1">
							<LogoBG />
						</div>
						<div className="z-1 hover:-translate-x-2.5 hover:-translate-y-2.5 fz-transition ">
							<Logo />
						</div>
					</a>
				</div>
				<div className="hidden md:flex gap-8 items-center text-xs h-full">
					<NavItems />
				</div>
				<div className="block md:hidden">
					<button
						onClick={() => setOpenModal(true)}
						className="text-green max-h-full w-[42px] aspect-square">
						<IconHam />
					</button>
				</div>
				<Modal ref={modalRef} isOpen={openModal} onClose={modalCloser}>
					<div className="flex flex-wrap content-center px-10 h-screen">
						<nav className="flex gap-16 flex-col px-20 text-slate-light items-center">
							<NavItems linkSelector={modalCloser} />
						</nav>
					</div>
				</Modal>
			</nav>
		</header>
	);
};

export default Header;
