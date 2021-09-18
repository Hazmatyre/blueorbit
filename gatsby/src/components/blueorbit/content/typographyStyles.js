import styled from '@emotion/styled'
import tw from "twin.macro"

export const HeroHeading1 = styled.h1`
	${tw`
  		text-4xl lg:text-5xl font-semibold lg:mr-12
  	`}
  	line-height: 48px !important;
  	@media screen and (min-width: 1024px) {
  		line-height: 60px !important;
  	}
`

export const Heading1 = styled.h1`
	${tw`

  	`}
`

export const Heading2 = styled.h2`
	${tw`

  	`}
`

export const Heading3 = styled.h3`
	${tw`
  		
  	`}
`

export const Heading4 = styled.h4`
	${tw`
  		
  	`}
`

export const Heading5 = styled.h5`
	${tw`
  		
  	`}
`

export const Subtitle = styled.p`
	${tw`
		text-lg mt-0 lg:text-lg mb-2 tracking-wider font-semibold
	`}
`

export const SidewaysSubtitle = styled(Subtitle)`
	${tw`
		z-10 mt-0 mb-6
	`}
	&:after {
		display: block;
		content: '';
		height: 4px;
		background: #ed0e74;
		width: auto;
	}
	display:inline-block;
`

export const ParagraphBig = styled.p`
	${tw`
		text-lg lg:text-lg leading-6 lg:leading-8
	`}
`

export const Paragraph = styled.p`
	${tw`

	`}
`

export const ParagraphSmall = styled.p`
	${tw`
		text-xs leading-6
	`}
`