import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '.././App.css';
import Navigation3 from '.././components/partials/Navigation3';
import Footer from '.././components/partials/Footer';
import EditMatchDataContent from '.././components/content/EditMatchData';

class EditMatchData extends Component {
  render() {
    return (
        <div>
          <Navigation3 />
          <EditMatchDataContent />
          <hr/>
          <Footer />
        </div>
    );
  }
}

export default EditMatchData;
