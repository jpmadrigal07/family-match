import React from 'react';

const profilesettingsaboutme = () => {
    return (
    <div>
    <div className="container">
        <div id="profile-settings">
            <div className="row profile">
                <div className="col-md-3">
                    <div className="profile-sidebar">
                        <div className="profile-userpic">
                            <img src="http://z1035.com/wp-content/uploads/2018/03/Mark-Zuckerberg-FB-profile-pic-200x200.jpg?x90143"
                                className="img-responsive" alt="pic"/>
                        </div>
                        <div className="profile-usertitle">
                            <div className="profile-usertitle-name">
                                John Doe
                            </div>
                            <div className="profile-usertitle-job">
                                "Life is hard, get used to it!"
                            </div>
                            <div className="profile-usertitle-job">
                                Single
                            </div>
                            <div className="profile-usertitle-job">
                                Looking for Partner
                            </div>
                        </div>
                        <div className="profile-usermenu">
                            <ul className="nav">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        Profile</a>
                                </li>
                                <li className="active">
                                    <a href="#" target="_blank">
                                        <i className="fa fa-info-circle" aria-hidden="true"></i>
                                        About Me </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fa fa-list-alt" aria-hidden="true"></i>
                                        Match Data</a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                                        Photo </a>
                                </li>
                                
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fa fa-group" aria-hidden="true"></i>
                                        Views </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                        Likes </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                        Favorites </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                        Winks </a>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="profile-content">
                        <div className="row">
                            <div className="col-md-12">
                                <p id="header-title">About Me</p>
                                <p id="header-sub-title">Other information about yourself.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">

                                <div className="tab_container">
                                    <input id="tab1" className="input-tab" type="radio" name="tabs" checked/>
                                    <label for="tab1" id="header-label"><span>Personal</span></label>

                                    <input id="tab2" className="input-tab" type="radio" name="tabs"/>
                                    <label for="tab2" id="header-label"><span>Lifestyle</span></label>

                                    <input id="tab3" className="input-tab" type="radio" name="tabs"/>
                                    <label for="tab3" id="header-label"><span>Interest</span></label>

                                    <input id="tab4" className="input-tab" type="radio" name="tabs"/>
                                    <label for="tab4" id="header-label"><span>Kids</span></label>

                                    <input id="tab5" className="input-tab" type="radio" name="tabs"/>
                                    <label for="tab5" id="header-label"><span>Health</span></label>

                                    <section id="content1" className="tab-content">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>Ethnicity</p>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="radio">
                                                    <label><input type="radio" name="ethnicityradio" className="form-radio" />Asian</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="ethnicityradio" className="form-radio" />Latino
                                                        Hispanic</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="ethnicityradio" className="form-radio" />Pacific
                                                        Islander</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="ethnicityradio" className="form-radio" />Black
                                                        African Descent</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="radio">
                                                    <label><input type="radio" name="ethnicityradio" className="form-radio" />Middle
                                                        Eastern</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="ethnicityradio" className="form-radio" />White
                                                        Caucasian</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="ethnicityradio" className="form-radio" />East
                                                        Indian</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="ethnicityradio" className="form-radio" />Native
                                                        American</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <hr />
                                            </div>
                                            <div className="col-md-12">
                                                <p>Astrology</p>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="astrologyradio" className="form-radio" />Capricorn</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="astrologyradio" className="form-radio" />Aries</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="astrologyradio" className="form-radio" />Cancer</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="astrologyradio" className="form-radio" />Libra</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="astrologyradio" className="form-radio" />Aquarius</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="astrologyradio" className="form-radio" />Taurus</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="astrologyradio" className="form-radio" />Leo</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="astrologyradio" className="form-radio" />Scorpio</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="astrologyradio" className="form-radio" />Pisces</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="astrologyradio" className="form-radio" />Gemini</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="astrologyradio" className="form-radio" />Virgo</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="astrologyradio" className="form-radio" />Sagittarius</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <hr />
                                            </div>
                                            <div className="col-md-12">
                                                <p>Education</p>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="educationradio" className="form-radio" />High
                                                        school</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="educationradio" className="form-radio" />Bachelor's
                                                        degree</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="educationradio" className="form-radio" />Some
                                                        college</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="educationradio" className="form-radio" />Graduate
                                                        degree</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="educationradio" className="form-radio" />Associates
                                                        degree</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="educationradio" className="form-radio" />PhD
                                                        Post Doctoral</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <hr />
                                            </div>
                                            <div className="col-md-12">
                                                <p>Language</p>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="languageradio" className="form-radio" />Arabic</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="languageradio" className="form-radio" />English</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="languageradio" className="form-radio" />Hebrew</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="languageradio" className="form-radio" />Japanese</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="languageradio" className="form-radio" />Portuguese</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="languageradio" className="form-radio" />Swedish</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="languageradio" className="form-radio" />Chinese</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="languageradio" className="form-radio" />French</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="languageradio" className="form-radio" />Hindi</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="languageradio" className="form-radio" />Korean</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="languageradio" className="form-radio" />Russian</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="languageradio" className="form-radio" />Tagalog</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="languageradio" className="form-radio" />Dutch</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="languageradio" className="form-radio" />German</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="languageradio" className="form-radio" />Italian</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="languageradio" className="form-radio" />Norwegian</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="languageradio" className="form-radio" />Spanish</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="languageradio" className="form-radio" />Urdu</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="btn btn-default questions-btn">Save</button>
                                            </div>
                                        </div>



                                    </section>

                                    <section id="content2" className="tab-content">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>Faith</p>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="faithradio" className="form-radio" />Agnostic</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="faithradio" className="form-radio" />Christian
                                                        Catholic</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="faithradio" className="form-radio" />Hindu</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="faithradio" className="form-radio" />Spiritual
                                                        but not religious</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="faithradio" className="form-radio" />Atheist</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="faithradio" className="form-radio" />Christian
                                                        LDS</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="faithradio" className="form-radio" />Jewish</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="faithradio" className="form-radio" />Buddhist
                                                        Taoist</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="faithradio" className="form-radio" />Christian
                                                        Protestant</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="faithradio" className="form-radio" />Muslim
                                                        Islam</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <hr />
                                            </div>
                                            <div className="col-md-12">
                                                <p>Occupation</p>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Administrative
                                                        Secretarial</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Financial
                                                        Accounting Real Estate</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Medical
                                                        Dental Veterinary Fitness</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Retired</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Student</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Travel
                                                        Hospitality Transportation</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Fashion
                                                        Model Beauty</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Executive
                                                        Management</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Legal</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Retail
                                                        Food services</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Artistic
                                                        Creative Performance</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Labor
                                                        Construction</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Political
                                                        Govt Civil Service Military</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Sales
                                                        Marketing</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Education
                                                        Teacher Professor</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Nonprofit
                                                        Volunteer Activist</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Architecture
                                                        Interior design</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Self
                                                        Employed Entrepreneur</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Technical
                                                        Science Computers Engineering</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="occupationradio" className="form-radio" />Law
                                                        enforcement Security Military</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="btn btn-default questions-btn">Save</button>
                                            </div>
                                        </div>

                                    </section>

                                    <section id="content3" className="tab-content">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>Sports</p>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Aerobics</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Basketball</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Cycling</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Dancing</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Running</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Swimming</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Weights
                                                        Machines</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />VolleyBall</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Racing-Motorcross</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Billiards/Pool</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Football</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Inline
                                                        Skating</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Skiing</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Tennis
                                                        Racquet sports</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Yoga</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Baseball</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Bowling</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Golf</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Martial
                                                        Arts</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Soccer</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Walking
                                                        Hiking</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="sportsradio" className="form-radio" />Hockey</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <hr />
                                            </div>

                                            <div className="col-md-12">
                                                <p>Hobbies</p>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Alumni
                                                        connections</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Coffee
                                                        and conversation</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Dining
                                                        out</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Hobbies
                                                        and crafts</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Music
                                                        and concerts</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Performing
                                                        arts</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Political
                                                        interests</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Travel
                                                        Sightseeing</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Watching
                                                        sports</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Book
                                                        club</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Business
                                                        networking</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Fishing
                                                        Hunting</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Movies
                                                        Videos</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Exploring
                                                        new areas</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Playing
                                                        cards</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Religion
                                                        Spiritual</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Video
                                                        games</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Wine
                                                        tasting</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Camping</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Cooking</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Gardening
                                                        Landscaping</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Museums
                                                        and art</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Nightclubs
                                                        Dancing</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Playing
                                                        sports</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Shopping
                                                        Antiques</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="hobbiesradio" className="form-radio" />Volunteering</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <hr />
                                            </div>
                                            <div className="col-md-12">
                                                <p>Pet</p>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="petradio" className="form-radio" />Birds</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="petradio" className="form-radio" />Exotic
                                                        pets</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="petradio" className="form-radio" />Cats</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="petradio" className="form-radio" />Fish</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="petradio" className="form-radio" />Dogs</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="petradio" className="form-radio" />Horses</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="btn btn-default questions-btn">Save</button>
                                            </div>

                                        </div>

                                    </section>

                                    <section id="content4" className="tab-content">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>Marital Status</p>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="radio">
                                                    <label><input type="radio" name="maritalradio" className="form-radio" />Never
                                                        Married</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="maritalradio" className="form-radio" />Divorced</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="radio">
                                                    <label><input type="radio" name="maritalradio" className="form-radio" />Widow
                                                        Widower</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="maritalradio" className="form-radio" />Currently
                                                        Separated</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <hr />
                                            </div>

                                            <div className="col-md-12">
                                                <p>Has Kids</p>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="radio">
                                                    <label><input type="radio" name="kidsradio" className="form-radio" />No</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="kidsradio" className="form-radio" />Yes
                                                        and they sometimes live at home</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="radio">
                                                    <label><input type="radio" name="kidsradio" className="form-radio" />Yes
                                                        and they live away from home</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="kidsradio" className="form-radio" />Yes
                                                        and they live at home</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="btn btn-default questions-btn">Save</button>
                                            </div>
                                            <div className="col-md-12">
                                                <hr />
                                            </div>
                                        </div>
                                    </section>

                                    <section id="content5" className="tab-content">
                                        <div className="row">

                                            <div className="col-md-12">
                                                <p>Smoke</p>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="smokeradio" className="form-radio" />No
                                                        way</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="smokeradio" className="form-radio" />Cigar
                                                        aficionado</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="smokeradio" className="form-radio" />Occasionally</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="smokeradio" className="form-radio" />Yes
                                                        but trying to quit</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="radio">
                                                    <label><input type="radio" name="smokeradio" className="form-radio" />Daily</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <hr />
                                            </div>

                                            <div className="col-md-12">
                                                <p>Drink</p>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="radio">
                                                    <label><input type="radio" name="drinkradio" className="form-radio" />Never</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="drinkradio" className="form-radio" />Moderately</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="radio">
                                                    <label><input type="radio" name="drinkradio" className="form-radio" />Social
                                                        Drinker</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="drinkradio" className="form-radio" />Regularly</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <hr />
                                            </div>

                                            <div className="col-md-12">
                                                <p>Exercise</p>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="radio">
                                                    <label><input type="radio" name="exerciseradio" className="form-radio" />Never</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="exerciseradio" className="form-radio" />5
                                                        or more times per week</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="radio">
                                                    <label><input type="radio" name="exerciseradio" className="form-radio" />2
                                                        times per week</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="exerciseradio" className="form-radio" />3
                                                        times per week</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="btn btn-default questions-btn">Save</button>
                                            </div>
                                            <div className="col-md-12">
                                                <hr />
                                            </div>

                                        </div>

                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
};

export default profilesettingsaboutme;