import React, { useState } from "react";
import styled from "styled-components";

import IconsMenuList from './icons-menu-list';
import FullMenuList from './full-menu-list';

const Menu = () => {
    const [isOpenFullMenu, setIsOpenFullMenu] = useState(false);
    return (
        <MenuContainer 
            onMouseOver={() => setIsOpenFullMenu(true)}
            onMouseOut={() => setIsOpenFullMenu(false)}
        >
            { isOpenFullMenu && <Darker isOpenFullMenu/>}
            <FullMenuList show={isOpenFullMenu} />
            <IconsMenuList isOpenFullMenu={isOpenFullMenu}/>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
    background: rgba(0, 0, 0, 1);
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 30px 60px 30px;
`;


const Darker = styled.div`
 &::after {
    content: '';
    width: 50%;
    height: 100%;
    position: ${({isOpenFullMenu}) => isOpenFullMenu ? 'absolute' : 'relative'};;
    top: 0;
    left: 0;
    opacity: ${({isOpenFullMenu}) => isOpenFullMenu ? 1 : 0};
    transition: opacity 0.5s;
    background:  linear-gradient(90deg, rgba(5,0,8,1) 47%, rgba(23,5,5,0) 69%, rgba(255,252,249,0) 100%);
    z-index: 6
 }
`;

export default Menu;
