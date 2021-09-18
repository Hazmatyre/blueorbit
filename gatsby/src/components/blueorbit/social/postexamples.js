/** @jsx jsx */
import {  jsx } from "theme-ui"
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import Img from 'gatsby-image'
import parse, { domToReact } from 'html-react-parser'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { Subtitle, Heading2 } from "../content/typographyStyles"
import { StyledLink } from "../ui/"
import Modal from "../modal"
import Form1 from "../form/form1"

const PostExamples = ( data ) => {

	const [isModal, setIsModal] = useState(false);
	const [isFormSuccess, setFormSuccess] = useState(false);
	const [isLoading, setLoading] = useState(false);

	const cssReset = css`
		p, h5 {
			color: #23173c !important;
		}
		@media screen and (min-width: 768px) {
			flex: 0 0 calc(50.00% - 20px);
		}		
		@media screen and (min-width: 1024px) {
			flex: 0 0 calc(33.33% - 20px);
		}
	`

	const hoverColor = css`
		&:hover {
			background: #ed0e74 !important;
			border: 2px solid white !important;
			color: white !important;
		}
	`

	return(
		<>
			<div className="clear-both mx-6 pt-20 lg:py-20 mb-6 xl:mb-0 postexampleslider" sx={{ pt: '0px', borderTop: '2px solid #fff' }}>
		  		<Subtitle className="preheader mb-2 mt-0 tracking-wider mx-auto text-center" sx={{ color: 'secondary' }} >{data.subtitle}</Subtitle>
			    <Heading2 sx={{ color: 'darkpurple' }} className="text-center max-w-xs mx-auto lg:max-w-none lg:max-w-xl">{data.title}</Heading2>
	            <div className="mt-10 mx-auto flex flex-wrap justify-center max-w-md md:max-w-6xl">
		            {data.posts.map((node) => {
		            	return(
		            		<div css={cssReset.styles} className="pb-10 px-2">
				            	<div sx={{ background: node.bgColour }} className="p-4 mb-6 md:p-6 lg:p-6 hover:shadow-xl">
				            		<Img className="shadow-2xl" fluid={node.image.localFile.childImageSharp.fluid} />
				            	</div>
			            		<h3 sx={{ color: 'secondary' }} className="mt-8 mb-6 text-center">{node.title}</h3>
			            		<div className="text-center">{parse(node.description)}</div>			            	
			            	</div>
		            	)
		            })} 
		        </div>	
		        <StyledLink css={hoverColor.styles} className="cursor-pointer mx-auto hover:bg" onClick={() => setIsModal(true)}>Want this for your business?</StyledLink>
				<Modal isModal={isModal} setIsModal={setIsModal} isClosable={!isLoading} title="Request a callback">
					<Form1 isModal={isModal} parentSetSuccess={setFormSuccess} parentSetLoading={setLoading} formId="f43616c4-0faf-4387-a0c0-6568a84be191" portalId="6170895" />
				</Modal> 
			</div>
		</>
	)

}

export default PostExamples