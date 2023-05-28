import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

import '../style/navbar.scss';

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="items">
        <Link id="item">HOME</Link>
        <Link id="item">ABOUT</Link>
        <Link id="item">ALBUM</Link>
      </div>
    </div>
  );
}

export default Navbar;
