/** @jsx jsx */
import {  jsx } from "theme-ui"
import { useState } from 'react'
import { FaPlayCircle } from 'react-icons/fa';
import React from 'react'
import { css } from '@emotion/react'

import { StyledLink } from "../ui/"
import { Subtitle, HeroHeading1, ParagraphBig } from "../content/typographyStyles"
import { BigHeroComponentContainer } from '../componentStyle'

export default function Hero(  ) {

    var bgcolor = "linear-gradient(91deg, #0d8bf9, #ec0e73)";

	return(
		<div>
            <BigHeroComponentContainer className="hero" sx={{ bg: "primary" }}>
                <div className="mx-auto lg:px-6 max-w-screen-xl py-24 md:py-20 px-6 lg:px-0">
                    <div className="mx-auto container relative z-20 lg:px-0">
                        <div className="flex lg:flex-row flex-col items-center justify-between">
                            <div className="lg:w-2/4 xl:w-2/4 pt-2">
                                 <Subtitle className="fade-in subtitle" sx={{ color: 'white' }}>Lorem Ipsum</Subtitle>
                                <div className="flex mt-6 lg:mt-8 fade-in sm:justify-center lg:justify-start">
                                    <StyledLink className="cursor-pointer">Request a call</StyledLink>
                                </div>
                            </div>
                            <div className="lg:mt-4 lg:pl-6 mt-8 lg:w-2/4 xl:w-2/4 w-full height-main-hero relative fade-in">
                                <h3>Vid</h3>                              
                            </div>                    
                        </div>
                    </div>
                </div>
            </BigHeroComponentContainer>
		</div>
	)
}