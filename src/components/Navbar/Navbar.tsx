import React, {useState} from 'react';
import './Navbar.css';
import { Drawer } from "@blueprintjs/core";
import { Link } from "react-router-dom";

function Navbar() {

 const [isDrawerOpen, setToggleDrawer] = useState(false);

  return (
    <div className="lines">
        <div className="custom-row">
            <div className="width100">
                <h4 className="sloganPlacement">Liberté, ambition, amour de soi</h4>
                <div className="custom-row">
                    <h1 className="bigM moovePlacement">M</h1>
                    <h1 className="oove">oove</h1>
                </div>
            </div>
            <img className="menu_icon_close" onClick={() => setToggleDrawer(!isDrawerOpen)} src="/assets/icon/menu.png" />
        </div>
    
       
        <Drawer isOpen={isDrawerOpen} className="drawerBackground" position='left'>
            <input className="icon_white-navbar" type="image" onClick={() => setToggleDrawer(!isDrawerOpen)} src="/assets/icon/menu_white.png" />
            <div className="alignCenterAll">
                <Link to="" onClick={() => setToggleDrawer(!isDrawerOpen)}><h1 className="drawerTitle drawerTitleColorWhite">Boutique</h1></Link>
                <Link to="/offers" onClick={() => setToggleDrawer(!isDrawerOpen)}><h1 className="drawerTitle drawerTitleColorBlue">Offres partenaires</h1></Link>
                <Link to="/shops" onClick={() => setToggleDrawer(!isDrawerOpen)}><h1 className="drawerTitle drawerTitleColorBlue">Centres sportifs partenaires</h1></Link>
                <Link to="" onClick={() => setToggleDrawer(!isDrawerOpen)}><h1 className="drawerTitle drawerTitleColorWhite">A propos de nous</h1></Link>
            </div>
        </Drawer>
    </div>
  );
}
export default Navbar;