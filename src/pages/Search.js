import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '.././App.css';
import Navigation3 from '.././components/partials/Navigation3';
import Footer from '.././components/partials/Footer';
import SearchContent from '.././components/content/Search';

class Search extends Component {
  render() {
    return (
        <div>
          <Navigation3 />
          <SearchContent />
          <hr/>
          <Footer />
        </div>
    );
  }
}

export default Search;
