import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from "../pages/index";
import Overview from "../pages/overview";
import Sections from "../pages/sections";
import Seats from "../pages/seats";

const Routes = props => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/overview" component={Overview} />
    <Route path="/sections" component={Sections} />
    <Route path="/seats" component={Seats} />
  </Switch>
);

export default Routes;
