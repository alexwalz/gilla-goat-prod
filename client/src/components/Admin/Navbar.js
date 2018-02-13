import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import API from '../../utils/API'

const navbarContent = (props) => {

        return    <div className="sidebar-content">

            {console.log(props)}

                <div className="sidebar-nav-links">
 
                        <ul className="sidebar-links">
                            <li className="sidebar-link">
                                <Link to="/">
                                    <Icon name='user' link className="sidebar-item" />
                                    <span className="sidebar-link-text">Users</span>
                                </Link>
                            </li>
                            <li className="sidebar-link">
                                <Link to="/">
                                    <Icon name='block layout' link className="sidebar-item" />
                                    <span className="sidebar-link-text">Projects</span>
                                </Link>
                            </li>
                            <li className="sidebar-link">
                                <Link to="/">
                                    <Icon name='tasks' link className="sidebar-item" />
                                    <span className="sidebar-link-text">Tasks</span>
                                </Link>
                            </li>
                            <li className="sidebar-link">
                                <Link to="/">
                                    <Icon name='travel' link className="sidebar-item" />
                                    <span className="sidebar-link-text">Resources</span>
                                </Link>
                            </li>
                        </ul>
                </div>
            </div>
};


export default navbarContent;