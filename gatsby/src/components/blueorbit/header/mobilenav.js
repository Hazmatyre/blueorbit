// https://codesandbox.io/s/infinite-multi-level-menu-react-js-89fmj?file=/src/MultiMenus.js
import React, { useState, useEffect } from "react";

import LogoImg from '../../../images/logo.svg';
import MobileList from './mobilelist';

import { Link } from "gatsby"

export default function MobileNav( menu ) {
    const [show, setShow] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const responsive = "mobile"   


    // change state on scroll
    useEffect(() => {
            const handleScroll = () => {
            const isScrolled = window.scrollY > 80;
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


    return (
        <>
            <div className={show ? "mobilenav-container lg:hidden shadow-lg lg:w-76 w-64 z-40 fixed z-40 top-0 bg-white shadow min-h-screen flex-col justify-between pb-12 transition duration-150 ease-in-out transform  translate-x-0" : "lg:w-76  lg:hidden w-64 z-40 fixed z-40 top-0 bg-white shadow min-h-screen flex-col justify-between pb-12 transition duration-150 ease-in-out transform  -translate-x-full"}>
                {" "}
                <div className="lg:px-6 px-4 flex justify-between items-center pt-6">
                    <Link to="/" className="cursor-pointer w-full">
                        <img width="136" height="73" src={LogoImg} className="w-4/6 mx-auto" alt="PlusGroup Logo" />
                    </Link>
                    <div role="button" tabIndex="0" className="cursor-pointer lg:block hidden" onClick={() => setShow(!show)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 40 40" fill="none">
                            <rect x="4.09033" y="0.0544434" width={50} height={5} rx="2.5" transform="rotate(45 4.09033 0.0544434)" fill="white" />
                            <rect x="0.554688" y="36.4097" width={50} height={5} rx="2.5" transform="rotate(-45 0.554688 36.4097)" fill="white" />
                        </svg>
                    </div>
                    <div role="button" tabIndex="0" className="cursor-pointer lg:hidden block" onClick={() => setShow(!show)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 40 40" fill="none">
                            <rect x="4.09033" y="0.0544434" width={50} height={5} rx="2.5" transform="rotate(45 4.09033 0.0544434)" fill="white" />
                            <rect x="0.554688" y="36.4097" width={50} height={5} rx="2.5" transform="rotate(-45 0.554688 36.4097)" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className="lg:px-6 px-4">
                    <MobileList menu={menu} responsive={responsive} />
                </div>
            </div>
            <nav data-active={scrolled} className="fixed w-full py-4 relative lg:hidden bg-white">
                <div className="mx-auto lg:px-0 px-6 h-full relative">
                    <div className="lg:flex hidden items-center pt-16 absolute w-full 2xl:px-0 px-4">
                        <div role="button" tabIndex="0" className="cursor-pointer pr-6" onClick={() => setShow(!show)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={50} height={31} viewBox="0 0 50 31" fill="none">
                                <rect x={50} y={31} width={50} height={5} rx="2.5" transform="rotate(180 50 31)" fill="#251F2C" />
                                <rect x={50} y={5} width={50} height={5} rx="2.5" transform="rotate(180 50 5)" fill="#251F2C" />
                                <rect x={35} y={18} width={55} height={5} rx="2.5" transform="rotate(180 35 18)" fill="#251F2C" />
                            </svg>
                        </div>
                        <Link to="/" className="cursor-pointer">
                            <img width="160" height="85" src={LogoImg} className="w-28" alt="PlusGroup Logo" />
                        </Link>
                    </div>
                    <nav className="lg:hidden">
                        <div className="flex items-center">
                            <div role="button" tabIndex="0" className="cursor-pointer pr-6 absolute right-0" onClick={() => setShow(!show)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 50 31" fill="none">
                                    <rect x={50} y={31} width={50} height={5} rx="2.5" transform="rotate(180 50 31)" fill="#251F2C" />
                                    <rect x={50} y={5} width={50} height={5} rx="2.5" transform="rotate(180 50 5)" fill="#251F2C" />
                                    <rect x={20} y={18} width={50} height={5} rx="2.5" transform="rotate(180 35 18)" fill="#251F2C" />
                                </svg>
                            </div>
                            <Link to="/" className="cursor-pointer">
                                <div>
                                    <img width="160" height="85" src={LogoImg} className="fade-in w-40" alt="PlusGroup Logo" />
                                </div>
                            </Link>
                        </div>
                    </nav>
                </div>            
            </nav>
        </>
    );
}
