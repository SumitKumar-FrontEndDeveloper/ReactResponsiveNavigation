// @flow 
import * as React from 'react';
import styled from 'styled-components';
import { RigntNav } from './RigntNav';
const StyledBurger = styled.div`
    width:2rem;
    height:2rem;
    position:fixed;
    top:15px;
    right:15px;
    z-index:100;
    display:none;
    @media(max-width:768px){
        display:flex;
        justify-content:space-around;
        flex-flow:column nowrap;
    }
    div {
        width:2rem;
        height:0.25rem;
        background-color: ${({open}) => open ? '#ccc' : '#333'};
        border-radius:10px;
        transform-origin:1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform:${({open})=> open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform:${({open})=> open ? 'translateX(100%)' : 'translateX(0)'};
            opacity:${({open})=> open ? 0 : 1};
        }
        &:nth-child(3) {
            transform:${({open})=> open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;
class Burger extends React.Component<Props, State>{
    constructor(props: any) {
        super(props);
        this.state = { open : false };
      }
    handleBurger = (open) => {
        this.setState({open: open});
    }
  render() {
    return (
        <>
        <StyledBurger open={this.state.open} onClick={() => this.setState({open:!this.state.open})}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
        <RigntNav open={this.state.open} onOpen={this.handleBurger} />
        </>
    );
  };
};

export  default Burger;