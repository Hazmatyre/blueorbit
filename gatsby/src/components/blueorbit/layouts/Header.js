/** @jsx jsx */
import {  jsx } from "theme-ui"
import { Subtitle, Heading2, Heading3 } from "../content/typographyStyles"
import React from 'react'

export default function SectionHeader() {

  return(
		<>
      <div className="text-center pb-6 mx-auto ">
      	<Subtitle sx={{ color: 'secondary' }}></Subtitle>
      	<Heading2 sx={{ color: 'darkpurple' }} className="max-w-xs mx-auto lg:max-w-none"></Heading2>
      </div>		
		</>
	)
}