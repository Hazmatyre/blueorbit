/** @jsx jsx */
import {  jsx } from "theme-ui"
import React from 'react'

import { Heading2, SidewaysSubtitle } from "../content/typographyStyles"
import { NoFlexContainer, NoYPaddingComponentContainer } from '../componentStyle'

export const ContentHeader = ({ sidewaystitle, heading, paragraph }) => {

    return (
        <>
            <NoFlexContainer className="pb-0 lg:px-6">
                <NoYPaddingComponentContainer>
                    <div className="rounded lg:w-1/2 relative">
                        <SidewaysSubtitle sx={{ color: 'secondary' }}>{sidewaystitle}</SidewaysSubtitle>
                        <Heading2 className="leading-12 md:w-3/4 lg:w-11/12" sx={{ color: 'darkpurple' }}>{ heading }</Heading2>                        
                    </div>
                    <div sx={{ color: 'darkpurple' }} className=" lg:w-1/2 rounded flex items-center" dangerouslySetInnerHTML={{__html: paragraph }}></div>
                </NoYPaddingComponentContainer>
            </NoFlexContainer>                
        </>
    );
}