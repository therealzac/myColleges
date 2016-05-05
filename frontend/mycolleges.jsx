const React = require('react'),
      ReactDOM = require('react-dom'),
      Router = require('react-router').Router,
      Route = require('react-router').Route,
      IndexRoute = require('react-router').IndexRoute,
      hashHistory = require('react-router').hashHistory;

const App = require('./components/app.jsx'),
      Landing = require('./components/landing.jsx'),
      SignUp = require('./components/signup.jsx'),
      Login = require('./components/login.jsx'),
      Dashboard = require('./components/dashboard.jsx');

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Landing}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/login" component={Login}/>
    <Route path="/dashboard" component={Dashboard}/>
  </Route>
)

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('root')
  );
});
