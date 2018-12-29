import React from 'react';

const navigation2 = () => {
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
                    <a className="navbar-brand" href="#blank">asda</a>
                </div>
                <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                             <a href="#blank">Home</a>
                        </li>
                        <li>
                            <a href="#blank">Blog</a>
                        </li>
                        <li>
                            <a href="#blank">Plans</a>
                        </li>
                        <li>
                            <a href="#blank">Member Log in</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default navigation2;