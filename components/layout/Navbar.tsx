"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const NAV = [
	{ name: "About", href: "/about" },
	{ name: "Summit", href: "/summit" },
	{ name: "Hackathon", href: "/hackathon" },
	{ name: "Sponsorship", href: "/sponsorship" },
	{ name: "Legacy & Impact", href: "/legacy-impact" },
	{ name: "Blog", href: "/blog" },
	{ name: "Contact", href: "/contact" },
];

export default function Navbar({ startAnimation }: { startAnimation?: boolean }) {
	const menuRef = useRef<HTMLDivElement>(null);
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [show, setShow] = useState(false);
	const [isFading, setIsFading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const timer = setTimeout(() => setShow(true), 5000);
		return () => clearTimeout(timer);
	}, [startAnimation]);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const onNavClick = (href: string) => (e: React.MouseEvent) => {
		e.preventDefault();
		if (window.location.pathname === href) return;
		setIsFading(true);
		setTimeout(() => {
			router.push(href);
			setIsFading(false);
		}, 300);
	};

	const navButtonsVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.08,
				delayChildren: startAnimation ? 0.3 : 0.6,
			},
		},
	};
	const navButtonVariant = {
		hidden: { opacity: 0, y: 12 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: "easeOut" } },
	};

	return (
		<AnimatePresence>
			{show && (
				<motion.nav
					ref={menuRef}
					initial={{
						opacity: 0,
						width: "0%",
						paddingTop: 0,
						paddingBottom: 0,
					}}
					animate={{
						opacity: 1,
						width: "99vw",
						paddingTop: "0.75rem",
						paddingBottom: "0.75rem",
					}}
					exit={{
						opacity: 0,
						width: "0%",
						paddingTop: 0,
						paddingBottom: 0,
					}}
					transition={{
						opacity: { duration: 0.3, ease: "easeInOut" },
						width: { delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
						paddingTop: { delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
						paddingBottom: { delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
					}}
					className="fixed top-4 left-1/2 z-[60] -translate-x-1/2 -translate-y-2 bg-white text-black rounded-t-2xl rounded-b-2xl shadow-2xl px-4 sm:px-16 h-16 flex items-center justify-between max-w-7xl border border-neutral-200 w-[95%]"
				>
					<motion.div
						className="flex items-center gap-3"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.9, duration: 0.5 }}
					>
						<Link
							href="/"
							className="flex items-center gap-2"
							onClick={onNavClick("/")}
						>
							<Image
								src="/images/logo.png"
								alt="Lokaksema"
								width={40}
								height={40}
								className="h-10 w-10 block lg:hidden"
								priority
							/>
							<Image
								src="/images/logo.png"
								alt="Lokaksema"
								width={96}
								height={24}
								className="h-6 w-auto hidden lg:block"
								priority
							/>
							<span className="hidden sm:inline font-semibold tracking-tight">
								Lokaksema 2026
							</span>
						</Link>
					</motion.div>
					<motion.div
						className="hidden lg:flex items-center gap-7 text-sm"
						variants={navButtonsVariants}
						initial="hidden"
						animate="visible"
					>
						{NAV.map((item) => (
							<motion.div
								key={item.name}
								variants={navButtonVariant}
								whileHover={{
									scale: 1.12,
									color: "#8b5cf6",
									backgroundColor: "rgba(139,92,246,0.08)",
								}}
								transition={{ type: "spring", stiffness: 400, damping: 22 }}
								style={{ borderRadius: "0.5rem" }}
							>
								<Link
									href={item.href}
									className="px-2 py-1 transition-colors"
									onClick={onNavClick(item.href)}
								>
									{item.name}
								</Link>
							</motion.div>
						))}
						<motion.div
							variants={navButtonVariant}
							whileHover={{
								scale: 1.08,
								boxShadow: "0 2px 12px rgba(139,92,246,0.18)",
							}}
							transition={{ type: "spring", stiffness: 400, damping: 22 }}
							style={{ borderRadius: "0.5rem" }}
						>
							<Link
								href="/register"
								className="rounded-lg bg-black text-white px-3 py-2 font-medium hover:bg-neutral-800 transition"
								onClick={onNavClick("/register")}
							>
								Register
							</Link>
						</motion.div>
					</motion.div>
					<motion.button
						aria-label="Open menu"
						className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 hover:bg-neutral-100"
						onClick={() => setOpen(!open)}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.05, duration: 0.5 }}
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
							<path
								d="M3 6h18M3 12h18M3 18h18"
								stroke="currentColor"
								strokeWidth="1.5"
							/>
						</svg>
					</motion.button>

					<AnimatePresence>
						{open && (
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.2 }}
								className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white rounded-xl border border-neutral-200 shadow-lg z-[70]"
							>
								<div className="w-full px-4 py-4">
									<div className="grid gap-2 text-sm">
										{NAV.map((item) => (
											<motion.div
												key={item.name}
												whileHover={{
													scale: 1.02,
													color: "#8b5cf6",
													backgroundColor: "rgba(139,92,246,0.08)",
												}}
												transition={{ type: "spring", stiffness: 400, damping: 22 }}
												style={{ borderRadius: "0.5rem" }}
											>
												<Link
													href={item.href}
													onClick={e => { setOpen(false); onNavClick(item.href)(e); }}
													className="block rounded-md px-2 py-2 transition-colors"
												>
													{item.name}
												</Link>
											</motion.div>
										))}
										<motion.div
											whileHover={{
												scale: 1.02,
												boxShadow: "0 2px 12px rgba(139,92,246,0.18)",
											}}
											transition={{ type: "spring", stiffness: 400, damping: 22 }}
											style={{ borderRadius: "0.5rem" }}
										>
											<Link
												href="/register"
												onClick={e => { setOpen(false); onNavClick("/register")(e); }}
												className="mt-2 block rounded-md bg-black text-white px-3 py-2 font-medium hover:bg-neutral-800 transition text-center"
											>
												Register
											</Link>
										</motion.div>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.nav>
			)}
		</AnimatePresence>
	);
}


