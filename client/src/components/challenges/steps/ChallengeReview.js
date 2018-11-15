import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../../actions";

const ChallengeReview = ({
  onCancel,
  formValues,
  submitChallenge,
  history
}) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        onClick={onCancel}
        className="yellow btn-flat darken-3 white-text"
      >
        Back
      </button>
      <button
        onClick={() => submitChallenge(formValues, history)}
        className="green btn-flat right white-text"
      >
        Save Challenge
        <i className="material-icons right">save</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.challengeForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(ChallengeReview));