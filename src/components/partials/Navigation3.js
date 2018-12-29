import React from 'react';

const navigation3 = () => {
    return (
    <nav className="navbar navbar-default navbar-fixed-top other-navbar" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#blank">asd</a>
                </div>
                <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#blank">Search</a>
                        </li>
                        <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#blank">Match <i className="fa fa-caret-down"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#blank">Match</a>
                                    </li>
                                    <li><a href="#blank">Mutual</a>
                                    </li>
                                    <li><a href="#blank">Reverse</a>
                                    </li>
                                </ul>
                            </li>
                        <li>
                            <a href="#blank">Messages</a>
                        </li>
                        <li>
                            <a href="#blank">Events</a>
                        </li>
                        <li>
                            <a href="#blank">Blog</a>
                        </li>
                        <li>
                            <a href="#blank">Plans</a>
                        </li>
                        <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#blank"><i className="fa fa-user-circle-o" id="icon-nav-link" aria-hidden="true"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#blank">Profile</a>
                                    </li>
                                    <li><a href="#blank">About Me</a>
                                    </li>
                                    <li><a href="#blank">Match Data</a>
                                    </li>
                                    <li><a href="#blank">Photo</a>
                                    </li>
                                    <li><a href="#blank">Views</a>
                                    </li>
                                    <li><a href="#blank">Likes</a>
                                    </li>
                                    <li><a href="#blank">Favorites</a>
                                    </li>
                                    <li><a href="#blank">Winks</a>
                                    </li>
                                </ul>
                            </li>
                        <li>
                            <a href="#blank"><i className="fa fa-sign-out" id="icon-nav-link" aria-hidden="true"></i></a>
                        </li>      
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default navigation3;