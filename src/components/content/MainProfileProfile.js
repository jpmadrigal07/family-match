import React from 'react';

const mainprofileprofile = () => {
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
                            <li class="active">
                                <a href="#">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    Profile</a>
                            </li>
                            <li>
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
                                    <p id="header-title">Personal</p>
                                    <p id="header-sub-title">Information about this person.</p>
                                </div>
                            </div>
                            <div class="row">
                                    <div class="col-md-6">
                                            <div class="form-group">
                                                    <label class="control-label">Full Name</label><br/>
                                                    <span id="static-text">John Doe</span>
                                                </div>
                                    </div>
                                    <div class="col-md-6">
                                            <div class="form-group">
                                                    <label class="control-label">Email</label>
                                                    <br/>
                                                    <span id="static-text">john@doe.com</span>
                                                </div>
                                    </div>
                                    <div class="col-md-6">
                                            <div class="form-group">
                                                    <label class="control-label">Location</label>
                                                    <br/>
                                                    <span id="static-text">Nashville, TN</span>
                                                </div>
                                    </div>
                                    <div class="col-md-6">
                                            <div class="form-group">
                                                    <label class="control-label">Birthday</label>
                                                      <br/>
                                                    <span id="static-text">10/31/1990</span>

                                                  </div>
                                    </div>
                                    <div class="col-md-6">
                                            <div class="form-group">
                                                    <label class="control-label">Gender</label>
                                                    <br/>
                                                    <span id="static-text">Male</span>
                                                </div>
                                    </div>
                                    <div class="col-md-6">
                                            <div class="form-group">
                                                    <label class="control-label">Seeking</label>
                                                    <br/>
                                                    <span id="static-text">Female</span>
                                                </div>
                                    </div>
                            </div>
                            <br/>
                            <div class="row">
                                    <div class="col-md-12">
                                        <p id="header-title">Family Member</p>
                                        <p id="header-sub-title">Information about your family</p>
                                    </div>
                                </div>
                            <div class="row">
                                    <div class="col-md-12">
                                            <table class="table table-striped">
                                                    <thead>
                                                      <tr>
                                                        <th>Full Name</th>
                                                        <th>Relation</th>
                                                        <th>Action</th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      <tr>
                                                        <td>John Doe</td>
                                                        <td>Father</td>
                                                        <td><a href="#">Delete</a></td>
                                                      </tr>
                                                      <tr>
                                                        <td>Mary Doe</td>
                                                        <td>Brother</td>
                                                        <td><a href="#">Delete</a></td>
                                                      </tr>
                                                      <tr>
                                                        <td>Kaye Doe</td>
                                                        <td>Sister</td>
                                                        <td><a href="#">Delete</a></td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
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

export default mainprofileprofile;