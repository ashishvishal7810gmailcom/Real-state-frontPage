import React, { Component } from 'react';
import Feed from './FeedComponent';
import Header from './HeaderComponent/HeaderComponent';
import Footer from './FooterComponent';
import ComingSoon from './ComingSoon';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
class Main extends Component {

  render() {

    const FeedPage = () => {
      return(
        <Feed />
      );
    }

    const ComingSoonPage = () => {
      return (
        <ComingSoon />
      );
    }

    return (
      <div>
        <Header/>   
        <Switch>
          <Route path="/feed" component={FeedPage} />
          <Route exact path="/comingsoon" component={ComingSoonPage} />
          <Redirect to="/feed" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
