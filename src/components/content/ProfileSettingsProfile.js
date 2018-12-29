import React from 'react';
import AlertSuccess from '../partials/AlertSuccess';
import AlertFailed from '../partials/AlertFailed';

const profilesettingsprofile = () => {
    return (
    <div>
    <div className="container">
    <div id="profile-settings">
            <div className="row profile">
            <AlertSuccess />
            <AlertFailed />
                <div className="col-md-3">
                    <div className="profile-sidebar">
                        <div className="profile-userpic">
                            <img src="http://z1035.com/wp-content/uploads/2018/03/Mark-Zuckerberg-FB-profile-pic-200x200.jpg?x90143" className="img-responsive" alt=""/>
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
                                <li className="active">
                                    <a href="#">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        Profile</a>
                                </li>
                                <li>
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
                                <p id="header-title">Personal</p>
                                <p id="header-sub-title">Information about yourself.</p>
                            </div>
                        </div>
                        <div className="row">
                                <div className="col-md-6">
                                        <div className="form-group">
                                                <label className="control-label">Full Name</label>
                                                <input type="text" className="form-control prof-settings-input" placeholder="" value="John Doe"/>
                                            </div>
                                </div>
                                <div className="col-md-6">
                                        <div className="form-group">
                                                <label className="control-label">Email</label>
                                                <input type="text" className="form-control prof-settings-input" placeholder="" value="john@doe.com"/>
                                            </div>
                                </div>
                                <div className="col-md-6">
                                        <div className="form-group">
                                                <label className="control-label">Location</label>
                                                <input type="text" className="form-control prof-settings-input" placeholder="" value="Nashville, TN"/>
                                            </div>
                                </div>
                                <div className="col-md-6">
                                        <div className="form-group">
                                                <label className="control-label">Birthday</label>
                                                <div className="input-group date" id="birthDayDatePicker">
                                                  <input type="text" className="form-control prof-settings-input-2" name="date" autocomplete="off" value="10/31/1990" />
                                                  <span className="input-group-addon add-on"><span className="glyphicon glyphicon-calendar"></span></span>
                                                </div>
                                              </div>
                                </div>
                                <div className="col-md-6">
                                        <div className="form-group">
                                                <label className="control-label">Gender</label>
                                                <select className="form-control prof-settings-input" id="add-employee-gender">
                                                    <option value=""></option>
                                                    <option value="1" selected>Male</option>
                                                    <option value="2">Female</option>
                                                </select>
                                            </div>
                                </div>
                                <div className="col-md-6">
                                        <div className="form-group">
                                                <label className="control-label">Seeking</label>
                                                <select className="form-control prof-settings-input" id="add-employee-gender">
                                                    <option value=""></option>
                                                    <option value="1">Male</option>
                                                    <option value="2" selected>Female</option>
                                                </select>
                                            </div>
                                </div>
                                <div className="col-md-12">
                                        <div className="form-group">
                                        <button type="submit" className="btn btn-default btn-block profile-settings-btn">Update</button>
                                        </div>
                                </div>
                        </div>
                        <br/>
                        <div className="row">
                                <div className="col-md-12">
                                    <p id="header-title">Family Member</p>
                                    <p id="header-sub-title">Information about your family</p>
                                </div>
                            </div>
                        <div className="row">
                                <div className="col-md-4">
     
                                        <div className="form-group">
                                                <label className="control-label">Full Name</label>
                                                <input type="text" className="form-control prof-settings-input" placeholder=""/>
                                            </div>

                                        <div className="form-group">
                                                <label className="control-label">Relation</label>
                                                <select className="form-control prof-settings-input" id="add-employee-gender">
                                                    <option value=""></option>
                                                    <option value="1">Father</option>
                                                    <option value="2">Mother</option>
                                                    <option value="1">Brother</option>
                                                    <option value="2">Sister</option>
                                                    <option value="1">Grandfather</option>
                                                    <option value="2">Grandmother</option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                    <button type="submit" className="btn btn-default btn-block profile-settings-btn">Add</button>
                                                    </div>

                                </div>
                                <div className="col-md-8">
                                        <table className="table table-striped">
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

export default profilesettingsprofile;