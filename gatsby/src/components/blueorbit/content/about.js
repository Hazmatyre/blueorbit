// // about content content left image right component
// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from 'gatsby-image'

// const AboutLeft = () => {
// 	const data = useStaticQuery(graphql`
// 	{
// 		wpPage(id: {eq: "cG9zdDoyMw=="}) {
// 			homepage {
// 				videoDescription
// 				videoHeading
// 				videoLink
// 				videoUserName
// 				videoUserPosition
// 				videoUserAvatar {
// 					localFile {
// 					  	childImageSharp {
// 					    	fluid {
// 								...GatsbyImageSharpFluid_tracedSVG
// 					    	}
// 					  	}
// 					}
// 					altText
// 				}
// 				videoImage {
// 					localFile {
// 				  		childImageSharp {
// 				    		fluid {
// 				      			...GatsbyImageSharpFluid_tracedSVG
// 				    		}
// 				  		}
// 					}
// 					altText
// 				}				
// 			}
// 		}
// 	}
// 	`)

// 	return (
// 		<>
//             <div className="flex flex-wrap items-center lg:flex-row-reverse">
//                 <div className="lg:w-2/5 w-full ">
//                     <Img className="w-full" fluid={ data.wpPage.homepage.videoImage.localFile.childImageSharp.fluid } alt={data.wpPage.homepage.videoImage.altText} />
//                 </div>
//                 <div className="lg:w-3/5 w-full lg:pr-6">
//                     <div className="lg:pl-8 py-2 text-color">
//                         <Heading2>{ data.wpPage.homepage.videoHeading }</Heading2>
//                         <p className="text-xl lg:text-2xl leading-7 lg:leading-10 f-f-r py-4 lg:py-8">{ data.wpPage.homepage.videoDescription }</p>
//                         <div className="flex items-center">
//                             <div className="flex items-center justify-center rounded-full w-16 h-16">
//                                 <Img className="w-full" fluid={ data.wpPage.homepage.videoUserAvatar.localFile.childImageSharp.fluid } alt={data.wpPage.homepage.videoUserAvatar.altText} />
//                             </div>
//                             <div className="pl-3">
//                                 <Heading4>{ data.wpPage.homepage.videoUserName }</Heading4>
//                                 <Heading5>{ data.wpPage.homepage.videoUserPosition }</Heading5>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>		
// 		</>
// 	)
// }

// export default AboutLeft