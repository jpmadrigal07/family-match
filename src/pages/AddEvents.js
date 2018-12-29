import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '.././App.css';
import Navigation2 from '.././components/partials/Navigation2';
import Footer from '.././components/partials/Footer';
import AddEventsContent from '.././components/content/AddEvents';
import $ from 'jquery';
import 'bootstrap-datepicker';



class AddEvents extends Component {

  componentDidMount = () => {
    $(document).ready(function() {
      $('#eventDate1')
      .datepicker({
        format: 'mm/dd/yyyy'
      });
    });
    $(document).ready(function() {
      $('#eventDate2')
      .datepicker({
        format: 'mm/dd/yyyy'
      });
    });
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
          <Navigation2 />
          <AddEventsContent />
          <hr/>
          <Footer />
        </div>
    );
  }
}

export default AddEvents;
