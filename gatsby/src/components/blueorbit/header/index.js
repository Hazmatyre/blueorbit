import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import MobileNav from './mobilenav'
import DesktopNav from './desktopnav'

const Header = ({ siteTitle }) => {

	const flatListToHierarchical = (
	    data = [],
	    {idKey='id',parentKey='parentId',childrenKey='children'} = {}
	) => {
	    const tree = [];
	    const childrenOf = {};
	    data.forEach((item) => {
	        const newItem = {...item};
	        const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
	        childrenOf[id] = childrenOf[id] || [];
	        newItem[childrenKey] = childrenOf[id];
	        parentId
	            ? (
	                childrenOf[parentId] = childrenOf[parentId] || []
	            ).push(newItem)
	            : tree.push(newItem);
	    });
	    return tree;
	};

	const data = useStaticQuery(graphql`
		query MyQuery {
		  wpMenu(name: {eq: "Main Menu"}) {
		    menuItems {
		      nodes {
		        label
		        parentId
		        url
		        id
		      }
		    }
		    count
		    databaseId
		    slug
		    name
		    id
		  }
		}
	`)

	const processedMenu = flatListToHierarchical( data.wpMenu.menuItems.nodes );

    return (
        <header className="fixed lg:relative shadow-md w-full z-50 bg-white">
            <MobileNav menu={processedMenu} />
            <DesktopNav menu={processedMenu} />
        </header>
    )
}

export default Header