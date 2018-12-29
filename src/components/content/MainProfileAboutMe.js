import React from 'react';

const mainprofileaboutme = () => {
    return (
    <div>
    <div class="container">
        <div id="profile-settings">
            <div class="row profile">
                <div class="col-md-3">
                    <div class="profile-sidebar">
                        <div class="profile-userpic">
                            <img src="http://z1035.com/wp-content/uploads/2018/03/Mark-Zuckerberg-FB-profile-pic-200x200.jpg?x90143" class="img-responsive" alt=""/>
                        </div>
                        <div class="profile-usertitle">
                            <div class="profile-usertitle-name">
                                John Doe
                            </div>
                            <div class="profile-usertitle-job">
                                "Life is hard, get used to it!"
                            </div>
                            <div class="profile-usertitle-job">
                                Single
                            </div>
                            <div class="profile-usertitle-job">
                                Looking for Partner
                            </div>
                        </div>
                        <div class="profile-button">
                            <a href="#"><i class="fa fa-thumbs-up" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;<a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;<a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;<a href="#"><i class="fa fa-eye" aria-hidden="true"></i></a>
                        </div>
                       <div class="profile-usermenu">
                        <ul class="nav">
                            <li>
                                <a href="#">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    Profile</a>
                            </li>
                            <li class="active">
                                <a href="#" target="_blank">
                                    <i class="fa fa-info-circle" aria-hidden="true"></i>
                                    About Me </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i class="fa fa-list-alt" aria-hidden="true"></i>
                                    Match Data</a>
                            </li> 
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="profile-content">
                        <div class="row">
                            <div class="col-md-12">
                                <p id="header-title">About Me</p>
                                <p id="header-sub-title">Other information about this person.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">

                                <div class="tab_container">
                                    <input id="tab1" class="input-tab" type="radio" name="tabs" defaultChecked/>
                                    <label for="tab1" id="header-label"><span>Personal</span></label>

                                    <input id="tab2" class="input-tab" type="radio" name="tabs"/>
                                    <label for="tab2" id="header-label"><span>Lifestyle</span></label>

                                    <input id="tab3" class="input-tab" type="radio" name="tabs"/>
                                    <label for="tab3" id="header-label"><span>Interest</span></label>

                                    <input id="tab4" class="input-tab" type="radio" name="tabs"/>
                                    <label for="tab4" id="header-label"><span>Kids</span></label>

                                    <input id="tab5" class="input-tab" type="radio" name="tabs"/>
                                    <label for="tab5" id="header-label"><span>Health</span></label>

                                    <section id="content1" class="tab-content">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <p>Ethnicity</p>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="radio">
                                                    <label><input type="radio" name="ethnicityradio" class="form-radio"/>Asian</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="ethnicityradio" class="form-radio"/>Latino
                                                        Hispanic</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="ethnicityradio" class="form-radio"/>Pacific
                                                        Islander</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="ethnicityradio" class="form-radio"/>Black
                                                        African Descent</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="radio">
                                                    <label><input type="radio" name="ethnicityradio" class="form-radio"/>Middle
                                                        Eastern</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="ethnicityradio" class="form-radio"/>White
                                                        Caucasian</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="ethnicityradio" class="form-radio"/>East
                                                        Indian</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="ethnicityradio" class="form-radio"/>Native
                                                        American</label>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <hr />
                                            </div>
                                            <div class="col-md-12">
                                                <p>Astrology</p>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="astrologyradio" class="form-radio"/>Capricorn</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="astrologyradio" class="form-radio"/>Aries</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="astrologyradio" class="form-radio"/>Cancer</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="astrologyradio" class="form-radio"/>Libra</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="astrologyradio" class="form-radio"/>Aquarius</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="astrologyradio" class="form-radio"/>Taurus</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="astrologyradio" class="form-radio"/>Leo</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="astrologyradio" class="form-radio"/>Scorpio</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="astrologyradio" class="form-radio"/>Pisces</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="astrologyradio" class="form-radio"/>Gemini</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="astrologyradio" class="form-radio"/>Virgo</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="astrologyradio" class="form-radio"/>Sagittarius</label>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <hr />
                                            </div>
                                            <div class="col-md-12">
                                                <p>Education</p>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="educationradio" class="form-radio"/>High
                                                        school</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="educationradio" class="form-radio"/>Bachelor's
                                                        degree</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="educationradio" class="form-radio"/>Some
                                                        college</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="educationradio" class="form-radio"/>Graduate
                                                        degree</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="educationradio" class="form-radio"/>Associates
                                                        degree</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="educationradio" class="form-radio"/>PhD
                                                        Post Doctoral</label>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <hr />
                                            </div>
                                            <div class="col-md-12">
                                                <p>Language</p>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="languageradio" class="form-radio"/>Arabic</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="languageradio" class="form-radio"/>English</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="languageradio" class="form-radio"/>Hebrew</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="languageradio" class="form-radio"/>Japanese</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="languageradio" class="form-radio"/>Portuguese</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="languageradio" class="form-radio"/>Swedish</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="languageradio" class="form-radio"/>Chinese</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="languageradio" class="form-radio"/>French</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="languageradio" class="form-radio"/>Hindi</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="languageradio" class="form-radio"/>Korean</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="languageradio" class="form-radio"/>Russian</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="languageradio" class="form-radio"/>Tagalog</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="languageradio" class="form-radio"/>Dutch</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="languageradio" class="form-radio"/>German</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="languageradio" class="form-radio"/>Italian</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="languageradio" class="form-radio"/>Norwegian</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="languageradio" class="form-radio"/>Spanish</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="languageradio" class="form-radio"/>Urdu</label>
                                                </div>
                                            </div>
                                        </div>



                                    </section>

                                    <section id="content2" class="tab-content">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <p>Faith</p>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="faithradio" class="form-radio"/>Agnostic</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="faithradio" class="form-radio"/>Christian
                                                        Catholic</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="faithradio" class="form-radio"/>Hindu</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="faithradio" class="form-radio"/>Spiritual
                                                        but not religious</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="faithradio" class="form-radio"/>Atheist</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="faithradio" class="form-radio"/>Christian
                                                        LDS</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="faithradio" class="form-radio"/>Jewish</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="faithradio" class="form-radio"/>Buddhist
                                                        Taoist</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="faithradio" class="form-radio"/>Christian
                                                        Protestant</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="faithradio" class="form-radio"/>Muslim
                                                        Islam</label>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <hr />
                                            </div>
                                            <div class="col-md-12">
                                                <p>Occupation</p>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Administrative
                                                        Secretarial</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Financial
                                                        Accounting Real Estate</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Medical
                                                        Dental Veterinary Fitness</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Retired</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Student</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Travel
                                                        Hospitality Transportation</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Fashion
                                                        Model Beauty</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Executive
                                                        Management</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Legal</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Retail
                                                        Food services</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Artistic
                                                        Creative Performance</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Labor
                                                        Construction</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Political
                                                        Govt Civil Service Military</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Sales
                                                        Marketing</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Education
                                                        Teacher Professor</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Nonprofit
                                                        Volunteer Activist</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Architecture
                                                        Interior design</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Self
                                                        Employed Entrepreneur</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Technical
                                                        Science Computers Engineering</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="occupationradio" class="form-radio"/>Law
                                                        enforcement Security Military</label>
                                                </div>
                                            </div>
                                        </div>

                                    </section>

                                    <section id="content3" class="tab-content">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <p>Sports</p>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Aerobics</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Basketball</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Cycling</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Dancing</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Running</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Swimming</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Weights
                                                        Machines</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>VolleyBall</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Racing-Motorcross</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Billiards/Pool</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Football</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Inline
                                                        Skating</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Skiing</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Tennis
                                                        Racquet sports</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Yoga</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Baseball</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Bowling</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Golf</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Martial
                                                        Arts</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Soccer</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Walking
                                                        Hiking</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="sportsradio" class="form-radio"/>Hockey</label>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <hr />
                                            </div>

                                            <div class="col-md-12">
                                                <p>Hobbies</p>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Alumni
                                                        connections</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Coffee
                                                        and conversation</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Dining
                                                        out</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Hobbies
                                                        and crafts</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Music
                                                        and concerts</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Performing
                                                        arts</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Political
                                                        interests</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Travel
                                                        Sightseeing</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Watching
                                                        sports</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Book
                                                        club</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Business
                                                        networking</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Fishing
                                                        Hunting</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Movies
                                                        Videos</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Exploring
                                                        new areas</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Playing
                                                        cards</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Religion
                                                        Spiritual</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Video
                                                        games</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Wine
                                                        tasting</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Camping</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Cooking</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Gardening
                                                        Landscaping</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Museums
                                                        and art</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Nightclubs
                                                        Dancing</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Playing
                                                        sports</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Shopping
                                                        Antiques</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="hobbiesradio" class="form-radio"/>Volunteering</label>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <hr />
                                            </div>
                                            <div class="col-md-12">
                                                <p>Pet</p>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="petradio" class="form-radio"/>Birds</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="petradio" class="form-radio"/>Exotic
                                                        pets</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="petradio" class="form-radio"/>Cats</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="petradio" class="form-radio"/>Fish</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="petradio" class="form-radio"/>Dogs</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="petradio" class="form-radio"/>Horses</label>
                                                </div>
                                            </div>

                                        </div>

                                    </section>

                                    <section id="content4" class="tab-content">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <p>Marital Status</p>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="radio">
                                                    <label><input type="radio" name="maritalradio" class="form-radio"/>Never
                                                        Married</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="maritalradio" class="form-radio"/>Divorced</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="radio">
                                                    <label><input type="radio" name="maritalradio" class="form-radio"/>Widow
                                                        Widower</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="maritalradio" class="form-radio"/>Currently
                                                        Separated</label>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <hr />
                                            </div>

                                            <div class="col-md-12">
                                                <p>Has Kids</p>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="radio">
                                                    <label><input type="radio" name="kidsradio" class="form-radio"/>No</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="kidsradio" class="form-radio"/>Yes
                                                        and they sometimes live at home</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="radio">
                                                    <label><input type="radio" name="kidsradio" class="form-radio"/>Yes
                                                        and they live away from home</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="kidsradio" class="form-radio"/>Yes
                                                        and they live at home</label>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <hr />
                                            </div>
                                        </div>
                                    </section>

                                    <section id="content5" class="tab-content">
                                        <div class="row">

                                            <div class="col-md-12">
                                                <p>Smoke</p>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="smokeradio" class="form-radio"/>No
                                                        way</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="smokeradio" class="form-radio"/>Cigar
                                                        aficionado</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="smokeradio" class="form-radio"/>Occasionally</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="smokeradio" class="form-radio"/>Yes
                                                        but trying to quit</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="radio">
                                                    <label><input type="radio" name="smokeradio" class="form-radio"/>Daily</label>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <hr />
                                            </div>

                                            <div class="col-md-12">
                                                <p>Drink</p>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="radio">
                                                    <label><input type="radio" name="drinkradio" class="form-radio"/>Never</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="drinkradio" class="form-radio"/>Moderately</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="radio">
                                                    <label><input type="radio" name="drinkradio" class="form-radio"/>Social
                                                        Drinker</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="drinkradio" class="form-radio"/>Regularly</label>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <hr />
                                            </div>

                                            <div class="col-md-12">
                                                <p>Exercise</p>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="radio">
                                                    <label><input type="radio" name="exerciseradio" class="form-radio"/>Never</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="exerciseradio" class="form-radio"/>5
                                                        or more times per week</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="radio">
                                                    <label><input type="radio" name="exerciseradio" class="form-radio"/>2
                                                        times per week</label>
                                                </div>
                                                <div class="radio">
                                                    <label><input type="radio" name="exerciseradio" class="form-radio"/>3
                                                        times per week</label>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
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

export default mainprofileaboutme;