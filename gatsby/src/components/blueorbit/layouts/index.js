import React from 'react'
import TwoColText from "./TwoColText"
import TwoColImageText from "./TwoColImageText"
import IconList from "./IconList"
import CentredButton from "./CentredButton"
import CentredContent from "./CentredContent"
import CentredHeadingContent from "./CentredHeadingContent"
import CTAComponent from "../cta/cta"
import CaseStudy from "../casestudy/"
import ClientSlider from "../clients/"
import Timeline from "../timeline/"
import PostExamples from "../social/postexamples"

const LayoutController = ( data ) => {

	const { layouts } = data.layouts 

	const typeMap = {
		WpPg_service_Pagebuilder_Layouts_Hero: TwoColImageText,
		WpPg_service_Pagebuilder_Layouts_TextBlock: TwoColText,
		WpPg_service_Pagebuilder_Layouts_Twocolimagetext: TwoColImageText,
		WpPg_service_Pagebuilder_Layouts_Iconlist: IconList,
		WpPg_service_Pagebuilder_Layouts_Cta: CTAComponent,
		WpPg_service_Pagebuilder_Layouts_CaseStudy: CaseStudy,
		WpPg_service_Pagebuilder_Layouts_ClientSlider: ClientSlider,
		WpPg_service_Pagebuilder_Layouts_CentredButton: CentredButton,
		WpPg_service_Pagebuilder_Layouts_CentredContent: CentredContent,
		WpPg_service_Pagebuilder_Layouts_CentredHeadingContent: CentredHeadingContent,
		WpPg_service_Pagebuilder_Layouts_Timeline: Timeline,
		WpPg_service_Pagebuilder_Layouts_PostExamples: PostExamples,		
		WpPage_Pagebuilder_Layouts_CentredContent: CentredContent,
		WpPage_Pagebuilder_Layouts_Cta: CTAComponent,
		WpPage_Pagebuilder_Layouts_Twocolimagetext: TwoColImageText
	}

    return (
    	<>
	        {layouts.map(({ __typename, ...layoutProps }, index) => 
	          React.createElement(typeMap[__typename], { key: index, ...layoutProps }) 
	        )}    	
    	</>
    )


};

export default LayoutController