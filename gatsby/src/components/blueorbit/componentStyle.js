import styled from '@emotion/styled'
import tw from "twin.macro"

export const BigHeroComponentContainer = styled.div`
	${tw`
		mx-auto relative pb-24 lg:pb-20 pt-24
	`}
`

export const HomeAboutContainer = styled.div`
	${tw`
		flex flex-wrap items-center  
		max-w-screen-xl mx-auto 
		pt-20 px-6 md:pt-20 lg:px-0		
	`}
`

export const QuickLinksContainer = styled.div`
	${tw`
		relative bg-white -mt-20 rounded-xl px-6 pt-20 mx-auto max-w-screen-xl
	`}
`

export const ComponentContainer = styled.div`
	${tw`
		flex flex-wrap items-center  max-w-screen-xl mx-auto py-20 md:py-20 px-6 lg:px-0
	`}
`

export const NoFlexContainer = styled.div`
	${tw`
		max-w-screen-xl mx-auto py-20 md:py-20 px-6 lg:px-0
	`}
`

export const NoFlexNoPadding = styled.div`
	${tw`
		max-w-screen-xl mx-auto
	`}
`

export const NoFlexNoBottomContainer = styled.div`
	${tw`
		max-w-screen-xl mx-auto py-24 md:py-28 pb-0 md:pb-0 px-6 lg:px-0
	`}
`

export const SmallComponentContainer = styled.div`
	${tw`
		flex flex-wrap items-center  max-w-screen-xl mx-auto py-12 md:py-14 px-6 lg:px-0
	`}
`

export const HalfTopComponentContainer = styled.div`
	${tw`
		flex flex-wrap items-center  max-w-screen-xl mx-auto pt-12 pb-24 md:pt-14 md:pb-28 px-6 lg:px-0
	`}
`

export const HalfBottomComponentContainer = styled.div`
	${tw`
		flex flex-wrap items-center  max-w-screen-xl mx-auto pb-12 pt-24 md:pb-14 md:pt-28 px-6 lg:px-0
	`}
`

export const NoYPaddingComponentContainer = styled.div`
	${tw`
		flex flex-wrap items-center  max-w-screen-xl mx-auto lg:px-0
	`}
`

export const SliderContainer = styled.div`
	${tw`
		max-w-screen-xl mx-2 mt-6 lg:mx-auto  lg:pb-0
	`}
`

export const Cushion = ( styles ) => styled.div`
	${tw`

	`}
`


export const PrivacyContainer = styled.div`
	${tw`
		flex flex-wrap items-center  max-w-screen-xl mx-auto py-24 md:py-28 px-6 lg:px-0
	`}
	h1, h2, h3 {
		color: #23173c;	
	}
	h2, h3 {
		margin-top: 40px;
	}
	ul li, ol li {
		color: #23173c;
		margin-bottom: 20px;
	}
	ul, ol, p {
		width: 100%;
	}
`