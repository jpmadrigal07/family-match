import React from 'react';
import FeaturedImage from '../../assets/article-featured-img.jpg';
import SidebarAds from '../../assets/sidebar-ads.jpg';

const article = () => {
    return (
        <div className="container">
        <div id="article">
            <div className="row">
                <div className="col-md-12">
                    <div id="back-button">
                    <a href="#top"><i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Back to the Home Page</a>
                    </div>
                </div>
                <div className="col-md-9">
                    <div id="main-article">
                        <img alt="img" src={FeaturedImage} className="img-responsive" />
                        <h2>Parenting Style</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero tellus, finibus in iaculis facilisis, suscipit eget dui. Nunc volutpat bibendum erat, iaculis condimentum justo ornare sed. Nunc blandit ullamcorper accumsan. Sed in velit eget augue elementum euismod quis interdum nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vehicula, odio nec placerat pulvinar, odio elit blandit lacus, et mattis neque sapien id nibh. Nulla rutrum mi pulvinar velit fringilla, in pellentesque sapien hendrerit. Mauris vel metus sed ante egestas tempus. Praesent eu neque commodo odio suscipit ullamcorper ac et nisi.</p>
                        <h4>Planning Parenthood</h4>
                        <p>Nunc sit amet neque et mauris ultrices aliquam. Ut et convallis lorem. Curabitur et risus neque. Mauris erat libero, auctor non lacinia in, dignissim vitae urna. Fusce rutrum enim sapien, nec rhoncus sem tempor ac. Nam elementum arcu vitae ex condimentum, nec vestibulum lacus facilisis. Suspendisse nisi nisi, varius at mi molestie, ornare ultricies massa. Vivamus faucibus imperdiet leo, et volutpat eros tincidunt fermentum. Integer vel justo lacus. Fusce rutrum congue tellus, eget aliquam lacus mollis vel. Nunc odio lorem, euismod vitae tristique sed, efficitur in arcu. Cras blandit sem eu sem facilisis interdum at quis magna. Nunc tincidunt gravida tortor ac vehicula.</p>
                        <h4>Early Childhood</h4>
                        <p>Sed eu neque sed enim ullamcorper rutrum sed dictum erat. Etiam semper malesuada nibh, nec pharetra nisl. Vestibulum nunc augue, tristique ut tortor at, porttitor condimentum risus. Donec gravida malesuada libero non facilisis. Phasellus consectetur pharetra dictum. Praesent sollicitudin, elit at vestibulum tincidunt, nulla nisl molestie ex, pellentesque pulvinar massa elit vitae felis. Phasellus suscipit quam quam, consequat pulvinar magna lobortis non. Nulla pretium est eu dignissim dictum. Aliquam id ultricies nisl. Cras diam diam, laoreet in felis ut, tincidunt imperdiet sapien. Vestibulum sagittis lorem eu dignissim iaculis. Mauris nunc lorem, egestas porta risus sit amet, suscipit commodo risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere tellus vitae nibh imperdiet aliquet.</p>
                        <h4>Teaching Mannerism and Being Responsible</h4>
                        <p>Nulla eget purus quis leo malesuada pellentesque. Sed varius metus id est bibendum, nec hendrerit enim gravida. Integer ut ex sem. Vestibulum vel purus dignissim, feugiat orci vitae, aliquam tellus. Proin vehicula elit at enim posuere pretium. Sed vel libero quis ligula aliquet lobortis ut id felis. Suspendisse egestas sem nunc, et bibendum sem lacinia sed. Aliquam erat volutpat. Aliquam eros diam, ullamcorper vitae risus sit amet, sodales accumsan arcu. Aenean id nibh ac ex elementum accumsan blandit ut mi. Aenean rhoncus imperdiet lectus in tempus. Nunc vitae elit eu erat pellentesque hendrerit eget non felis.</p>
                        <h4>Preparing Your Child for Adulthood</h4>
                        <p>Aliquam molestie, felis sit amet ultricies efficitur, mi arcu luctus lacus, at sodales velit tortor in magna. Nullam a cursus nunc. Etiam metus sem, tempor et mollis non, dictum vel est. Aenean convallis sem eget bibendum eleifend. Etiam convallis, ligula a aliquam ornare, nunc lectus maximus nisi, vel suscipit dolor mauris sagittis ex. Duis sagittis mattis congue. Duis euismod non orci eget tristique.</p>
                        <br/><hr/>
                        <div className="row">
                            <div className="col-md-6">
                                <span id="share-logo">Share with: <i className="fa fa-facebook" aria-hidden="true"></i> <i className="fa fa-twitter" aria-hidden="true"></i> <i className="fa fa-google-plus" aria-hidden="true"></i></span>
                            </div>
                            <div className="col-md-6">
                               <div id="prev-next-btn"><span id="prev-btn"><a href="#top">Previous</a></span> | <span id="next-btn"><a href="#top">Next</a></span></div> 
                            </div>
                        </div>
                        <div id="comment">
                            <div className="row">
                                <div className="col-md-12">
                                    <form role="search">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control article-comment" placeholder="First Name"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control article-comment" placeholder="Last Name"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control article-comment" rows="5" placeholder="Comment"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-default btn-block comment-btn">Submit Comment&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="row">
                        <div id="sidebar">
                            <div className="col-md-12">
                                <img alt="ads" src={SidebarAds} className="img-responsive" />
                            </div>
                            <div className="col-md-12">
                                    <img alt="ads" src={SidebarAds} className="img-responsive" />
                            </div>
                            <div className="col-md-12">
                                <img alt="ads" src={SidebarAds} className="img-responsive" />
                            </div>
                            <div className="col-md-12">
                                <img alt="ads" src={SidebarAds} className="img-responsive" />
                            </div>
                            <div className="col-md-12">
                                <img alt="ads" src={SidebarAds} className="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default article;