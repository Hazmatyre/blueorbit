/** @jsx jsx */
import {  jsx } from "theme-ui"
import BackgroundImage from 'gatsby-background-image'

import { Heading2 } from "../content/typographyStyles"
import { StyledLink } from "../ui/"

function CTA({ data }) {

    const BGImage = data.wpPage.pg_cta_fields.ctaBackgroundImage.localFile.childImageSharp.fluid

    return (
        <div>
            <BackgroundImage
                  Tag="section"
                  className="px-6 xl:px-0 bg-gradient-to-br from-indigo-700 to-indigo-800 py-16"
                  fluid={BGImage}
                  backgroundColor={`#040e18`}
                >
                <div className="mx-auto container max-w-screen-xl">
                    <div className="flex flex-wrap items-center ">
                        <div className="w-full md:w-full md:pr-5" sx={{ maxWidth: '700px'}}>
                            <Heading2 sx={{ color: 'secondary' }}>{data.wpPage.pg_cta_fields.ctaHeading}</Heading2>
                        </div>
                        <div sx={{ maxWidth: '700px' }} className="items-right w-full flex md:w-full text-center xl:text-right mt-6 md:-mt-6">
                            <StyledLink className="mx-auto xl:mr-4" primary to="tel:+441515591332">Call Us 0151 559 1332</StyledLink>
                            <StyledLink className="mx-auto xl:mr-4" to="tel:+441515591332">Book A Meeting</StyledLink>
                            <StyledLink className="mx-auto" to="tel:+441515591332">Request a call back</StyledLink>
                        </div>
                    </div>
                </div>
            </BackgroundImage>
        </div>
    );
}

export default CTA;
