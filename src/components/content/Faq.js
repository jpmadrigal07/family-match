import React from 'react';
import SidebarAds from '../../assets/sidebar-ads.jpg';

const faq = () => {
    return (
    <div>
        <header class="header-image-faq">
            <div class="headline-other">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="call-to-action-other">
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;FAQ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="container">
            <div id="faq-content">
                <div class="row">
                    <div class="col-md-9">
                    <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                          <div class="panel-heading">
                            <h4 data-toggle="collapse" data-parent="#accordion" href="#collapse1" class="panel-title expand">
                               <div class="right-arrow pull-right">+</div>
                              <a href="#blank">Can I browse members for Free?</a>
                            </h4>
                          </div>
                          <div id="collapse1" class="panel-collapse collapse in">
                            <div class="panel-body">In order to browse our members you can register as a FREE member by creating a personal profile. All our members are pre-screened through Family watchdog to ensure that our members are safe from registered sexual offenders.</div>
                          </div>
                        </div>
                        <div class="panel panel-default">
                          <div class="panel-heading">
                            <h4 data-toggle="collapse" data-parent="#accordion" href="#collapse2" class="panel-title expand">
                                <div class="right-arrow pull-right">+</div>
                              <a href="#blank">I am a registered member but the system doesn't recognize me. What do I do?</a>
                            </h4>
                          </div>
                          <div id="collapse2" class="panel-collapse collapse">
                            <div class="panel-body">Please make sure you have validated your email address that was sent to the email account that you signed up with. Also, please check your SPAM folder for our confirmation email.</div>
                          </div>
                        </div>
                        <div class="panel panel-default">
                          <div class="panel-heading">
                            <h4 data-toggle="collapse" data-parent="#accordion" href="#collapse3" class="panel-title expand">
                                <div class="right-arrow pull-right">+</div>
                              <a href="#blank">How can I change my username?</a>
                            </h4>
                          </div>
                          <div id="collapse3" class="panel-collapse collapse">
                            <div class="panel-body">Login to your profile then click the link for Edit Profile. From this page you can make changes to your username in your account settings.</div>
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

export default faq;