/** @jsx jsx */
import {  jsx } from "theme-ui"

import { ComponentContainer } from '../componentStyle'
import SectionHeader from './Header'
import { css } from "@emotion/core"

const CentredContent = (  ) => {

	return(
		<div>
			<ComponentContainer className="md:max-w-xl lg:max-w-screen-xl lg:px-6">
				<SectionHeader subtitle="subtitle" title="heading" smalltitle="smalltitle" />
				<div className="w-full" sx={{ color: 'darkpurple' }}></div>
			</ComponentContainer>
		</div>
	)
}

export default CentredContent