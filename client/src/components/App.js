import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import DefaultLayout from "./DefaultLayout";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import PageNotFound from "./PageNotFound";
import ChallengeNewCustomList from "./challenges/new/customList/ChallengeNewCustomList";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Switch>
              <DefaultLayout exact path="/" component={Landing} />
              <DefaultLayout exact path="/challenges" component={Dashboard} />
              <DefaultLayout
                exact
                path="/challenges/custom"
                component={ChallengeNewCustomList}
              />
              <DefaultLayout component={PageNotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
