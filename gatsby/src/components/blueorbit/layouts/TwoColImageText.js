/** @jsx jsx */
import {  jsx } from "theme-ui"
import React from 'react'
import Img from 'gatsby-image'
import { css } from "@emotion/core"

import { Heading2, Subtitle } from "../content/typographyStyles"
import Button from '../ui/button'

const TwoColImageText = (  ) => {

	return(
		<>
            <div>
                <div className={"flex flex-wrap items-center max-w-screen-xl mx-auto py-20 lg:pt-20 lg:pb-20 fade-in px-6 lg:px-0 "} sx={{ borderBottom: ['2px solid #ed0e74', '2px solid #ed0e74', '2px solid #ed0e74', '0px solid #ed0e74', '0px solid #ed0e74'] }}>
                    <div className="md:max-w-xl md:mx-auto lg:max-w-initial xl:max-w-screen-xl lg:w-full lg:mx-6 flex flex-wrap ">
                        <div className="w-full relative ">
                        	/* IMG Here */
                        </div>
                        <div className="w-full  fade-in lg:pr-6 ">
                            <div className="lg:pl-8 xl:py-2 text-color">
                            	<Subtitle className="pt-6 lg:pt-0" sx={{ color: 'secondary' }}></Subtitle>
                                <Heading2 sx={{ color: 'darkpurple' }}></Heading2>
                                <div sx={{ color: 'darkpurple' }} className="pt-2 pb-0 lg:pt-2 lg:pb-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
	)
}

export default TwoColImageText