import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/jquery/dist/jquery.min.js';
import $ from 'jquery';
import 'jquery/src/jquery';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '.././App.css';
import Navigation1 from '.././components/partials/Navigation1';
import Footer from '.././components/partials/Footer';       
import HomeContent from '.././components/content/Home';
import {withRouter} from 'react-router-dom';

class Home extends Component {

  componentDidMount = () => {
    const currentPath = this.props.location.pathname;
    console.log(this.props.location.pathname);
    if(currentPath === "/") {
    $(window).on('scroll', function (e) {
      var passed_animation_bg = false;
      var img_top = 0;
      var width = window.innerWidth;
      if ($(window).scrollTop() >= ($(".call-to-action-home").offset().top)) {
          if (!passed_animation_bg && img_top === 0) {
              img_top++;
              $("#centerimage").delay( 0 ).animate({
                  top: '140px',
                  opacity: '1'
              }, 500);
              $("#topimage").delay( 400 ).animate({
                  top: '5%',
                  opacity: '1'
              }, 500);
              $("#text1").delay( 800 ).animate({
                  top: '70px',
                  opacity: '1'
              }, 500);
              $("#arrow1").delay( 800 ).animate({
                  top: '100px',
                  opacity: '1'
              }, 500);
              $("#leftimg").delay( 800 ).animate({
                  top: '180px',
                  opacity: '1'
              }, 500);
              $("#text2").delay( 1200 ).animate({
                  top: '70px',
                  opacity: '1'
              }, 500);
              $("#arrow2").delay( 1200 ).animate({
                  top: '100px',
                  opacity: '1'
              }, 500);
              $("#rightimg").delay( 1200 ).animate({
                  top: '180px',
                  opacity: '1'
              }, 500);
              if(width > 992) {
                  $("#downleftright1").delay( 2000 ).animate({
                      top: '470px',
                      opacity: '1'
                  }, 500);
                  $("#downleftright2").delay( 2000 ).animate({
                      top: '470px',
                      opacity: '1'
                  }, 500);
                  $("#downleftright3").delay( 1600 ).animate({
                      top: '430px',
                      opacity: '1'
                  }, 500);
                  $("#combine").delay( 2600 ).animate({
                      top: '530px',
                      opacity: '1'
                  }, 500);
              }
              if(width < 992) {
                  $("#downleftright1").delay( 2000 ).animate({
                      top: '420px',
                      opacity: '1'
                  }, 500);
                  $("#downleftright2").delay( 2000 ).animate({
                      top: '420px',
                      opacity: '1'
                  }, 500);
                  $("#downleftright3").delay( 1600 ).animate({
                      top: '370px',
                      opacity: '1'
                  }, 500);
                  $("#combine").delay( 2600 ).animate({
                      top: '470px',
                      opacity: '1'
                  }, 500);
              }
          }
      }
      
  });
}

  $(document).ready(function () {
      
      var currentScrollTop = 0,
          navbar = $('.home-navbar-2');

      $(window).scroll(function () {
          var a = $(window).scrollTop();
          var b = navbar.height();
          var c;
          
          currentScrollTop = a;

          if(a > b) {
              navbar.addClass("scrollUp");
          } else {
              navbar.removeClass("scrollUp");
          }
          c = currentScrollTop;
      });
      
      });
  }

  render() {
    return (
        <div>
          <Navigation1 />
          <HomeContent />
          <hr/>
          <Footer />
        </div>
    );
  }
}

export default withRouter(Home);
