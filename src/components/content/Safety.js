import React from 'react';
import FormBG from '../../assets/form-bg.png';
import SidebarAds from '../../assets/sidebar-ads.jpg';

const safety = () => {
    return (
    <div>
    <div className="container">
        <div id="form-assurance">
            <div className="row">
                <div className="col-md-9">
                    <div className="content legal">
                        <img  alt="topImage" src={FormBG} width="" className="img-responsive"/>
                        <p>At <i><strong>FamilyMatch™</strong></i> our first and last efforts must be focused on the safety and security of all participating families. We must authenticate every user in our system to do our best to determine whether or not they are real people who are not only established in our community, but more importantly are safe for our families to interact with.</p>
                        <p>Nonetheless, there are some users who may wish to go beyond our screening in order to have further assurance that the families whom they interact with are of a certain character and so we offer our families a discounted way to anonymously conduct background check upon those who they are matched with. NOTE: No user will receive personal or financial information of another, but only a result indicating whether the proposed parent whom you are being matched with has been reported as having violence or reports of violence or other crimes.</p>
                        <p>Although we do not make it mandatory for parents to give the needed details for conducting such a search, if a family whom you are matched with attempts to conduct background check upon you and you have not provided sufficient information to conduct such, they will be notified that you have not provided such and can then make the choice to forgo the background check or send us a request to ask you provide such.</p><br/><br/>
                        <button type="submit" className="btn btn-default btn-block bg-clearance-btn">CLICK TO HERE TO AUTHORIZE BACKGROUND CLEARANCE</button>
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
    </div>
    )
};

export default safety;