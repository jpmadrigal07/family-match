import React from 'react';
import Landscape from '../.././assets/landscape.png';
import FacebookLogo from '../.././assets/fb-logo.png';
import GoogleLogo from '../.././assets/gplus-logo.png';
import TwitterLogo from '../.././assets/twitter-logo.png';

const footer = () => {
    return (
        <div>
            <div className="container">
            <footer>
                <div className="row">
                    <div className="col-lg-12">
                        <p id="quicklinks">Quick Links</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <a href="#blank" id="footer-about">About FamilyMatch</a><br/>
                        <a href="#blank">Privacy and Policy</a><br/>
                        <a href="#blank">Safety</a><br/>
                        <a href="#blank">Terms and Condition</a>
                    </div>
                    <div className="col-lg-2">
                        <a href="#blank">Help/FAQs</a><br/>
                        <a href="#blank">How It Works</a><br/>
                        <a href="#blank">Matching Tips</a><br/>
                        <a href="#blank">Profile Assistance</a>
                    </div>
                    <div className="col-lg-2">
                        <a href="#blank">Mobile App</a><br/>
                        <a href="#blank">Plans</a><br/>
                        <a href="#blank">Gift Promotion</a><br/>
                        <a href="#blank">Contact Us</a>
                    </div>
                    <div className="col-lg-2">
                        <a href="#blank">Success Stories</a><br/>
                        <a href="#blank">Event Calendar</a><br/>
                        <a href="#blank">Advice & Article</a><br/>
                        <a href="#blank">Site Map</a>
                    </div>
                    <div className="col-lg-3">
                        <a href="#blank">Advertise on familymatch.com</a><br/>
                        <a href="#blank">Affiliate Partnership</a><br/>
                        <a href="#blank">Careers</a><br/>
                        <div id="social-logo">
                        <a href="#blank"><img alt="socialLogo" height="40" width="40" src={FacebookLogo}/></a>
                                    <a href="#blank"><img alt="socialLogo" height="40" width="40" src={GoogleLogo}/></a>
                                    <a href="#blank"><img alt="socialLogo" height="40" width="40" src={TwitterLogo}/></a>
                        </div>
                    </div>
                </div>
            </footer>

            </div>

    <div className="container-fluid" id="footer-landscape">
        <img alt="footerVector" src={Landscape} className="img-responsive"/>
    </div>

    <div className="container-fluid">
        <footer>
            <div className="row" id="footer-bottom">
                    <div className="col-lg-12">
                        <p>All Rights Reserved. &copy; Copyright 2018 Aakllarese, Inc.</p>
                    </div>
                </div>
            </footer>
    </div>
    </div>
    )
};

export default footer;