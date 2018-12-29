import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '.././App.css';
import Navigation3 from '.././components/partials/Navigation3';
import AlertSuccess from '.././components/partials/AlertSuccess';
import Footer from '.././components/partials/Footer';
import ProfileSettingsProfileContent from '../components/content/ProfileSettingsProfile';
import 'bootstrap-datepicker';
import $ from 'jquery';

class ProfileSettingsProfile extends Component {

  componentDidMount = () => {
    $(document).ready(function() {
      $('#birthDayDatePicker')
      .datepicker({
        format: 'mm/dd/yyyy'
      });
    });
  }

  render() {
    return (
        <div>
          <Navigation3 />
          <ProfileSettingsProfileContent />
          <hr/>
          <Footer />
        </div>
    );
  }
}

export default ProfileSettingsProfile;
