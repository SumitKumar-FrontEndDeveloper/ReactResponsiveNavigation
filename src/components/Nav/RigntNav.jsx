// @flow 
// @flow
import * as React from 'react';
import styled from 'styled-components';
import  { Redirect } from 'react-router-dom'
type Props = {
  
};
type State = {
  
};

const Ul = styled.ul`
    list-style:none;
    display:flex;
    flex-flow:row nowrap;
    li {
    padding: 16px 20px;
    font-weight:bold;
    font-size:20px;
    z-index:99;

    } 
    li:hover {
        color:#fff;
        background-color:#db780f;
    }
    li.cat {
        background:#CCC;
    }
    ul {
        display:flex;
        list-style:none;
        flex-flow:column nowrap;
    }
    ul.subMenu {
        position : absolute;
        height : auto;
        display:flex;
        flex-flow:column nowrap;
        right: 4.5rem;
        top: 56px;
        background: #CCC;
    }
    ul.subMenu li {
        width: 200px;
        border: 1px solid #fff;
        text-align: left;
        padding: 9px 10px;
        height: 40px;
        color: #000;   
        }
        ul.subMenu li:hover {
            background:#db780f;
            color:#fff;
        }
    @media(max-width : 768px)  {
        flex-flow: column nowrap;
        background-color : #db780f;
        position : fixed;
        top:0;
        right:0;
        height:auto;
        width : 100%;
        padding-top:3.5rem;
        transform : ${({open}) => open ? 'translateY(0)' : 'translateY(-100%)'};
        transition : transform 0.3s ease-in-out;
        z-index:99;
        li {
            color:#fff;
            border-bottom: 1px solid #fff;
        }
        li:first { 
            border-top: 1px solid #fff;
        }
        ul.subMenu {
        position : relative;
        top:16px;
        background-color:#db780f;
        color: #fff;
        right: 1.5rem;
        top: 12px;
        }
        ul.subMenu li {
            width: 100%;
            border: none;
            text-align: left;
            padding: 14px 49px;
            height: 46px;
            color: #fff; 
        }
        li.cat {
         background-color:#db780f;
         
        }
        .dropIcon {
            right: 24px;
            position: absolute;
            font-size: 20px;
        }
        
    }
`;

export class RigntNav extends React.Component<Props, State>{
    constructor(props: any) {
        super(props);
        this.state = { open : this.props.open,subMenu : false };
      }
    handleClickOnItem = (e) => {
        console.log(e.target.id);
        var open = this.state.open;
        var submenu = this.state.subMenu;
        this.props.onOpen(open);   
        if(e.target.id=='login'){
            return <Redirect to='/login'  />;
        }         
    }
    toggleSubMenu=()=> {
        this.setState({subMenu:!this.state.subMenu});
    }
  render() {
    return (
        <div>
                <Ul open={this.props.open}>
                    <li onClick={this.handleClickOnItem} id="home">Home</li>
                    <li onClick={this.handleClickOnItem} id="about">About</li>
                    <li onClick={this.handleClickOnItem} className={this.state.subMenu ? 'cat' :''}  onClick={this.toggleSubMenu}>Categories <i className={this.state.subMenu ? 'fa fa-caret-up dropIcon' : 'fa fa-caret-down dropIcon'}></i>
                    {this.state.subMenu ? <ul className="subMenu">
                        <li>Fashion</li>
                        <li>Appreals</li>
                        <li>New Arival</li>
                    </ul> : ''} 
                    </li>
                    <li onClick={this.handleClickOnItem} id="login">Login</li>
                </Ul>
        </div>
    );
  };
};
