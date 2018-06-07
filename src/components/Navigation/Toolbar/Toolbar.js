import React from 'react';

import { Navbar, NavItem, Button, SideNav, SideNavItem } from 'react-materialize';
import classes from './Toolbar.css';

const toolbar = (props) => {
    return (
        // <header className="navbar-fixed">
        //     <nav>
        //         <div className="nav-wrapper">
        //             <a link="#" className="brand-logo">LOGO</a>
        //             <ui id="nav-mobile" className="right hide-on-med-and-down">
        //                 <li><a link="/"></a></li>
        //                 <li>ONE</li>
        //             </ui>
        //         </div>
        //     </nav>
        // </header>
        <div className="navbar-fixed">
            <Navbar brand="logo" right style={{ backgroundColor: 'brown' }}>
                <NavItem href="/">Burger Builder</NavItem>
                <NavItem href="/">Checkout</NavItem>
            </Navbar>
        </div>
    );
}

export default toolbar;