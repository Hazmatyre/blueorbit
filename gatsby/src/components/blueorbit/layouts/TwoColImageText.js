/** @jsx jsx */
import {  jsx } from "theme-ui"
import React from 'react'
import Img from 'gatsby-image'
import useIsInViewport from 'use-is-in-viewport'
import { css } from "@emotion/core"

import { Heading2, Subtitle } from "../content/typographyStyles"
import Button from '../ui/button'

const TwoColImageText = ( data ) => {

	const { blockid, centerVertically, classes, content, imageClasses, subtitle, backgroundColor, title, image, buttons, flexOrder, width } = data

    var backgroundStyles = ''
    if(backgroundColor) {
        backgroundStyles = css`
            background: ${backgroundColor};
            background-size: contain;
            background-repeat: no-repeat;
        `
    }    
    if(classes==="diamond") {
        backgroundStyles = css`
            background-color: #ffffff;
            background-attachment: fixed;
            background-size: cover;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(240,960,468)'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23fffafe'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='402' height='335' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.02'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");        
        `
    }

    const [isInViewport, targetRef] = useIsInViewport()

    let contentWidth = ''

    {width === 'lg:w-1/3' ? contentWidth = 'lg:w-2/3' : contentWidth = 'lg:w-1/2' }

	return(
		<>
            <div css={backgroundStyles.styles} ref={targetRef} 
            className={isInViewport ? 'inv-visible' : 'inv-hidden'}>
                <div id={blockid} className={"flex flex-wrap items-center max-w-screen-xl mx-auto py-20 lg:pt-20 lg:pb-20 fade-in px-6 lg:px-0 "} sx={{ borderBottom: ['2px solid #ed0e74', '2px solid #ed0e74', '2px solid #ed0e74', '0px solid #ed0e74', '0px solid #ed0e74'] }}>
                    <div className={"md:max-w-xl md:mx-auto lg:max-w-initial xl:max-w-screen-xl lg:w-full lg:mx-6 flex flex-wrap " + flexOrder + " " + classes + " " + centerVertically}>
                        <div className={"w-full relative " + width}>
                        	<Img className={"mx-auto " + imageClasses} fluid={ image.localFile.childImageSharp.fluid } />
                        </div>
                        <div className={"w-full  fade-in lg:pr-6 " + contentWidth}>
                            <div className="lg:pl-8 xl:py-2 text-color">
                            	<Subtitle className="pt-6 lg:pt-0" sx={{ color: 'secondary' }}>{ subtitle }</Subtitle>
                                <Heading2 sx={{ color: 'darkpurple' }}>{ title }</Heading2>
                                <div sx={{ color: 'darkpurple' }} className="pt-2 pb-0 lg:pt-2 lg:pb-4"  dangerouslySetInnerHTML={{__html: `<div> ${content} </div>` }}></div>
                            	{buttons && (
                                    <div className="mt-6 lg:mt-2">
                                        {buttons.map((node) => (
                                    		<Button sx={{ maxWidth: '180px' }} text={node.buttonText} style={node.buttonStyle} link={node.buttonLink} />
                                    	))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
	)
}

export default TwoColImageText