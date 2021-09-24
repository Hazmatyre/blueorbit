import React, { useState } from "react";
import LogoImg from '../../images/logo.svg';

const Header = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className="border-b-2 shadow-md">
                <div className="mx-auto container relative px-6 xl:px-0">
                    <nav>
                        <div className="lg:flex justify-between w-full py-8 hidden">
                            <a className="flex justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700" role="banner">
                                <img className="my-auto w-auto h-10" src={LogoImg} alt="Logo" />
                            </a>
                            <div className="mt-2 lg:w-2/3 xl:w-1/2">
                                <ul className="font-normal text-lg flex justify-between items-center text-black font-medium">
                                    <li className="hover:text-indigo-600 cursor-pointer">
                                        <a className="focus:outline-none focus:underline focus:text-indigo-700" >
                                            Home
                                        </a>
                                    </li>
                                    <li className="hover:text-indigo-600 cursor-pointer">
                                        <a className="focus:outline-none focus:underline focus:text-indigo-700" >
                                            About
                                        </a>
                                    </li>
                                    <li className="hover:text-indigo-600 cursor-pointer">
                                        <a className="focus:outline-none focus:underline focus:text-indigo-700" >
                                            Products
                                        </a>
                                    </li>
                                    <li className="hover:text-indigo-600 cursor-pointer underline font-bold">
                                        <a className="focus:outline-none focus:text-indigo-700">
                                            Join the club today!
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <nav className="lg:hidden py-4">
                        <div className="flex py-2 justify-between items-center">
                            <div>
                                <a className="flex justify-center">
                                    <img className="my-auto w-auto h-10" src={LogoImg} alt="Logo" />
                                </a>
                            </div>
                            <div className="visible flex items-center">
                                {show && (
                                    <ul id="list" className=" py-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-20 md:px-4 md:mt-20 z-20">
                                        <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <a>
                                                <span className="ml-2 font-bold">Home</span>
                                            </a>
                                        </li>
                                        <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                                            <a>
                                                <span className="ml-2 font-bold">About</span>
                                            </a>
                                        </li>
                                        <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                            <a>
                                                <span className="ml-2 font-bold">Products</span>
                                            </a>
                                        </li>
                                        <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                                            <a>
                                                <span className="ml-2 font-bold underline">Join the club today!</span>
                                            </a>
                                        </li>
                                    </ul>
                                )}
                                <div className="xl:hidden" onClick={() => setShow(!show)}>
                                    {show ? (
                                        <div className=" close-m-menu">
                                            <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <line x1={18} y1={6} x2={6} y2={18} />
                                                <line x1={6} y1={6} x2={18} y2={18} />
                                            </svg>
                                        </div>
                                    ) : (
                                        <svg id="open" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={4} y1={8} x2={20} y2={8} />
                                            <line x1={4} y1={16} x2={20} y2={16} />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
