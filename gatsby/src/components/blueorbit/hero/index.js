/** @jsx jsx */
import {  jsx } from "theme-ui"
import BackgroundImage from 'gatsby-background-image'
import { useState } from 'react'
import { FaPlayCircle } from 'react-icons/fa';
import React from 'react'
import parse, { domToReact } from 'html-react-parser'
import { css } from '@emotion/core'

import 'react-lazyload-youtube/dist/index.css'
import { StyledLink } from "../ui/"
import { Subtitle, HeroHeading1, ParagraphBig } from "../content/typographyStyles"
import { BigHeroComponentContainer } from '../componentStyle'
import Button from '../ui/button'
import Modal from "../modal"
import Form1 from "../form/form1"
import Img from "gatsby-image"

export default function Hero( data ) {

    var bgcolor = ''
    {!data.herodata.bggradient ? bgcolor = data.herodata.bgcolor : bgcolor = data.herodata.bggradient }

    const { heroVideoLink, hideCallButton } = data.herodata

    if(data.herodata.heroVideoForegroundImage) {
        var heroVideoImage = data.herodata.heroVideoForegroundImage.localFile.childImageSharp.fluid
    }


    const { buttons } = data.herodata
    const [show, setShow] = useState(true);

    const [isModal, setIsModal] = useState(false);
    const [isFormSuccess, setFormSuccess] = useState(false);
    const [isLoading, setLoading] = useState(false);

    var callButton = true
    var showCallButton = ''
    
    if(hideCallButton) {
        showCallButton = hideCallButton[0]
    }
    if(showCallButton === 'yes') {
        callButton = false
    }

    const smallScreenButton = css`
        @media screen and (min-width: 0px) and (max-width: 450px) {
            a {
                margin-top: 10px;
                margin-right: 0px !important;
            }
            display: block !important;
        }
    `

    const options1 = {
      replace: ({ name, children }) => {
        if (name === 'p') {
          return (
            <h1 className="fade-in sm:text-center sm:mx-auto lg:text-left lg:ml-0 leading-hero-mob lg:leading-hero-desk fade-in sm:text-center sm:mx-auto lg:text-left lg:ml-0 text-4xl lg:text-5xl font-semibold lg:mr-12">
              {domToReact(children, options1)}
            </h1>
          );
        }

      }
    };

	return(
		<div>
            <BigHeroComponentContainer className="hero" sx={{ background: bgcolor }}>
                <div className="mx-auto lg:px-6 max-w-screen-xl py-24 md:py-20 px-6 lg:px-0">
                    <div className="mx-auto container relative z-20 lg:px-0">
                        <div className="flex lg:flex-row flex-col items-center justify-between">
                            <div className="lg:w-2/4 xl:w-2/4 pt-2">
                                {data.herodata.subtitle && (
                                    <Subtitle className="fade-in subtitle" sx={{ color: 'white' }}>{data.herodata.subtitle}</Subtitle>
                                )}
                                {parse(data.herodata.heroTitle, options1)}
                                {data.herodata.description && (
                                    <ParagraphBig className="sm:mt-6 sm:max-w-xs sm:mx-auto sm:text-center lg:text-left lg:ml-0 fade-in leading-7 lg:max-w-md" sx={{ color: 'white' }}>{data.herodata.description}</ParagraphBig>
                                )}
                                <div css={smallScreenButton.styles} className="flex mt-6 lg:mt-8 fade-in sm:justify-center lg:justify-start">
                                    {buttons && (
                                        <>
                                            {buttons.map((node) => (
                                                <Button text={node.buttonText} style={node.buttonStyle} link={node.buttonLink} styles={{ marginRight: '10px' }} />
                                            ))}
                                        </>
                                    )}
                                    {callButton && (
                                        <>
                                            <StyledLink className="cursor-pointer" onClick={() => setIsModal(true)}>Request a call</StyledLink>
                                        </>
                                    )}
                                </div>
                            </div>
                            {heroVideoLink != null ? (
                            <div className="lg:mt-4 lg:pl-6 mt-8 lg:w-2/4 xl:w-2/4 w-full height-main-hero relative fade-in">
                                <iframe src={heroVideoLink}
                                allow="camera *; microphone *; encrypted-media *; fullscreen *; display-capture *;"
                                width="420px"
                                loading="lazy"
                                title="Videoask Video"
                                height="700px"
                                className="rounded-xl max-w-md mx-auto"
                                >
                                </iframe>                              
                            </div>) : (<Img className="md:w-full block lg:w-6/12 md:max-w-sm mx-auto" alt="admin tasks image" fluid={heroVideoImage} />)}                     
                        </div>
                    </div>
                </div>
                <Modal isModal={isModal} setIsModal={setIsModal} isClosable={!isLoading} title="Request a callback">
                    <Form1 isModal={true} parentSetSuccess={setFormSuccess} parentSetLoading={setLoading} formId="f43616c4-0faf-4387-a0c0-6568a84be191" portalId="6170895" />
                </Modal>

            </BigHeroComponentContainer>
		</div>
	)
}