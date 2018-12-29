import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '.././App.css';
import Navigation2 from '../components/partials/Navigation2';
import Footer from '../components/partials/Footer';
import SafetyContent from '.././components/content/Safety';

class Safety extends Component {
  render() {
    return (
        <div>
          <Navigation2 />
          <SafetyContent />
          <hr/>
          <Footer />
        </div>
    );
  }
}

export default Safety;
