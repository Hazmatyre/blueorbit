/** @jsx jsx */
import {  jsx } from "theme-ui"
import { useState } from 'react'

import { Heading2 } from "../content/typographyStyles"
import { StyledLink } from "../ui/"

function CTAComponent() {

    return (
        <div>
            <div className="insidecta">
                <div className="hero py-14 px-6" sx={{ background: 'linear-gradient(91deg,#0d8bf9,#ec0e73)'}}>
                    <div className="mx-auto container max-w-screen-xl flow-root">
                        <div className="flex flex-wrap items-center ">
                            <div className="w-full md:w-full text-center lg:text-left lg:pr-5" sx={{ maxWidth: ["100%", "100%", "100%", "700px"]}}>
                                <Heading2 sx={{ color: 'white' }}></Heading2>
                            </div>
                            <div sx={{ maxWidth: ["400px", "400px", "400px", "100%", '1000px'] }} className="lg:float-right mx-auto w-full md:w-full flex-wrap justify-center lg:justify-end flex text-center xl:text-right mt-6 lg:-mt-2">
                                <StyledLink className="mt-4 cursor-pointer lg:w-1/4 xl:w-3/12 w-full">Request a call</StyledLink>
                            </div>
                        </div>
                    </div>
                </div>           
            </div>
        </div>
    );
}

export default CTAComponent;
