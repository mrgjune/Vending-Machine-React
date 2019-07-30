import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//import "./NavBar.css";

class NavBar extends Component {
  render() {
   let style = {
      marginLeft: "3em"
    }
    return (
      <div>
      <nav className="NavBar">
        <NavLink exact to="/">Home</NavLink> <span style={style}/>
        <NavLink exact to="/Spinach">Spinach</NavLink> <span  style={style} />
        <NavLink exact to="/Boba">Boba</NavLink> <span  style={style} />
        <NavLink exact to="/Olives">Olives</NavLink> <span  style={style}/>

      </nav>
      </div>
    );
  }
}

export default NavBar;
