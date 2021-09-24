/** @jsx jsx */
import {  jsx } from "theme-ui"
import React from 'react'
import { useState } from "react";

import { Item } from './menuStyle'
import UniversalLink from "../UniversalLink"

export default function DesktopList( menu ) {
	const [activeMenus] = useState([]);

    const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }) => {

        if(hasSubMenu) {
            if(hasSubMenu.length >= 1) {
                hasSubMenu=true;
            }
            else {
                hasSubMenu=false;
            }
        }

        return (
        <>
            <li className="lg:block lg:h-full" >
                <Item dept={dept}>
                    <UniversalLink className="nav-link hidden lg:flex lg:h-full lg:px-5 xl:px-8 hover:bg-gray-100 flex flex-col justify-center px-4 py-4 mt-2  bg-transparent text-md md:mt-0 hover:text-gray-900 focus:text-gray-900 w-full hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to={data.url}>{data.label} </UniversalLink>
                </Item>
                {hasSubMenu && (
                <SubMenu
                    dept={dept}
                    data={data.children}
                    toggle={activeMenus.includes(menuName)}
                    menuIndex={menuIndex}
                />
                )}
            </li>
        </>
        )
    };    

    const SubMenu = ({ dept, data, toggle, menuIndex }) => {

        dept = dept + 1;

        return (
            <>
                <ul className="lg:absolute lg:shadow-md hidden bg-white">
                    {data.map((menu, index) => {
                        const menuName = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

                        return (
                            <ListMenu
                                dept={dept}
                                data={menu}
                                hasSubMenu={menu.submenu}
                                menuName={menuName}
                                key={menuName}
                                menuIndex={index}
                            />
                        );
                    })}
                </ul>
            </>
        );
    };

	return(
		<>
	        <ul className="desktoplist mt-8 lg:mt-0 lg:flex lg:items-center">
                {menu.menu.menu.map((menu, index) => {
                    const dept = 1;
                    const menuName = `sidebar-menu-${dept}-${index}`;

                    return (
                        <>
                            <ListMenu
                                dept={dept}
                                data={menu}
                                hasSubMenu={menu.children}
                                menuName={menuName}
                                key={menuName}
                                menuIndex={index}
                            />
                        </>

                    );
                })}
            </ul>
		</>
	)
}