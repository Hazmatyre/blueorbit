/** @jsx jsx */
import {  jsx } from "theme-ui"

import { css } from '@emotion/core'
import { Heading1 } from "../content/typographyStyles"

export default function SmallHero( data ) {

    var bgColor = ''

    var redGradient = css`
        background: linear-gradient(91deg, #0d8bf9, #ec0e73);
    `

    {!data.backgroundColor ? bgColor = 'secondary' : bgColor = data.backgroundColor }

	return(
		<div>
            <div css={redGradient.styles} sx={{ bg: bgColor }} className="pt-24 hero mx-auto relative">
                <div className="container mx-auto max-w-screen-xl py-24 md:py-28 px-6 lg:px-0">
                    <div className="mx-auto container relative z-20 lg:px-0">
                        <div className="flex lg:flex-row flex-col items-center justify-between">
                            <div className="lg:w-full">
                                <Heading1 className="mt-4 text-center" sx={{ color: 'white' }}>{data.title}</Heading1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	)
}