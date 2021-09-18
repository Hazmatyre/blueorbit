/** @jsx jsx */
import {  jsx } from "theme-ui"
import { Subtitle, Heading2 } from "../content/typographyStyles"
import React from 'react'

export default function contentHeaderStandard({ subtitle, heading }) {

	return(
		<>
            <div className="text-center mx-auto">
              <Subtitle sx={{ color: 'secondary' }}>{subtitle}</Subtitle>
              <Heading2 sx={{ color: 'darkpurple' }} className="max-w-xs mx-auto lg:max-w-none lg:max-w-xl">{heading}</Heading2>
            </div>		
		</>
	)
}