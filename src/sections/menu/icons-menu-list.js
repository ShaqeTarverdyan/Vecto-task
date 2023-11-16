import React from "react";
import {menuItems} from './iconsList';

import { Ul, MenuLi, Icon, IconsMenuContainer} from '../../generalStyles'

const IconsMenuList = ({isOpenFullMenu}) => {
    return (
        <IconsMenuContainer>
            <Ul>
                {
                    menuItems.map(({icon, id, name, isActive}) => (
                        <MenuLi key={id} active={isActive && !isOpenFullMenu} isOpenFullMenu>
                                <Icon src={icon} alt={name}/>
                        </MenuLi>
                    ))
                }
            </Ul>
        </IconsMenuContainer>
    )
}

export default IconsMenuList;