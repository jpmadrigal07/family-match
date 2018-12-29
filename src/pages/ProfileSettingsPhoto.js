import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '.././App.css';
import Navigation3 from '.././components/partials/Navigation3';
import Footer from '.././components/partials/Footer';
import ProfileSettingsPhotoContent from '.././components/content/ProfileSettingsPhoto';
import $ from 'jquery';

class ProfileSettingsPhoto extends Component {

  componentDidMount = () => {
    $('#chooseFile').bind('change', function () {
          var filename = $("#chooseFile").val();
          if (/^\s*$/.test(filename)) {
              $(".file-upload").removeClass('active');
              $("#noFile").text("No file chosen..."); 
          }
          else {
              $(".file-upload").addClass('active');
              $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
          }
      });
  }

  render() {
    return (
        <div>
          <Navigation3 />
          <ProfileSettingsPhotoContent />
          <hr/>
          <Footer />
        </div>
    );
  }
}

export default ProfileSettingsPhoto;
