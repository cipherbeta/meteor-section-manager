import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import App from "/imports/components/app";
import "/imports/styles/main.css";
import "uikit/dist/js/uikit.js";
import { BrowserRouter as Router } from "react-router-dom";

Meteor.startup(() => {
  render(
    <Router>
      <App />
    </Router>,
    document.getElementById("react-target")
  );
});
