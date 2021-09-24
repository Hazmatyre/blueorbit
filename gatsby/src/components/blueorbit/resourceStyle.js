import styled from '@emotion/styled'
import tw from "twin.macro"

export const ResourceListingContainer = styled.div`
	${tw`
		sm:px-4 mb-6
	`}	
	&:hover {
		cursor: pointer;
	}
	.moveMeUp {
		top: 0px;
		transition: all .5s ease-in-out;
	}
	a {
		opacity: 0;
		transition: all .5s ease-in-out;
	}
`

export const ResourceListingDetail = styled.div`
	${tw`
		bg-white relative sm:max-w-xs mx-auto shadow-xl rounded-lg p-6
	`}	
`