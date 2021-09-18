/** @jsx jsx */
import {  jsx } from "theme-ui"

import Button from '../ui/button'
import { HalfTopComponentContainer } from '../componentStyle'

const CentredButton = ( data ) => {

	return(
		<div>
			<HalfTopComponentContainer>
				<Button text={data.buttonText} style={data.buttonStyle} link={data.buttonLink} styles={{ marginLeft: 'auto', marginRight: 'auto' }} />
			</HalfTopComponentContainer>
		</div>
	)
}

export default CentredButton