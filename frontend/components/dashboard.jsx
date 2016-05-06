const React = require('react'),
      CollegeList = require('./collegelist.jsx'),
      EditProfile = require('./editProfile.jsx'),
      SessionStore = require('../stores/session.js');

const Dashboard = React.createClass({
  contextTypes: {router: React.PropTypes.object.isRequired},

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  _onChange: function () {
    const session = SessionStore.getSession();
    console.log(session);
    if (!session.username) { this.context.router.push('/') }
  },

  render: function () {
    return (
      <div>

      </div>
    )
  }
});

module.exports = Dashboard;
