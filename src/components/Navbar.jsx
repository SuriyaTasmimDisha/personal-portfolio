import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import Switcher from "./Switcher";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#FDF8F0] dark:bg-primary`}>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}>
					<img src={logo} alt="logo" className="w-9 h-9 object-contain" />
					<p className="text-[#353535] dark:text-secondary text-[18px] font-bold cursor-pointer flex">
						Suriya Disha&nbsp;
						<span className="sm:block hidden">| Full Stack Developer</span>
					</p>
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
					<Switcher />
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.title
									? "text-red-100 dark:text-red-100"
									: "text-[#353535] dark:text-secondary"
							}
							hover:text-red-100 dark:hover:text-red-100 text=[18px] font-medium cursor-pointer`}
							onClick={() => {
								setActive(link.title);
							}}>
							<a
								href={link.link ? link.link : `#${link.id}`}
								target={link.link ? "_blank" : "_self"}>
								{link.title}
							</a>
						</li>
					))}
				</ul>
				<div className="sm:hidden flex flex-1 justify-end items-center">
					<div className="flex justify-evenly items-center gap-4">
						<Switcher />
						<img
							src={toggle ? close : menu}
							alt="menu"
							className="w-[28px] h-[28px] object-contain cursor-pointer"
							onClick={() => setToggle(!toggle)}
						/>
						<div
							className={`${
								!toggle ? "hidden" : "flex"
							} p-6 bg-[#FF595A] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
							<ul className="list-none flex justify-end items-start flex-col gap-4">
								{navLinks.map((link) => (
									<li
										key={link.id}
										className={`${
											active === link.title
												? "text-[#FDF8F0]"
												: "text-[#353535]"
										}
									hover:text-red-100 font-poppins font-medium cursor-pointer text-[16px]`}
										onClick={() => {
											setToggle(!toggle);
											setActive(link.title);
										}}>
										<a href={`#${link.id}`}>{link.title}</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
