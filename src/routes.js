import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import { AboutSite } from "./Pages/AboutSite";
import { ImageGallery } from "./Pages/ImageGallery";
import News from "./Pages/News";
import Contacts from "./Pages/Contacts";

export function AllRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutSite" component={AboutSite} />
        <Route exact path="/imageGallery" component={ImageGallery} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </Router>
  );
}
