import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';


const Nav = styled.nav`
    width:100%;
    height:55px;
    border-bottom:2px solid #f1f1f1;
    padding : 0 20px;
    display:flex;
    justify-content:space-between;
    
    .logo {
        padding: 13px 15px;
        font-size: 23px;
        color:#db780f;
        font-weight:bold;
    }

`;
const NavBar = () =>  {
        return (
            <Nav>
                <div className="logo">
                    UsedBook.in
                </div>
                <Burger />
            </Nav>
        );
    
}

export default NavBar;