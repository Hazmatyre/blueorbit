/** @jsx jsx */
import {  jsx } from "theme-ui"
import { graphql } from 'gatsby'
import Seo from 'gatsby-plugin-wpgraphql-seo';
import { useState } from 'react'

import Layout from "../components/layout"
import ClientSlider from "../components/clients"
import SmallHero from "../components/hero/small"
import { ComponentContainer } from "../components/componentStyle"
import { Heading2 } from '../components/content/typographyStyles'
import Form1 from '../components/form/form1'

import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'

import ContactImage from '../images/contact-about2.jpg'

export default function contactUs({ data }) {

  const page = data.wpPage;

  return (
		<Layout>
      <Seo post={page} />  
      <SmallHero title="Contact Us" />
      <ComponentContainer className="lg:px-6">
        <div className="flex gap-0 flex-wrap sm:flex-no-wrap items-center justify-between w-full">
            <div className="w-full flex pl-6 lg:pl-0 sm:justify-center items-center md:w-1/3 h-32 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
              <div className="w-16 h-16 flex rounded-full justify-center items-center" sx={{ bg: 'secondary'}}>
                <FaMapMarkerAlt fill="#fff" size={30} />
              </div>
              <div className="float-left sm:float-none ml-4">
                <h3 sx={{ color: 'menucolor' }}>Office Address</h3>
                <p sx={{ color: 'darkpurple' }} className="mt-0">24 Queen Avenue, Liverpool, L2 4TZ.</p> 
              </div>             
            </div>
            <div className="w-full flex pl-6 lg:pl-0 sm:justify-center items-center  md:w-1/3 h-32 shadow bg-white dark:bg-gray-800">
              <div className="w-16 h-16 flex rounded-full justify-center items-center" sx={{ bg: 'secondary'}}>
                <FaPhoneAlt fill="#fff" size={30} />
              </div>
              <div className="float-left sm:float-none ml-4">
                <h3 sx={{ color: 'menucolor' }}>Call us on:</h3>
                <p sx={{ color: 'darkpurple' }} className="mt-0"><a title="Call us" href="tel:0151 559 1332">0151 559 1332</a></p> 
              </div>               
            </div>
            <div className="w-full flex pl-6 lg:pl-0 sm:justify-center items-center  md:w-1/3 h-32 shadow bg-white dark:bg-gray-800">
              <div className="w-16 h-16 flex rounded-full justify-center items-center" sx={{ bg: 'secondary'}}>
                <FaEnvelope fill="#fff" size={30} />
              </div>
              <div className="float-left sm:float-none ml-4">
                <h3 sx={{ color: 'menucolor' }}>Email us:</h3>
                <p sx={{ color: 'darkpurple' }} className="mt-0"><a title="Email us" href="mailto:hello@plusgroup.org">hello@plusgroup.org</a></p> 
              </div>               
            </div>
        </div>      
      </ComponentContainer>

      <div className="lg:px-6">
          <div className={"flex flex-wrap max-w-screen-xl mx-auto fade-in px-6 lg:px-0"}>
              <div className={"w-full relative lg:w-1/2 h-96 lg:h-full overflow-hidden mb-6"}>
                <img className={"mx-auto"} src={ ContactImage } alt="Contact Us" />
              </div>
              <div className={"w-full  fade-in lg:pr-6 lg:w-1/2"}>
                  <div className="lg:pl-8 py-2 text-color" id="contact-form">
                      <Heading2 sx={{ color: 'darkpurple' }}>Enquiry Form</Heading2>
                      <Form1 isModal={false} formId="f43616c4-0faf-4387-a0c0-6568a84be191" portalId="6170895" />
                  </div>
              </div>
          </div>
      </div>

      <div className="lg:px-6">
        <ClientSlider />
      </div>
		</Layout>
	)
}

export const pageQuery = graphql`
  query {
    wpPage(title: {eq: "Contact"}) {
      id
      seo {
        title
        metaDesc
        focuskw
        metaKeywords
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphTitle
        opengraphDescription
        opengraphImage {
            altText
            sourceUrl
            srcSet
        }
        twitterTitle
        twitterDescription
        twitterImage {
            altText
            sourceUrl
            srcSet
        }
        canonical
        cornerstone
        schema {
            articleType
            pageType
            raw
        }
      } 
          
    }    
  }`