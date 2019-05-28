import React, { Component } from "react";
import Section from "./section";

export default class Seating extends Component {
  state = {};

  render() {
    return (
      <div
        style={{
          height: "calc(100vh - 120px)",
          position: "relative",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div
          uk-grid="true"
          className="uk-grid-small uk-child-width-expand uk-grid-match uk-text-center"
          style={{ flexGrow: 1 }}
        >
          <Section color="Gold" />
          <Section color="Green" />
          <Section color="Silver" />
          <Section color="Black" />
        </div>
        <div
          uk-grid="true"
          className="uk-grid-small uk-child-width-expand uk-grid-match uk-text-center"
          style={{ flexGrow: 1 }}
        >
          <Section color="White" />
          <Section color="Red" />
          <Section color="Blue" />
          <Section color="Purple" />
        </div>
        <div
          uk-grid="true"
          className="uk-grid-small uk-child-width-expand uk-grid-match uk-text-center"
          style={{ flexGrow: 1 }}
        >
          <Section color="Orange" />
          <Section color="Yellow" />
          <Section color="Brown" />
          <Section color="Pink" />
        </div>
      </div>
    );
  }
}
