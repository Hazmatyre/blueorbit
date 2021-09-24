/** @jsx jsx */
import {  jsx } from "theme-ui"
import Img from 'gatsby-image'

import { Heading2, Subtitle } from "../content/typographyStyles"
import { StyledLink } from "../ui/"
import { HomeAboutContainer } from '../componentStyle'

export default function LeftImageRightContent() {

	return(
		<div>
            <HomeAboutContainer>
                <div className="lg:w-2/4 w-full">
                    /* Img goes here */
                </div>
                <div className="lg:w-2/4 w-full lg:pr-6">
                    <div className="lg:pl-8 pt-2 text-color">
                    	<Subtitle className="pt-6" sx={{ color: 'secondary' }}></Subtitle>
                        <Heading2 sx={{ color: 'darkpurple' }}></Heading2>
                        <div sx={{ color: 'darkpurple' }} className="pt-2 pb-3 lg:pt-2 lg:pb-6"></div>
                    </div>
                </div>
            </HomeAboutContainer>		
		</div>		
	)
}