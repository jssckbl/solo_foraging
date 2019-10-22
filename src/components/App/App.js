import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import AddPlant from '../AddPlant/AddPlant';
import EditPlant from '../EditPage/EditPage';

// import SpecificPlant from '../SpecificPlant/SpecificPlant';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              render={(navProps) => (
                <UserPage
                // match will allow the ability to read a wildcard number at the end of a url
                match={navProps.match}
                // history allows us to navigate backwards and forwards using react router (it's a property of react router)
                history={navProps.history}/>
              )}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/addplant"
              render={(navProps) => (
                <AddPlant
                match={navProps.match}
                history={navProps.history}/>
              )}
            />
            {/* <ProtectedRoute
              exact
              path="/specificplant/:id"
              component={SpecificPlant}
            /> */}
            <ProtectedRoute
              exact
              path="/edit"
              component={EditPlant}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default connect()(App);