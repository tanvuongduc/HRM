import React, { Component } from "react";
import "./NavBar.scss";
import { FaSearch, FaUserCircle, FaCaretDown, FaUser, FaUserCog, FaSignOutAlt } from "react-icons/fa";

class NavBar extends Component {
    showSubAccount(){
       document.getElementById("sub-menu-account").style.display = 'block';
    }
    hideSubAccount(){
        document.getElementById("sub-menu-account").style.display = 'none';
    }
  render() {
    return (
      <div>
        <div className="nav-bar">
          <h2 className="nav-bar__title">HRM</h2>
          <div className="search-bar">
            <input
              type="text"
              name="search"
              placeholder="Searching ..."
              className="search-bar__search"
            ></input>
            <FaSearch className="search-bar__icon" />
          </div>
          <div className="user-login">
            <FaUserCircle className="user-login__avatar" />
            <span className="user-login__username">Username</span>
            <FaCaretDown className="user-login__arrow" onMouseMove={this.showSubAccount}/>
            <div className="user-login__sub-menu" id="sub-menu-account" onMouseLeave={this.hideSubAccount}>
                 <ul>
                     <li><FaUser className="sub-menu__icon profile"/>Profile</li>
                     <li><FaUserCog className="sub-menu__icon setting"/>Account Setting</li>
                     <li><FaSignOutAlt className="sub-menu__icon logout"/>Log out</li>
                 </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NavBar;
