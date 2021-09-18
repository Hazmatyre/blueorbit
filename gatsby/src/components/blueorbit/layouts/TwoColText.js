import React from 'react'

import { Heading2, Subtitle } from "../content/typographyStyles"
import { StyledLink } from "../ui/"

const TwoColText = (data) => {
    
	const { textColor } = data

	return(
		<>
            <div sx={{ bg: textColor }} className="flex flex-wrap items-center  max-w-screen-xl mx-auto py-24 md:py-28 px-6 lg:px-0">
                <div className="lg:w-2/4 w-full ">
                </div>
                <div className="lg:w-2/4 w-full lg:pr-6">
                    <div className="lg:pl-8 py-2 text-color">
                    	<Subtitle sx={{ color: 'secondary' }}></Subtitle>
                        <Heading2 sx={{ color: 'darkpurple' }}></Heading2>
                        <div sx={{ color: 'darkpurple' }} className="pt-2 pb-4 lg:pt-2 lg:pb-6"></div>
                    	<StyledLink className="inline-block" primary to="#"></StyledLink>
                    </div>
                </div>
            </div>	
		</>
	)
}

export default TwoColText