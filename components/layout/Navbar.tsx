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
	const [show, setShow] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const timer = setTimeout(() => setShow(true), 1200);
		return () => clearTimeout(timer);
	}, [startAnimation]);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const onNavClick = (href: string) => (e: React.MouseEvent) => {
		e.preventDefault();
		if (window.location.pathname === href) return;
		router.push(href);
	};

	return (
		<AnimatePresence>
			{show && (
				<motion.nav
					ref={menuRef}
					initial={{ opacity: 0, scaleX: 0.4, y: -12, x: "-50%" }}
					animate={{ opacity: 1, scaleX: 1, y: 0, x: "-50%" }}
					exit={{ opacity: 0, scaleX: 0.4, y: -12, x: "-50%" }}
					transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
					className="fixed top-4 left-1/2 z-[60] w-[95%] max-w-7xl h-16 px-4 sm:px-16
                     flex items-center justify-between
                     rounded-2xl border border-white/10
                     bg-black/60 backdrop-blur-xl
                     text-white shadow-xl"
					style={{ transformOrigin: "center top" }}
				>
					{/* Logo */}
					<Link href="/" onClick={onNavClick("/")}>
						<div className="flex items-center gap-2">
							<Image
								src="/images/logo.png"
								alt="Lokaksema"
								width={96}
								height={24}
								className="h-6 w-auto"
								priority
							/>
							<span className="hidden sm:inline font-semibold tracking-tight">
								Lokaksema 2026
							</span>
						</div>
					</Link>

					{/* Desktop Nav */}
					<div className="hidden lg:flex items-center gap-7 text-sm">
						{NAV.map((item) => (
							<motion.div
								key={item.name}
								whileHover={{ y: -2 }}
								transition={{ type: "spring", stiffness: 300, damping: 20 }}
							>
								<Link
									href={item.href}
									onClick={onNavClick(item.href)}
									className="relative px-2 py-1 text-neutral-300 hover:text-indigo-400
                             after:absolute after:left-0 after:-bottom-1 after:h-[1px]
                             after:w-0 after:bg-indigo-400 after:transition-all
                             hover:after:w-full"
								>
									{item.name}
								</Link>
							</motion.div>
						))}

						{/* CTA */}
						<Link
							href="/register"
							onClick={onNavClick("/register")}
							className="ml-2 rounded-lg bg-indigo-500 px-4 py-2
                         font-medium text-white hover:bg-indigo-400 transition"
						>
							Register
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						aria-label="Open menu"
						className="lg:hidden h-9 w-9 flex items-center justify-center
                       rounded-md border border-white/20 hover:bg-white/10"
						onClick={() => setOpen(!open)}
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
							<path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" />
						</svg>
					</button>

					{/* Mobile Menu */}
					<AnimatePresence>
						{open && (
							<motion.div
								initial={{ opacity: 0, y: -8 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -8 }}
								transition={{ duration: 0.2 }}
								className="absolute top-[calc(100%+8px)] left-0 right-0
                           rounded-xl border border-white/10
                           bg-black/80 backdrop-blur-xl shadow-lg"
							>
								<div className="px-4 py-4 grid gap-2 text-sm">
									{NAV.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											onClick={(e) => {
												setOpen(false);
												onNavClick(item.href)(e);
											}}
											className="rounded-md px-2 py-2 text-neutral-300
                                 hover:bg-indigo-500/10 hover:text-indigo-400 transition"
										>
											{item.name}
										</Link>
									))}

									<Link
										href="/register"
										onClick={(e) => {
											setOpen(false);
											onNavClick("/register")(e);
										}}
										className="mt-2 block rounded-md bg-indigo-500 px-3 py-2
                               text-center font-medium text-white hover:bg-indigo-400 transition"
									>
										Register
									</Link>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.nav>
			)}
		</AnimatePresence>
	);
}
