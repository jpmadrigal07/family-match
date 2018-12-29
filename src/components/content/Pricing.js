import React from 'react';
import SidebarAds from '../../assets/sidebar-ads.jpg';

const pricing = () => {
    return (
       <div>
            <div class="container">
                <div id="pricing-content">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="row">
                                <div class="col-md-4">
                                    <div id="pricing-blue">
                                        <p id="first-p">Get Started Now</p>
                                        <p id="second-p">FREE Membership</p>
                                        <p id="third-p"><span>$0</span>/Month</p>
                                        <p id="fourth-p">Become a Free Member to Discover a World of Benifits</p>
                                        <p id="fifth-p">We're here to help the relationships that you have with your community and friends stay
                                            even stronger after having kids. As a member, you will have a dedicated family homepage. Enjoy also our
                                            complimentary family matching services. And registration is always free!</p>
                                        <button type="submit" class="btn btn-default center-block sign-up-btn-blue-1">Sign Up</button>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div id="pricing-red">
                                        <p id="first-p">Get More Access</p>
                                        <p id="second-p">FamilyMatch Pro</p>
                                        <p id="third-p"><span>$19</span>/Month</p>
                                        <p id="free-p">7 days FREE trial</p>
                                        <p id="fourth-p">FamilyMatch Pro Gives You More Advantage</p>
                                        <p id="fifth-p">As a Pro you can give reviews and ratings of families and playologists while being able to
                                            post events.</p>
                                        <ul>
                                            <li><span>1 Family Account</span><br />- Find Playologists</li>
                                            <li><span>3 Event Postings Monthly</span><br />- Give Family Ratings &amp; Reviews</li>
                                            <li><span>See Whose Viewed Your Profile</span><br />- Give Playologist Ratings &amp; Reviews </li>
                                        </ul>
                                        <button type="submit" class="btn btn-default center-block sign-up-btn-red">Sign Up</button>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div id="pricing-blue">
                                        <p id="first-p">Welcome Elite</p>
                                        <p id="second-p">FamilyMatch Elite</p>
                                        <p id="third-p"><span>$27</span>/Month</p>
                                        <p id="free-p">7 days FREE trial</p>
                                        <p id="fourth-p">Become a Free Member to Discover a World of Benifits</p>
                                        <p id="fifth-p">We're here to help the relationships that you have with your community and friends stay
                                            even stronger after having kids. As a member, you will have a dedicated family homepage. Enjoy also our
                                            complimentary family matching services. And registration is always free!</p>
                                        <ul>
                                            <li><span>Get Alerted About New Playologists</span><br />- Find Playologists</li>
                                            <li><span>10 Event Postings Monthly Give Family Ratings &amp; Reviews</span></li>
                                            <li><span>See Whose Viewed Your Profile</span><br />- Give Playologist Ratings &amp; Reviews </li>
                                        </ul>
                                        <button type="submit" class="btn btn-default center-block sign-up-btn-blue-2">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <hr/>
                            <div class="row">
                                <div class="col-md-12">
                                    <div id="table">
                                        <table class="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th><span id="first-header">The benifits of having a subscription</span></th>
                                                    <th><span>Subscribers</span></th>
                                                    <th><span>Members</span></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td><span>Send email massage</span></td>
                                                    <td><i class="fa fa-check"></i></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td><span>See and respond to email messages</span></td>
                                                    <td><i class="fa fa-check"></i></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Priority access to Match Events -</span> <a href="#blank">Details</a></td>
                                                    <td><i class="fa fa-check"></i></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td><span>See who's viewed you</span></td>
                                                    <td><i class="fa fa-check"></i></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td><span>See who's like you</span></td>
                                                    <td><i class="fa fa-check"></i></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Remove members from view</span></td>
                                                    <td><i class="fa fa-check"></i></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Search for matches</span></td>
                                                    <td><i class="fa fa-check"></i></td>
                                                    <td><i class="fa fa-check"></i></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Receive dally matches</span></td>
                                                    <td><i class="fa fa-check"></i></td>
                                                    <td><i class="fa fa-check"></i></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Create a profile and appear in search results</span></td>
                                                    <td><i class="fa fa-check"></i></td>
                                                    <td><i class="fa fa-check"></i></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Post a photo</span></td>
                                                    <td><i class="fa fa-check"></i></td>
                                                    <td><i class="fa fa-check"></i></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Send likes</span></td>
                                                    <td><i class="fa fa-check"></i></td>
                                                    <td><i class="fa fa-check"></i></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="row">
                                <div id="sidebar">
                                    <div class="col-md-12">
                                        <img alt="ads" src={SidebarAds} class="img-responsive" />
                                    </div>
                                    <div class="col-md-12">
                                            <img alt="ads" src={SidebarAds} class="img-responsive" />
                                    </div>
                                    <div class="col-md-12">
                                        <img alt="ads" src={SidebarAds} class="img-responsive" />
                                    </div>
                                    <div class="col-md-12">
                                        <img alt="ads" src={SidebarAds} class="img-responsive" />
                                    </div>
                                    <div class="col-md-12">
                                        <img alt="ads" src={SidebarAds} class="img-responsive" />
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

export default pricing;