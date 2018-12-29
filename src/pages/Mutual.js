import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '.././App.css';
import Navigation3 from '.././components/partials/Navigation3';
import Footer from '.././components/partials/Footer';
import MutualContent from '.././components/content/Mutual';

class Mutual extends Component {
  render() {
    return (
        <div>
          <Navigation3 />
          <MutualContent />
          <hr/>
          <Footer />
        </div>
    );
  }
}

export default Mutual;
