import React from 'react';

const navigation1 = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top home-navbar-2" role="navigation">
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
                            <a href="#blank" className="login-btn">MEMBER LOG IN</a>
                        </li>   
                        <li>
                            <a href="#blank" className="pricing-btn">REGISTER</a>
                        </li>     
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default navigation1;