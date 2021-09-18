/** @jsx jsx */
import {  jsx } from "theme-ui"
import React from 'react'
import { useState } from "react";

import { Item, Arrow } from './menuStyle'
import UniversalLink from "../UniversalLink"

export default function MobileList( menu ) {
	const [activeMenus, setActiveMenus] = useState([]);

    const handleArrowClick = menuName => {

        let newActiveMenus = [...activeMenus];

        if (newActiveMenus.includes(menuName)) {
            var index = newActiveMenus.indexOf(menuName);

            if (index > -1) {              
                newActiveMenus.splice(index, 1);
            }
        } else {         
            newActiveMenus.push(menuName);
        }

        setActiveMenus(newActiveMenus);

    };

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
            <li className="lg:inline-block lg:h-full">
                <Item dept={dept}>
                    <UniversalLink className="lg:hidden hover:bg-gray-100" to={data.url}>{data.label} </UniversalLink>
                    {hasSubMenu && (
                        <Arrow
                            onClick={() => handleArrowClick(menuName)}
                            toggle={activeMenus.includes(menuName)}
                        />
                    )}
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

        if (!toggle) {
          return null;
        }

        dept = dept + 1;

        return (
            <>
                <ul className="lg:absolute lg:shadow-md">
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
	        <ul className="mobilelist mt-8 lg:mt-0 lg:flex lg:items-center">
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