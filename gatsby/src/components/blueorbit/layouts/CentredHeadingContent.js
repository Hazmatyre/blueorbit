/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from "@emotion/core"

import { HalfTopComponentContainer } from '../componentStyle'
import { Heading2, SidewaysSubtitle } from "../content/typographyStyles"

const CentredHeadingContent = (  ) => {

	return(
		<div>
            <div className="rounded mx-auto mt-20 lg:w-1/2 relative text-center">
                <SidewaysSubtitle sx={{ color: 'secondary' }}></SidewaysSubtitle>
                <Heading2 className="leading-12 lg:w-12/12" sx={{ color: 'darkpurple' }}></Heading2>                        
            </div>
		</div>
	)
}

export default CentredHeadingContent