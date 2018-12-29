import React from 'react';
import CenterImg from '../../assets/center-bg.png';
import TopImg from '../../assets/top-img.png';
import DownArrow from '../../assets/downarrow.png';
import RightImg from '../../assets/right-img.jpg';
import LeftImg from '../../assets/left-img.jpg';
import ToRightImg from '../../assets/toright.png';
import ToLeftImg from '../../assets/toleft.png';
import DownArrow2Img from '../../assets/downarrow2.png';
import CombineImg from '../../assets/combine.jpg';
import VidBG from '../../assets/vid-bg.mp4';

const home = () => {
    return (
        <div>
            <header className="header-image-home">
                <video autoPlay={true} loop id="video-background" muted><source src={VidBG} type="video/mp4"/></video>
                <div className="headline-home">
                    <div className="container">
                        <div className="col-md-6">
                            <div className="call-to-action-home">
                                <p>Let Us Find The Perfect Family For Yours!</p>
                                <a className="btn btn-default continue-btn" href="#blank">GET STARTED</a><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container" id="page-content">
                <div id="how-it-works">
                    <h3>Bringing Compatible Families Together</h3>
                    <p>Let Us Match Your Family With Others Like Yours,<br/>Or Different Than Yours!</p>
                    <h4>HOW IT WORKS</h4>
                    <div id="animationbg">
                        <img alt="animationBG" className="img-responsive" id="centerimage" src={CenterImg}/>
                        <img alt="animationBG" className="img-responsive" id="topimage" src={TopImg}/>
                        <span id="text1">Family #1</span>
                        <img alt="animationBG" className="img-responsive" src={DownArrow} id="arrow1"/>
                        <img alt="animationBG" className="img-responsive" id="rightimg" src={RightImg}/>
                        <span id="text2">Family #2</span>
                        <img alt="animationBG" className="img-responsive" src={DownArrow} id="arrow2"/>
                        <img alt="animationBG" className="img-responsive" id="leftimg" src={LeftImg}/>
                        <img alt="animationBG" className="img-responsive" id="downleftright1" src={ToRightImg}/>
                        <img alt="animationBG" className="img-responsive" id="downleftright2" src={ToLeftImg}/>
                        <img alt="animationBG" className="img-responsive" id="downleftright3" src={DownArrow2Img}/>
                        <img alt="animationBG" className="img-responsive" id="combine" src={CombineImg}/>
                    </div>
                    <div id="animationbg2">

                            <div className="row">
                                <div className="col-lg-12">
                                        <img alt="animationBG" className="img-responsive" id="topimage2" src={TopImg}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                        <br/><br/>
                                        <center><span id="text12">Family #1</span></center><br/>
                                        <img alt="animationBG" className="img-responsive" id="arrow12" src={DownArrow}/><br/>
                                        <img alt="animationBG" className="img-responsive" id="rightimg2" src={RightImg}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                        <br/><br/>
                                        <center><span id="text22">Family #2</span></center><br/>
                                        <img alt="animationBG" className="img-responsive" id="arrow22" src={DownArrow}/><br/>
                                        <img alt="animationBG" className="img-responsive" id="leftimg2" src={LeftImg}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                        <br/><br/><br/>
                                        <img alt="animationBG" className="img-responsive" id="downleftright32" src={DownArrow2Img}/><br/>
                                        <img alt="animationBG" className="img-responsive" id="combine2" src={CombineImg}/>
                                </div>
                            </div>

                    </div>
                    <p id="below-text">Family #1 and #2 who have no way of knowing each other, each provide certain information about themselves which FamilyMatch<br/>processes through its patented algorithm to match them, then sends them notices to accept or reject the match.<br/>It's Really that simple!</p>
                    <button type="submit" className="btn btn-default center-block find-btn">Click Here To Find Your Family's Match!&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    )
};

export default home;