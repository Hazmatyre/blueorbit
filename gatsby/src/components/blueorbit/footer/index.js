/** @jsx jsx */
import {  jsx } from "theme-ui"
import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SocialIcons from "../social"
import LogoImg from '../../images/logo.svg';
import FooterContact from './contact'

export default function Footer() {
	const data = useStaticQuery(graphql`
		query FooterData {
		  wpMenu(name: {eq: "Footer1"}) {
		    menuItems {
		      nodes {
		        label
		        parentId
		        url
		        id
		      }
		    }
		  }
		}
	`)	

	// const FooterData = FooterData.wpMenu

  	return (
  		<div>
			<div sx={{ borderColor: 'secondary' }} id="footer" className="border-t-2 f-f-p px-6 py-20 bg-white">
			    <div className="w-full lg:flex justify-between mx-auto container max-w-screen-xl">
			        <div className="lg:w-full md:flex-wrap justify-between md:flex">
			            <div className="mt-0 md:w-1/2 lg:w-1/4 lg:mt-0">
			                <div>
			                    <div>
			                        <img width="193" height="103" alt="PlusGroup Logo" src={LogoImg} />
			                    </div>
								<FooterContact />
			                </div>
			            </div>
			            <div className="mt-12 md:w-1/2 lg:w-1/4 md:mt-4 lg:mt-0 lg:items-center">
			                <div className="w-3/4">
			                    <h3 sx={{ color: 'darkpurple' }} className="color-primary">Social</h3>                      
			                    <SocialIcons />
			                </div>
			            </div>               
			            <div className="mt-12 md:w-1/2 lg:w-1/4 md:mt-16 lg:mt-0 md:mt-4 lg:mt-0">
			                <ul>
			                    <li>
			                        <h3 sx={{ color: 'darkpurple' }} className="color-primary">About Us</h3>
			                    </li>
			                    <li className="mt-6 text-black">
			                        <Link to="/about/">About Us</Link >
			                    </li>
			                    <li className="mt-2 text-black">
			                        <Link to="/our-team/">Meet our Team</Link>
			                    </li>
			                    <li className="mt-2 text-black">
			                        <Link to="/contact-us/">Contact Us</Link>
			                    </li>
			                    <li className="mt-2 text-black">
			                        <Link to="/privacy-policy/">Privacy Policy</Link>
			                    </li>                        
			                </ul>
			            </div>
			            <div className="mt-12 md:w-1/2 lg:w-1/4 md:mt-16 lg:mt-0 md:mt-4 lg:mt-0">
			                <ul>
			                    <li>
			                        <h3 sx={{ color: 'darkpurple' }} className="color-primary">Services</h3>
			                    </li>
			                    <li className="mt-6 text-black">
			                        <Link to="/sjp-paraplanning-support/">SJP Paraplanning Support</Link>
			                    </li>
			                    <li className="mt-2 text-black">
			                        <Link to="/sjp-administration-support/">SJP Administration Support</Link>
			                    </li>
			                    <li className="mt-2 text-black">
			                        <Link to="/chasing-service/">SJP Chasing Service</Link>
			                    </li>
			                    <li className="mt-2 text-black">
			                        <Link to="/sjp-client-servicing-support/">SJP Client Servicing Support</Link>
			                    </li>  
			                    <li className="mt-2 text-black">
			                        <Link to="/social-media-management/">SJP Social Media Management</Link>
			                    </li>    
			                    <li className="mt-2 text-black">
			                        <Link to="/sjp-cash-flow-modelling-support/">SJP Cashflow Modelling</Link>
			                    </li>
			                    <li className="mt-2 text-black">
			                        <Link to="/sjp-marketing-support/">SJP Marketing Support</Link>
			                    </li>    			                                      
			                </ul>
			            </div>               
			        </div>
			    </div>
			</div>
			<div sx={{ bg: 'secondary' }} className="py-5 text-white text-center">
			    <p className="text-white pt-0 mt-0">Plus Partner Services Limited, trading as Plus Group. VAT Number 191887360.</p>
			</div>
		</div>
  	)
}