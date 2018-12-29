import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '.././App.css';
import Navigation3 from '.././components/partials/Navigation3';
import Footer from '.././components/partials/Footer';
import GetStartedContent from '.././components/content/GetStarted';

class GetStarted extends Component {
  render() {
    return (
        <div>
          <Navigation3 />
          <GetStartedContent />
          <hr/>
          <Footer />
        </div>
    );
  }
}

export default GetStarted;
