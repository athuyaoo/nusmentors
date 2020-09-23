import React from "react";
import { Route, Switch } from "react-router-dom";
import CreateRequest from "pages/CreateRequest";
import Dashboard from "pages/Dashboard";
import Requests from "pages/Requests";
import AcceptRequest from "pages/AcceptRequest";
import Mentees from "pages/Mentees";
import Mentors from "pages/Mentors";
import MentorContact from "pages/MentorContact";
import MenteeContact from "pages/MenteeContact";

const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/requests/create" component={CreateRequest} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/requests" component={Requests} />
      <Route exact path="/accept-request/:id" component={AcceptRequest} />
      <Route exact path="/mentees" component={Mentees} />
      <Route exact path="/mentors" component={Mentors} />
      <Route exact path="/mentors/:id" component={MentorContact} />
      <Route exact path="/mentees/:id" component={MenteeContact} />
    </Switch>
  );
};

export default AuthRouter;
