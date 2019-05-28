import React from "react";

const Section = props => {
  return (
    <>
      <div>
        <div
          className="uk-card uk-card-body"
          style={{
            border: `4px solid ${props.color}`,
            borderRadius: 6,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 5
          }}
          uk-toggle={`target: #section-modal-${props.color}`}
          type="button"
        >
          <h1
            className="uk-text-lead uk-text-capitalize"
            style={{ margin: "0 0 -16px", padding: 0 }}
          >
            {props.color}
          </h1>
          <p
            className="uk-text-lead"
            style={{ margin: "0 0 -12px", padding: 0, fontSize: 48 }}
          >
            4
          </p>
          <p
            className="uk-text-meta uk-text-uppercase"
            style={{ margin: "0 0 8px", padding: 0 }}
          >
            open beds
          </p>
          <button className="uk-button uk-button-small uk-button-danger">
            Section In
          </button>
        </div>
      </div>
      <div id={`section-modal-${props.color}`} uk-modal="true">
        <div
          className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical"
          style={{ padding: 10 }}
        >
          <div className="uk-modal-header uk-text-center">
            <h2 className="uk-modal-title">{props.color} Section Options</h2>
          </div>
          <div className="uk-modal-body">
            <button className="uk-button uk-button-primary">
              Section is In
            </button>
          </div>
          <div
            className="uk-modal-footer"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <button className="uk-button uk-button-primary uk-button-large uk-width-1-1">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
