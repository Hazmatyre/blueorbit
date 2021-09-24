/** @jsx jsx */
import {  jsx } from "theme-ui"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaLinkedin, FaFacebookF, FaTwitter, FaInstagramSquare } from 'react-icons/fa'

const SocialIcons = () => {

	return(
		<>
		    <div className="flex w-4/12 sm:w-1/4 lg:w-full justify-between lg:pr-4 items-center mt-6">
		        <div className="mr-4">
		            <a href="#" rel="noreferrer" target="_blank">
		                <FaLinkedin className="border-2 border-pink-200 p-3 rounded-full hover:shadow-md hover:border-pink-400" size={54} sx={{ fill: 'secondary', strokeWidth: 20 }} />
		            </a>
		        </div>
		    </div>
		</>
    )
}

export default SocialIcons