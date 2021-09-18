/** @jsx jsx */
import {  jsx } from "theme-ui"
import { useState } from 'react'

import { Heading2 } from "../content/typographyStyles"
import { StyledLink } from "../ui/"
import Button from '../ui/button'
import Modal from "../modal"
import Form1 from "../form/form1"

function CTAComponent( data ) {

    const { heading, buttons } = data

    const [isModal, setIsModal] = useState(false);
    const [isFormSuccess, setFormSuccess] = useState(false);
    const [isLoading, setLoading] = useState(false);

    return (
        <div>
            <div className="insidecta">
                <div className="hero py-14 px-6" sx={{ background: 'linear-gradient(91deg,#0d8bf9,#ec0e73)'}}>
                    <div className="mx-auto container max-w-screen-xl flow-root">
                        <div className="flex flex-wrap items-center ">
                            <div className="w-full md:w-full text-center lg:text-left lg:pr-5" sx={{ maxWidth: ["100%", "100%", "100%", "700px"]}}>
                                <Heading2 sx={{ color: 'white' }}>{heading}</Heading2>
                            </div>
                            <div sx={{ maxWidth: ["400px", "400px", "400px", "100%", '1000px'] }} className="lg:float-right mx-auto w-full md:w-full flex-wrap justify-center lg:justify-end flex text-center xl:text-right mt-6 lg:-mt-2">
                                {buttons.map((node) => (
                                    <Button classes="w-full mt-4 lg:w-1/4 xl:w-3/12 lg:mr-4 lg:mt-4" text={node.buttonText} style={node.buttonStyle} link={node.buttonLink} />
                                ))}
                                <StyledLink className="mt-4 cursor-pointer lg:w-1/4 xl:w-3/12 w-full" onClick={() => setIsModal(true)}>Request a call</StyledLink>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isModal={isModal} setIsModal={setIsModal} isClosable={!isLoading} title="Request a callback">
                    <Form1 isModal={true} parentSetSuccess={setFormSuccess} parentSetLoading={setLoading} formId="f43616c4-0faf-4387-a0c0-6568a84be191" portalId="6170895" />
                </Modal>              
            </div>
        </div>
    );
}

export default CTAComponent;
