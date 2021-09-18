/** @jsx jsx */
import {  jsx } from "theme-ui"
import { useState } from 'react'

import { Heading2 } from "../content/typographyStyles"
import { StyledLink } from "../ui/"
import Modal from "../modal"
import Form1 from "../form/form1"
import useHubSpotFormSubmit from "../form/useHubSpotFormSubmit"

function CTA({ data }) {

    const [isModal, setIsModal] = useState(false);
    const [isFormSuccess, setFormSuccess] = useState(false);
    const [isLoading, setLoading] = useState(false);

    return (
        <div>
            <div className="hero py-14 px-6" sx={{ background: 'linear-gradient(91deg,#0d8bf9,#ec0e73)'}}>
                <div className="mx-auto container max-w-screen-xl flow-root">
                    <div className="">
                        <div className="w-full md:w-full text-center lg:text-left lg:pr-5" sx={{ maxWidth: ["100%", "100%", "100%", "700px"]}}>
                            <Heading2 sx={{ color: 'white' }}>{data.wpPage.pg_cta_fields.ctaHeading}</Heading2>
                        </div>
                        <div sx={{ maxWidth: ["400px", "400px", "400px", "100%", '1000px'] }} className="lg:float-right mx-auto w-full md:w-full flex-wrap justify-center lg:justify-end flex text-center xl:text-right mt-6 lg:-mt-2">
                            <StyledLink className="w-full lg:w-1/4 xl:w-3/12 lg:mr-4 lg:mt-4" primary to="tel:+441515591332">Call Us 0151 559 1332</StyledLink>
                            <StyledLink className="mt-4 w-full xl:w-3/12 lg:w-1/4  lg:mr-4" to="https://meetings.hubspot.com/bethany-houghton/meet-with-bethany-houghton">Book A Meeting</StyledLink>
                            <StyledLink className="mt-4 cursor-pointer lg:w-1/4 xl:w-3/12 w-full" onClick={() => setIsModal(true)}>Request a call</StyledLink>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isModal={isModal} setIsModal={setIsModal} isClosable={!isLoading} title="Request a callback">
                <Form1 isModal={true} parentSetSuccess={setFormSuccess} parentSetLoading={setLoading} formId="f43616c4-0faf-4387-a0c0-6568a84be191" portalId="6170895" />
            </Modal>            
        </div>
    );
}

export default CTA;
