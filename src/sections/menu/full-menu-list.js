import React from "react";
import {menuItems} from './iconsList';
import styled from "styled-components";

import { 
    Ul, 
    MenuLi, 
    Icon, 
    MenuName,
} from '../../generalStyles';

import userAvatar from '../../assets/images/userAvatar.png';

const FullMenuList = ({show}) => {
    return (
        <FullMenuListContainer show={show}>
            <UserSection>
                <Avatar src={userAvatar} alt="User Name"/>
                <p>Daniel</p>
            </UserSection>
            <Ul>
                {
                    menuItems.map(({icon, id, name, isActive}) => (
                        <MenuLi key={id}>
                            <Icon src={icon} alt={name}/>
                            <MenuName>{name}</MenuName>
                        </MenuLi>
                    ))
                }
            </Ul>
            <MenuLinksWrapper>
                <p>Language</p>
                <p>Get Help</p>
                <p>Exit</p>
            </MenuLinksWrapper>
        </FullMenuListContainer>
    )
}

const FullMenuListContainer = styled.div`
position: absolute;
display: flex;
flex-direction: column;
width: 312px;
height: 100vh;
object-fit: cover;
opacity: ${({ show }) => (show ? 0.8 : 0)};
transition: opacity 0.5s ease;
z-index: 9;
`;

const UserSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 20px;
    flex-basis: 100%;
    flex-direction: row;
`;

const Avatar = styled.img`
    width: 82px;
    height: 82px;
    border-radius: 50%;
`;

const MenuLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: normal;
    justify-content: flex-end;
    flex-basis: 100%;

    p {
        color: #858688;
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 24px
    }
    p:last-child {
        margin-bottom: 0px
    }
`;
export default FullMenuList;