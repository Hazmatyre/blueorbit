import styled from '@emotion/styled'
import tw from "twin.macro"

export const Item = styled.div`
    ${tw`
        flex items-center relative text-base font-bold lg:py-4 py-4 lg:px-0 text-gray-700 text-white border-b-2 border-gray-100 hover:text-green-400 lg:border-b-0
        lg:h-full lg:py-0
        lg:pl-0
    `}
    a {
        color: black
    }
    padding: 12px 18px;
`

export const SubItem = styled.div`
    ${tw`
        flex items-center relative text-base font-bold lg:py-4 py-3 lg:px-0 text-gray-700 text-white border-b-2 border-gray-100 hover:text-green-400 lg:absolute
    `}
    padding: 12px 18px;
`

export const Label = styled.a`
    :hover{
        ${tw`
             hover:text-green-500
        `}
    }
    width: auto;
    display: block;
    cursor: pointer;
    color: black;
`

export const Arrow = styled.span`
    ${tw`
        absolute right-0 p-1 rounded border-2 border-gray-100 lg:relative lg:border-0 lg:hidden
    `}
    display: flex;
    height: 35px;
    width: 35px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    // border: 1px solid #ebebeb;

    &::after {
        content: "";
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;

        border-top: 4px solid #000;

        transform: ${props => (props.toggle ? "rotate(180deg)" : "rotate(0deg)")};
    }
`

// const Container = styled.div`
//   background: ${colorFromTheme(({ category }) => category)};
// `;