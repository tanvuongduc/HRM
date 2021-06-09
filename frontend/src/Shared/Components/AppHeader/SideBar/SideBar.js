import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
//blank
}));

export default function AppSideBar() {
  const classes = useStyles();
  const goTo = (url = '') => {
      url = window.location.origin + '/' + url
      window.location.replace(url)
    }
  return (
    <div className="left-sidebar">
        <ul className="menu-left-list">
          <li className="menu-left-item">
            <div className="icon-menu-left">
              <i className="fa fa-home" />
            </div>
            <span>Home</span>
          </li>
          <li  onClick={() => goTo('app/company')} className="menu-left-item">
            <div className="icon-menu-left">
              <i className="fa fa-building" />
            </div>
            <span>Company</span>
          </li>
          <li  onClick={() => goTo('app/career')} className="menu-left-item">
            <div className="icon-menu-left">
              <i className="fa fa-user-friends" />
            </div>
            <span>Career</span>
          </li>
          <li  onClick={() => goTo('app/team')} className="menu-left-item">
            <div className="icon-menu-left">
              <i className="fa fa-calendar-alt" />
            </div>
            <span>Team</span>
          </li>
          <li  onClick={() => goTo('app/org')} className="menu-left-item">
            <div className="icon-menu-left">
              <i className="fa fa-suitcase" />
            </div>
            <span>Org</span>
          </li>
          <li  onClick={() => goTo('app/department')} className="menu-left-item">
            <div className="icon-menu-left">
              <i className="fa fa-book-reader" />
            </div>
            <span>Department</span>
          </li>
          <li  onClick={() => goTo('app/certificate')} className="menu-left-item">
            <div className="icon-menu-left">
              <i className="fa fa-hands-helping" />
            </div>
            <span>Certificate</span>
          </li>
          <li className="menu-left-item">
            <div className="icon-menu-left">
              <i className="fa fa-piggy-bank" />
            </div>
            <span>Perks</span>
          </li>
          <li className="menu-left-item">
            <div className="icon-menu-left">
              <i className="fa fa-check-square" />
            </div>
            <span>Checklists</span>
          </li>
          <li className="menu-left-item">
            <div className="icon-menu-left">
              <i className="fa fa-signal" />
            </div>
            <span>Reports</span>
          </li>
          <li className="menu-left-item">
            <div className="icon-menu-left">
              <i className="fa fa-hand-holding-medical" />
            </div>
            <span>Advice</span>
          </li>
          <li className="menu-left-item">
            <div className="icon-menu-left">
              <i className="fa fa-book" />
            </div>
            <span>Handbook</span>
          </li>
        </ul>
        <ul className="menu-bottom">
        <li className="menu-left-item">
            <div className="icon-menu-left">
              <i className="fa fa-people-carry" />
            </div>
            <span>Help</span>
          </li>
          <li className="menu-left-item">
            <div className="icon-menu-left">
              <i className="fa fa-users-cog" />
            </div>
            <span>Setting</span>
          </li>
        </ul>
      </div>
  );
}
