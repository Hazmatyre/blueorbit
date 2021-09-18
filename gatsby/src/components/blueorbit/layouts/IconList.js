/** @jsx jsx */
import {  jsx } from "theme-ui"
import useIsInViewport from 'use-is-in-viewport'

import React from 'react'
import Img from 'gatsby-image'

import { NoYPaddingComponentContainer } from "../componentStyle"

const IconList = (data) => {

	const [isInViewport, targetRef] = useIsInViewport()

	var columns = 'lg:w-1/3'

	if(data.columns == 'two') {
		columns = 'lg:w-1/2'
	}

	return(
		<div>
			<NoYPaddingComponentContainer 
			 sx={{ borderBottom: ['2px solid #ed0e74', '2px solid #ed0e74', '2px solid #ed0e74', '0px solid #ed0e74', '0px solid #ed0e74'] }}
			ref={targetRef} 
            className={isInViewport ? 
            	'inv-visible py-16 lg:pt-0 px-6' : 
            	'inv-hidden py-16 lg:pt-0 px-6'}>
				<div className="flex flex-wrap lg:mx-auto lg:w-12/12">
					{data.iconListItem.map((node) => (
						<div className={"py-4 w-full md:w-1/2 flex items-center " + columns}>
							<div sx={{ maxWidth: '60px', minWidth: '60px' }} className="float-left md:w-2/6">
								<Img className="block" fixed={node.icon.localFile.childImageSharp.fixed} alt="" />
							</div>
							<div sx={{ color: 'darkpurple', maxWidth: '75%' }} className="text-lg ml-10 float-left md:w-4/6">
								<p className="mt-0 font-semibold">{node.iconHeading}</p>
								<p className="mt-0">{node.iconText}</p>
							</div>
						</div>
					))}
				</div>
			</NoYPaddingComponentContainer>
		</div>
	)
}

export default IconList