/** @jsx jsx */
import {  jsx } from "theme-ui"
import Img from 'gatsby-image'
import useIsInViewport from 'use-is-in-viewport'

import { Heading2, Subtitle } from "../content/typographyStyles"
import { StyledLink } from "../ui/"
import { HomeAboutContainer } from '../componentStyle'

export default function LeftImageRightContent({ data }) {

	const homefields = data.wpPage.pg_home_aboutus_fields

    const [isInViewport, targetRef] = useIsInViewport()

	return(
		<div>
            <HomeAboutContainer ref={targetRef} 
                className={isInViewport ? 
                'inv-visible lg:px-6 md:max-w-xl lg:max-w-initial xl:max-w-screen-xl xl:pb-20' : 
                'inv-hidden  lg:px-6 md:max-w-xl lg:max-w-initial xl:max-w-screen-xl xl:pb-20 '}>
                <div className="lg:w-2/4 w-full">
                    <Img className="w-3/3 mx-auto lg:w-full" alt={ homefields.homeAboutUsImg.altText } fluid={ homefields.homeAboutUsImg.localFile.childImageSharp.fluid } />
                </div>
                <div className="lg:w-2/4 w-full lg:pr-6">
                    <div className="lg:pl-8 pt-2 text-color">
                    	<Subtitle className="pt-6" sx={{ color: 'secondary' }}>{ homefields.homeAboutUsSubtitle }</Subtitle>
                        <Heading2 sx={{ color: 'darkpurple' }}>{ homefields.homeAboutUsTitle }</Heading2>
                        <div sx={{ color: 'darkpurple' }} className="pt-2 pb-3 lg:pt-2 lg:pb-6"  dangerouslySetInnerHTML={{__html: `<div> ${homefields.homeAboutUsContent} </div>` }}></div>
                    	<StyledLink sx={{ maxWidth: '150px' }} primary to={ homefields.homeAboutUsButtonLink }>{ homefields.homeAboutUsButtonText }</StyledLink>
                    </div>
                </div>
            </HomeAboutContainer>		
		</div>		
	)
}