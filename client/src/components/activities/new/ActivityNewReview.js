import _ from "lodash";
import React, { Component } from "react";
import { reset } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import activityDetailFields from "../steps/activityDetails/activityDetailsFields";
import {
  submitActivity,
  clearMountainSearch,
  clearMountainSelection
} from "../../../actions";

class ActivityReview extends Component {
  renderActivityDetails = () =>
    _.map(activityDetailFields, ({ label, name }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>{this.props.activityDetails[name]}</div>
        </div>
      );
    });

  renderMountains = () =>
    _.map(this.props.mountains, ({ _id, name }) => {
      return <div key={_id}>{name}</div>;
    });

  render() {
    return (
      <div>
        <h5>Please confirm your entries</h5>
        {this.renderActivityDetails()}
        <p>Mountains</p>
        {this.renderMountains()}
        <button
          className="grey btn-flat white-text"
          onClick={this.props.onCancel}
        >
          Back
        </button>
        <button
          className="grey btn-flat white-text right"
          onClick={() => {
            // this.props.submitActivity(
            //   this.props.activityDetails,
            //   this.props.mountains,
            //   this.props.history
            // );
            //console.log(this.props, "this.props");
            this.props.clearMountainSearch([]);
            this.props.clearMountainSelection([]);
            // this.props.dispatch(reset("activityDetails"));
            // this.props.dispatch(reset("mountainSearch"));
          }}
        >
          Save
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activityDetails: state.form.activityDetails.values || [],
    mountains: state.mountainSelection || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    submitActivity,
    clearMountainSearch,
    clearMountainSelection
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ActivityReview));
