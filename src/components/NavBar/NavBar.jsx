import React from 'react';
import { Nav } from './navBarStyling';
import {BiSearch} from 'react-icons/bi';
const NavBar = () =>{
    return (
        <Nav>
            <div className="title">
            <h4>Hello Fouzan,</h4>
            <h1>
            Welcome to &nbsp;<span>My taxi Dashboard</span>
            </h1>
        </div>
        <div className="search">
            <BiSearch />
            <input type="text" placeholder='search' />
        </div>
        </Nav>
    )
}

export default NavBar;
