const React = require('react'),
      TopNav = require('./topnav.jsx'),
      Footer = require('./footer.jsx'),
      apiUtil = require('../util/apiUtil.js'),
      SessionStore = require('../stores/session.js');

const App = React.createClass({
  getInitialState: function () {
    return {};
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._onChange);
    apiUtil.fetchSession();
  },

  _onChange: function () {
    const session = SessionStore.getSession();
    this.setState(session);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  render: function () {
    return (
      <div>
        <TopNav session={this.state}/>
          {this.props.children}
        <Footer/>
      </div>
    )
  }
})

module.exports = App;
