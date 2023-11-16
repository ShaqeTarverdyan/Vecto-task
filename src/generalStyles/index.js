import { styled } from 'styled-components';


export const IconsMenuContainer = styled.div`
    z-index: 9;
`;

export const Ul = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    width: 100%;
    justify-content: center;
`

export const MenuLi = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
    padding: 12px;
    column-gap: 18px;
    height: 45px;
    background-color: ${({active}) => active ? '#232A3F' : 'transparent'};
    border-radius: ${({active}) => active ? '41px' : 0};
    pointer-events: ${({isOpenFullMenu}) => isOpenFullMenu ? 'none' : 'auto' };

    &:hover {
        background-color: #232A3F;    
        border-radius: 8px;
        cursor: pointer
    }
`

export const Icon = styled.img`
    width: 20px;
    height: 20px;
`;

export const MenuName = styled.p`
    font-size: 1.25rem;
    font-weight: 600;
`;

