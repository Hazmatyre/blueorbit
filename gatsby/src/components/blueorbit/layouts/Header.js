/** @jsx jsx */
import {  jsx } from "theme-ui"
import { Subtitle, Heading2, Heading3 } from "../content/typographyStyles"
import React from 'react'

export default function SectionHeader({ classes, subtitle, title, smalltitle }) {

  return(
		<>
      <div className={"text-center pb-6 mx-auto " + classes}>
      	<Subtitle sx={{ color: 'secondary' }}>{ subtitle }</Subtitle>
      	<Heading2 sx={{ color: 'darkpurple' }} className="max-w-xs mx-auto lg:max-w-none">{ title }</Heading2>
      	{smalltitle && (
      		<Heading3 sx={{ color: 'darkpurple', maxWidth: '75%' }} className="mt-1 mx-auto">{ smalltitle }</Heading3>
      	)}
      </div>		
		</>
	)
}