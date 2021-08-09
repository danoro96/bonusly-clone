import React from "react";

import "./Sidebar.scss";

import logo from "../../assets/logo.png"

import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom";

import { Auth } from 'aws-amplify'

import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Search,
  Person
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <img
          src={logo}
          alt=""
          className="logo"
        />
        <div className="sidebarListItem">
          <Search className="sidebarIcon" />
          <span className="sidebarListItemText"> Search </span>
        </div>

        <NavLink className="sidebarListItem" activeClassName="active" exact to="/home">
          <Chat className="sidebarIcon" />
          <span className="sidebarListItemText"> Home </span>
        </NavLink>
        <NavLink className="sidebarListItem" activeClassName="active" exact to="/signals">
          <RssFeed className="sidebarIcon" />
          <span className="sidebarListItemText"> Signals </span>
        </NavLink>
        <NavLink className="sidebarListItem" activeClassName="active" exact to="/rewards">
          <Group className="sidebarIcon" />
          <span className="sidebarListItemText"> Rewards </span>
        </NavLink>
        <NavLink className="sidebarListItem" activeClassName="active" exact to="/awards">
          <Bookmark className="sidebarIcon" />
          <span className="sidebarListItemText"> Awards </span>
        </NavLink>
        <NavLink className="sidebarListItem" activeClassName="active" exact to="/analytics">
          <HelpOutline className="sidebarIcon" />
          <span className="sidebarListItemText"> Analytics </span>
        </NavLink>
        <NavLink className="sidebarListItem" activeClassName="active" exact to="/integrations">
          <WorkOutline className="sidebarIcon" />
          <span className="sidebarListItemText"> Integrations </span>
        </NavLink>
        
        <hr className="sidebarHr" />
        
        <NavLink className="sidebarListItem" activeClassName="active" exact to="/user">
          <Person className="sidebarIcon" />
          <span className="sidebarListItemText"> {Auth.user.attributes.email} </span>
        </NavLink>
      </div>
    </div>
  );
}