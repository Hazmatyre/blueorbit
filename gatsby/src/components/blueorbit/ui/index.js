/** @jsx jsx */
import UniversalLink from "../UniversalLink"
import styled from '@emotion/styled'
import tw from "twin.macro"

export const StyledLink = styled(UniversalLink)`
	${tw`
  		flex items-center transition-all ease-linear align-middle visible whitespace-nowrap justify-center max-w-xs py-0 px-8 text-base font-semibold text-white focus:outline-none hover:opacity-90 rounded
  	`}
    &:hover {
      background: white;
      color: #23173c;
      border: 1px solid ${props => props.primary ? "#ed0e74" : "#23173c"};
    }
    border: 1px solid transparent;
    font-weight: 500;
    font-size: 18px;
    height: 65px;
    animation-delay: 0.5s;
    animation-name: fadeInUp;
    z-index: 1;
    transition-delay: 0s;
    transition-duration: 0.2s;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
    -webkit-appearance: none;   
  	background-color: ${props => props.primary ? "#ed0e74" : "#23173c"};
  	// color: ${({ theme }) => theme.colors['white']}
`;

export const StyledSmallButton = styled.button`
  ${tw`
      flex items-center w-full mx-auto mt-4 xl:px-2 px-6 align-middle justify-center whitespace-nowrap lg:text-base text-base font-semibold text-white focus:outline-none hover:opacity-90 rounded
    `}
    &:hover {
      background: #ed0e74;
      color: #fff;
    }
    max-width: initial;
    height: 65px;
    animation-delay: 0.5s;
    animation-name: fadeInUp;
    z-index: 1;
    transition-delay: 0s;
    transition-duration: 0.2s;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);   
    -webkit-appearance: none;  
    background: ${props => props.primary ? "#ed0e74" : "#23173c"};
    // color: ${({ theme }) => theme.colors['white']}  
`

export const StyledSmallAnchor = styled.a`
  ${tw`
      inline-block py-2 xl:px-4 px-6 lg:text-sm text-base font-semibold leading-10 text-white focus:outline-none hover:opacity-90
    `}
    background: ${props => "#e0e0e0"};
    color: #23173c;
`

export const StyledSmallLink = styled(UniversalLink)`
	${tw`
  		flex items-center mx-auto mt-4 xl:px-2 px-6 align-middle justify-center whitespace-nowrap lg:text-base text-base font-semibold text-white focus:outline-none hover:opacity-90 rounded
  	`}
    &:hover {
      background: #ed0e74;
      color: #fff;
    }
    max-width: 125px;
    height: 38px;
    animation-delay: 0.5s;
    animation-name: fadeInUp;
    z-index: 1;
    transition-delay: 0s;
    transition-duration: 0.2s;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);  
    -webkit-appearance: none;   
  	background: ${props => props.primary ? "#ed0e74" : "#23173c"};
  	// color: ${({ theme }) => theme.colors['white']}
`;

export const StyledBlogTag = styled(UniversalLink)`
  ${tw`
      inline-block py-2 xl:px-4 px-6 lg:text-sm text-base font-semibold leading-10 text-white focus:outline-none hover:opacity-90
    `}
    background: ${props => "#e0e0e0"};
    color: #23173c;
`;

export const StyledSlimLink = styled(UniversalLink)`
  ${tw`
      inline-block py-2 px-8 lg:text-base text-base font-semibold leading-10 text-white focus:outline-none hover:opacity-90 rounded-md
    `}
    background: ${props => props.primary ? "#ed0e74" : "#23173c"};
    // color: ${({ theme }) => theme.colors['white']}
`;