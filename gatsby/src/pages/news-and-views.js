/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { useState } from "react"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import { css } from '@emotion/core'

import Layout from "../components/layout"
import SmallHero from "../components/hero/small"
import { ComponentContainer } from "../components/componentStyle"
import { BlogListingArticleContainer, BlogListingDetail } from "../components/blog/blogStyles"
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { StyledBlogTag, StyledLink } from '../components/ui';
import { Heading5, ParagraphSmall } from "../components/content/typographyStyles"
import { ContentHeader } from "../components/content/contentHeader"

import Modal from "../components/modal"
import Form1 from "../components/form/form1"
import useHubSpotFormSubmit from "../components/form/useHubSpotFormSubmit"

export default ({ data }) => {

  const [isModal, setIsModal] = useState(false);
  const [isFormSuccess, setFormSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const categories = data.allWpPost.group

  const page = data.allWpPage.nodes[0];

  const resetUl = css`
    ul {
      padding-left: 0 !important;
      margin-top: 0px !important;
    }
  `

  return (
    <Layout>
      <Seo post={page} />
      <SmallHero title={page.title} />     
      <ComponentContainer className="flex pt-20 lg:px-6 flex-wrap items-start">
        <div className="w-full lg:w-3/12 lg:sticky lg:top-32 lg:flex-start">
          <ul className="pl-0 mt-0 mb-8 sm:pr-8">
            <h3 sx={{ color: 'secondary' }}>Categories</h3>
            {categories.map((node) => {
              const str = node.fieldValue
              const slug = str.replace(/\s+/g, "-").toLowerCase()
              return(
                <StyledBlogTag className="mr-2 mt-4" to={'/category/' + slug}>{str}</StyledBlogTag>
              )
            })}

            <div className="hidden lg:block">
              <h3 className="mt-10" sx={{ color: 'secondary' }}>Contact PLUS</h3>
              <StyledLink className="w-full lg:mr-4 lg:mt-4" primary to="tel:+441515591332">Call Us 0151 559 1332</StyledLink>
              <StyledLink className="mt-4 w-full lg:mr-4" to="https://meetings.hubspot.com/bethany-houghton/meet-with-bethany-houghton">Book A Meeting</StyledLink>
              <StyledLink className="mt-4 cursor-pointer w-full" onClick={() => setIsModal(true)}>Request a call</StyledLink>            
            </div>
          </ul>
        </div>
        <div className="lg:w-9/12 flex flex-wrap">
          {data.allWpPost.edges.map(({ node }) => (
            <BlogListingArticleContainer className="w-full sm:w-2/4 sm:mb-8 md:mb-12 last:mb-0 xl:w-1/2">
              <Img className="rounded-xl max-h-60 md:min-h-full" fluid={node.featuredImage.node.localFile.childImageSharp.fluid } />
              <BlogListingDetail className="overflow-hidden">
                <div className="flex flex-wrap ">
                  <div className="w-1/2">
                    <FaCalendarAlt className="float-left mt-1 md:mt-2 mr-2" sx={{ color: 'darkgrey', width: '10px' }}/>
                    <ParagraphSmall className="float-left mt-0" sx={{ color: 'darkgrey' }}>{ node.modified }</ParagraphSmall>
                  </div>
                  <div className="w-1/2">
                    <FaUser className="float-left mt-1 md:mt-2 mr-2"  sx={{ color: 'darkgrey', width: '10px' }}/>
                    <ParagraphSmall className="float-left mt-0" sx={{ color: 'darkgrey' }}>{ node.author.node.name }</ParagraphSmall>
                  </div>                              
                </div>
                <div className="moveMeUp relative">
                  <Heading5 sx={{ color: 'darkpurple', minHeight: '90px' }} className="mt-0 bg-white relative flex items-center">{node.title}</Heading5>
                  <Link className="font-semibold mt-2 absolute" sx={{color: 'secondary'}} to={`/${node.slug}`}>Read More</Link>
                </div>
              </BlogListingDetail>
            </BlogListingArticleContainer>
          ))}
        </div>
        <Modal isModal={isModal} setIsModal={setIsModal} isClosable={!isLoading} title="Request a callback">
            <Form1 isModal={isModal} parentSetSuccess={setFormSuccess} parentSetLoading={setLoading} formId="f43616c4-0faf-4387-a0c0-6568a84be191" portalId="6170895" />
        </Modal>             
      </ComponentContainer>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allWpPage(filter: {title: {eq: "News and Views"}}) {
      nodes {
        id
        title
        pg_testimonial_fields {
          testimonialSidewaysText
          testimonialHeader
          testimonialDescription
        }
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
    }    
    allWpPost(sort: {fields: [date], order: DESC}) {
      group(field: categories___nodes___name){
        fieldValue
        edges{
          node{
            title
            date(formatString: "MMMM DD, YYYY")
            content
          }
        }
      }       
      edges {
        node {
          title
          excerpt
          slug
          modified(formatString: "MM, DD, YYYY")
          author {
            node {
              name
            }
          }             
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fluid {
                    src
                    sizes
                    srcSet
                    base64
                    aspectRatio
                  }
                }
              }
            }
          }
        }
      }
    }
  }`