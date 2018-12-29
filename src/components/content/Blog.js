import React from 'react';
import ArticleImage1 from '../../assets/blog-img-1.png';
import ArticleImage2 from '../../assets/blog-img-2.png';
import SidebarAds from '../../assets/sidebar-ads.jpg';

const blog = () => {
    return (
    <div>
        <header class="header-image-blog">
            <div class="headline-other">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="call-to-action-other">
                                <p>&nbsp;&nbsp;&nbsp;BLOG</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="container">
            <div id="blog-content">
                <div class="row">
                            <div class="col-md-4">
                                <div id="custom-search-input">
                                    <div class="input-group col-md-12">
                                        <input type="text" class="form-control input-lg" placeholder="Search" />
                                        <span class="input-group-btn">
                                            <button class="btn btn-info btn-lg" type="button">
                                                <i class="glyphicon glyphicon-search"></i>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                <div class="row">
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-6">
                                <div id="box">
                                    <p>POPULAR POST</p>
                                    <hr/>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <img alt="featuredImg" src={ArticleImage1} class="img-responsive"/>
                                            <span>Family Comes<br/>First</span>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <img alt="featuredImg" src={ArticleImage2} class="img-responsive"/>
                                            <span>Building Healthy<br/>Family Bonds</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div id="box">
                                    <p>RECENT POST</p>
                                    <hr/>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <img alt="featuredImg" src={ArticleImage1} class="img-responsive" />
                                            <span>Family Comes<br />First</span>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <img alt="featuredImg" src={ArticleImage2} class="img-responsive" />
                                            <span>Building Healthy<br />Family Bonds</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="thumbnail">
                                    <img alt="featuredImg" src={ArticleImage1}/>
                                    <div class="caption">
                                        <h4>Family Comes First</h4>
                                        <p>What family means is unconditional love and someone that will always be there for you through the good times and bad...</p>
                                        <button type="submit" class="btn btn-default read-more-btn">Read More&nbsp;&nbsp;&nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="thumbnail">
                                    <img alt="featuredImg" src={ArticleImage2}/>
                                    <div class="caption">
                                        <h4>Building Healthy Family Bonds</h4>
                                        <p>While the U.S. and other "developed" countries are considered First World Countries when it comes to technological advancement, most...</p>
                                        <button type="submit" class="btn btn-default read-more-btn">Read More&nbsp;&nbsp;&nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="thumbnail">
                                    <img alt="featuredImg" src={ArticleImage1}/>
                                    <div class="caption">
                                        <h4>Family Comes First</h4>
                                        <p>What family means is unconditional love and someone that will always be there for you through the good times and bad...</p>
                                        <button type="submit" class="btn btn-default read-more-btn">Read More&nbsp;&nbsp;&nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="thumbnail">
                                    <img alt="featuredImg" src={ArticleImage2}/>
                                    <div class="caption">
                                        <h4>Building Healthy Family Bonds</h4>
                                        <p>While the U.S. and other "developed" countries are considered First World Countries when it comes to technological advancement, most...</p>
                                        <button type="submit" class="btn btn-default read-more-btn">Read More&nbsp;&nbsp;&nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col-md-6">
                                <span id="pagi-prev"><a href="#blank">Previous</a></span><span id="pagi-1"><a href="#blank">1</a></span><span id="pagi-2"><a href="#blank">2</a></span><span id="pagi-3"><a href="#blank">3</a></span><span id="pagi-dot">...</span><span id="pagi-4"><a href="#blank">4</a></span><span id="pagi-next"><a href="#blank">Next</a></span>
                            </div>
                            <div class="col-md-6">
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

export default blog;