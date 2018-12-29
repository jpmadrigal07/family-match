import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '.././App.css';
import Navigation2 from '.././components/partials/Navigation2';
import Footer from '.././components/partials/Footer';
import MessageContent from '.././components/content/Message';

class Message extends Component {
  render() {
    return (
        <div>
          <Navigation2 />
          <MessageContent />
          <hr/>
          <Footer />
        </div>
    );
  }
}

export default Message;
