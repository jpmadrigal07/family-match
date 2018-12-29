import React from 'react';

const message = () => {
    return (
    <div>
    <div class="container">
        <div id="message">
            <div class="row">
                    <div class="col-sm-4">
                        <div id="sidebar-message">
                                <div class="row">
                                        <div class="col-sm-12">
                                                <div class="input-group">
                                                        <input type="text" class="form-control" id="chat-search" name="date" autocomplete="off" placeholder="Search..." />
                                                        <span class="input-group-addon add-on"><i class="fa fa-search" aria-hidden="true"></i></span>
                                                      </div>
                                        </div>
                                    </div>
                            <br/>
                            <a href="?msg=15" class="chatperson-active">asd
                              <span class="chatimg">
                                  <img src="https://get2growth.com/wp-content/uploads/2018/02/Elon-Musk-150x150.jpg" alt="pic" />
                              </span>
                              <div class="namechat">
                                  <div class="pname">Elon Musk</div>
                                  <div class="lastmsg">Do you want to see my new Tesla car?</div>
                              </div>
                          </a><a href="?msg=16" class="chatperson">asd
                              <span class="chatimg">
                                  <img src="https://www.financemagnates.com/wp-content/uploads/2018/05/bill_gates-150x150.jpg" alt="pic" />
                              </span>
                              <div class="namechat">
                                  <div class="pname-active">Bill Gates</div>
                                  <div class="lastmsg-active">Are you free today? I want to discuss to you on how we can help billions of people.</div>
                              </div>
                          </a><a href="?msg=17" class="chatperson">asd
                              <span class="chatimg">
                                  <img src="https://gbksoft.com/blog/wp-content/uploads/2018/09/GBK_Jeff_Bezos-150x150.png" alt="pic" />
                              </span>
                              <div class="namechat">
                                  <div class="pname">Jeff Bezos</div>
                                  <div class="lastmsg">Hi! How are you?</div>
                              </div>
                          </a>
                           </div>
                        </div>
                           <div class="col-sm-8">
                            <div class="chatbody">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <span id="other-person-name">Elon Musk <span id="delete-message"><a href="#blank">asd<i class="fa fa-trash"  aria-hidden="true"></i></a></span></span>
                                    </div>
                                </div>
                                <br/>

                                <span class="message-left">
                                    <span class="message-img-left">
                                        <img src="https://get2growth.com/wp-content/uploads/2018/02/Elon-Musk-150x150.jpg" alt="pic" />
                                    </span>
                                    <div class="main-message-left">
                                        <div class="timemsg">2:23 PM</div>
                                        <div class="lastmsg">Hi! How are you?</div>
                                    </div>
                                </span>

                                <span class="message-right">
                                    <div class="main-message-right">
                                        <div class="timemsg">2:23 PM</div>
                                        <div class="lastmsg">I'm ok now. How about you guys?</div>
                                    </div>
                                    <span class="message-img-right">
                                        <img src="http://z1035.com/wp-content/uploads/2018/03/Mark-Zuckerberg-FB-profile-pic-200x200.jpg?x90143" alt="pic" />
                                    </span>
                                </span>

                                <span class="message-left">
                                        <span class="message-img-left">
                                            <img src="https://get2growth.com/wp-content/uploads/2018/02/Elon-Musk-150x150.jpg" alt="pic" />
                                        </span>
                                        <div class="main-message-left">
                                            <div class="timemsg">2:23 PM</div>
                                            <div class="lastmsg">Do you want to see my new Tesla car?</div>
                                        </div>
                                    </span>
                            
                            </div>

                            <div class="row">
                                
                                        <div class="col-md-12">
                                                <div id="input-message">
                                                <div class="input-group">
                                                  <input type="text" class="form-control" id="chat-message" name="date" autocomplete="off" placeholder="Write message here..." />
                                                  <span class="input-group-btn"><button class="btn btn-primary btn-send"><i class="fa fa-send" aria-hidden="true"></i></button></span>
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

export default message;