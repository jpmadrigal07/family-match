import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Article from './pages/Article';
import Blog from './pages/Blog';
import Faq from './pages/Faq';
import GetStarted from './pages/GetStarted';
import LoginRegister from './pages/LoginRegister';
import Pricing from './pages/Pricing';
import MatchData from './pages/MatchData';
import Home from './pages/Home';
import AddEvents from './pages/AddEvents';
import Disclosure from './pages/Disclosure';
import EventLists from './pages/EventLists';
import Safety from './pages/Safety';
import Message from './pages/Message';
import Mutual from './pages/Mutual';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProfileSettingsProfile from './pages/ProfileSettingsProfile';
import ProfileSettingsPhoto from './pages/ProfileSettingsPhoto';
import ProfileSettingsAboutMe from './pages/ProfileSettingsAboutMe';
import MainProfileProfile from './pages/MainProfileProfile';
import MainProfileAboutMe from './pages/MainProfileAboutMe';
import MainProfileMatchData from './pages/MainProfileMatchData';
import ProfileSettingsMatchData from './pages/ProfileSettingsMatchData';
import ProfileSettingsViews from './pages/ProfileSettingsViews';
import ProfileSettingsLikes from './pages/ProfileSettingsLikes';
import ProfileSettingsFavorites from './pages/ProfileSettingsFavorites';
import ProfileSettingsWinks from './pages/ProfileSettingsWinks';
import Search from './pages/Search';
import Reverse from './pages/Reverse';
import EditMatchData from './pages/EditMatchData';

class App extends Component {

  render() {
    return (
      
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/article" component={Article} />
          <Route path="/blog" component={Blog} />
          <Route path="/faq" component={Faq} />
          <Route path="/getstarted" component={GetStarted} />
          <Route path="/loginregister" component={LoginRegister} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/matchdata" component={MatchData} />
          <Route path="/editmatchdata" component={EditMatchData} />
          <Route path="/addevents" component={AddEvents} />
          <Route path="/disclosure" component={Disclosure} />
          <Route path="/eventlists" component={EventLists} />
          <Route path="/safety" component={Safety} />
          <Route path="/message" component={Message} />
          <Route path="/mutual" component={Mutual} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/mainprofileprofile" component={MainProfileProfile} />
          <Route path="/mainprofileaboutme" component={MainProfileAboutMe} />
          <Route path="/mainprofilematchdata" component={MainProfileMatchData} />
          <Route path="/profilesettingsprofile" component={ProfileSettingsProfile} />
          <Route path="/profilesettingsaboutme" component={ProfileSettingsAboutMe} />
          <Route path="/profilesettingsmatchdata" component={ProfileSettingsMatchData} />
          <Route path="/profilesettingsphoto" component={ProfileSettingsPhoto} />
          <Route path="/profilesettingsviews" component={ProfileSettingsViews} />
          <Route path="/profilesettingslikes" component={ProfileSettingsLikes} />
          <Route path="/profilesettingsfavorites" component={ProfileSettingsFavorites} />
          <Route path="/profilesettingswinks" component={ProfileSettingsWinks} />
          <Route path="/search" component={Search} />
          <Route path="/reverse" component={Reverse} />
        </div>
      </Router>
    );
  }
}

export default App;
