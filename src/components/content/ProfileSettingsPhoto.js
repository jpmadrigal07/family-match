import React from 'react';

const profilesettingsphoto = () => {
    return (
    <div>
    <div class="container">
        <div id="profile-settings">
            <div class="row profile">
                <div class="col-md-3">
                    <div class="profile-sidebar">
                        <div class="profile-userpic">
                            <img src="http://z1035.com/wp-content/uploads/2018/03/Mark-Zuckerberg-FB-profile-pic-200x200.jpg?x90143" class="img-responsive" alt="pic"/>
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
                        <div class="profile-usermenu">
                            <ul class="nav">
                            <li>
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
                                <li className="active">
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
                <div class="col-md-9">
                    <div class="profile-content">
                        <div class="row">
                            <div class="col-md-12">
                                <p id="header-title">Photo</p>
                                <p id="header-sub-title">Add a nice photo of yourself or your family for your profile.</p>
                            </div>
                        </div>
                        <div class="row">
                                <div class="col-md-8 col-md-offset-2">
                                        <div class="row">
                                            <div id="old-dp">
                                                <div class="col-md-6">
                                                        <img src="http://www.nrclc.com/wp-content/uploads/2015/07/6.-mark-zuckerberg-150x150.jpg" class="img-responsive" alt=""/>
                                                        <a href="#blank">Use as DP</a> • <a href="#blank">Delete</a>
                                                        
                                                </div>
                                                <div class="col-md-6">
                                                        <img src="https://starschanges.com/wp-content/uploads/2016/07/mark-zuckerberg-family-8-150x150.jpg" class="img-responsive" alt=""/>
                                                        <a href="#blank">Use as DP</a> • <a href="#blank">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <p id="image-upload-text">Image preview</p>
                                        <div id="image-upload">
                                            <div id="image-to-upload">
                                                <img src="http://z1035.com/wp-content/uploads/2018/03/Mark-Zuckerberg-FB-profile-pic-200x200.jpg?x90143" class="img-responsive" alt=""/>
                                            </div>
                                        </div>
                                        <div class="file-upload">
                                                <div class="file-select">
                                                  <div class="file-select-button" id="fileName">Choose File</div>
                                                  <div class="file-select-name" id="noFile">No file chosen...</div> 
                                                  <input type="file" name="chooseFile" id="chooseFile"/>
                                                </div>
                                              </div>
                                              <div class="form-group">
                                                    <button type="submit" class="btn btn-default btn-block profile-settings-btn">Save</button>
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

export default profilesettingsphoto;