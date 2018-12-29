import React from 'react';

const loginregister = () => {
    return (
    <div>
        <header className="header-image-login-register">
            <div className="headline-other">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="call-to-action-other">
                                <p>Log In Or Register</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="container">
            <div id="forms-login-register">
                <div className="row">
                    <div className="col-md-5">
                        <div id="forms-login">
                            <p>Sign in to continue...</p>
                            <button type="submit" className="btn btn-default btn-block login-fb-btn">Login with Facebook</button>
                            <p id="or-divider">or</p>
                            <form role="search">
                                <div className="form-group">
                                    <input type="text" className="form-control login-email" placeholder="Email or Phone"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control login-password" placeholder="Password"/>
                                </div>
                                <a href="#blank" className="login-forgot">Forgot Password</a><br/>
                                <button type="submit" className="btn btn-default btn-block login-btn">Sign in Now</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div id="forms-register">
                            <p>Register To Find Your Family's Match.</p>
                            <form role="search">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control register-fname" placeholder="First Name"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control register-lname" placeholder="Last Name"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control register-email" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control register-username" placeholder="Username"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="password" className="form-control register-password" placeholder="Password"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="password" className="form-control register-password" placeholder="Retype Password"/>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-default btn-block register-btn">Create Account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default loginregister;