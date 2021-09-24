import React, { useState, useEffect } from "react";

import LogoImg from '../../../images/logo.svg';
import DesktopList from './desktoplist';

import { Link } from "gatsby"

export default function DesktopNav( menu ) {
	// determined if page has scrolled and if the view is on mobile
	const [scrolled, setScrolled] = useState(false);
    const responsive = "desktop"

	// change state on scroll
	useEffect(() => {
			const handleScroll = () => {
			const isScrolled = window.scrollY > 150;
			if (isScrolled !== scrolled) {
				setScrolled(!scrolled);
			}
		};

		document.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			// clean up the event handler when the component unmounts
			document.removeEventListener('scroll', handleScroll);
		};
	}, [scrolled]);

	return(
	<>
    	<nav data-active={scrolled} className="hidden lg:block w-full text-gray-700 px-5 xl:px-0 bg-white fixed top-0 animated z-40">
      		<div className="flex flex-col max-w-screen-xl mx-auto lg:items-stretch lg:justify-between lg:flex-row">
        		<div className="py-3 px-6 lg:px-0 flex flex-row items-center justify-between">
					<Link to="/" className="tracking-widest rounded-lg focus:outline-none focus:shadow-outline">
						<img width="145" height="47" src={LogoImg} className="w-3/4" alt="PlusGroup Logo" />
					</Link>
        		</div>	

        		{/* START DesktopNav */}
				<DesktopList menu={menu} responsive={responsive}/>
				{/* END DesktopNav */}
			</div>
		</nav>
	</>
	)
}