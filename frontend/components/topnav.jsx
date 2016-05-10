const React = require('react'),
      SessionStore = require('../stores/session.js'),
      ApiUtil = require('../util/apiUtil.js');

const TopNav = React.createClass({
  contextTypes: {router: React.PropTypes.object.isRequired},

  getInitialState: function () {
    return {
      signup: "block",
      login: "block",
      settings: "none",
      logout: "none"
    }
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  _onChange: function () {
    const session = SessionStore.getSession();

    if (session.user) {
      this.setState({
        signup: "none",
        login: "none",
        settings: "block",
        logout: "block"
      })
    } else {
      this.setState({
        signup: "block",
        login: "block",
        settings: "none",
        logout: "none"
      })
    }
  },

  handleClick: function (e) {
    e.preventDefault();
    const buttonText = e.currentTarget.innerHTML;

    switch (buttonText) {
      case "Sign Up":
        this.context.router.push('/signup');
        break;

      case "Login":
        this.context.router.push('/login');
        break;

      case "Profile":
        this.context.router.push('/dashboard');
        break;

      case "Log Out":
        ApiUtil.logout();
        this.context.router.push('/');
        break;

      case "myCOLLEGES":
        this.context.router.push('/');
        break;
    }
  },

  render: function () {
    return (
      <div className="navbar-wrapper" style={{marginBottom: "50px"}}>
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
              <div className="container">
                  <div className="navbar-header page-scroll">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                  </div>
                  <div id="navbar" className="navbar-collapse collapse">
                      <ul className="nav navbar-nav navbar-right">
                        <li style={{display: this.state.signup}}><a className="page-scroll" onClick={this.handleClick}>Sign Up</a></li>
                        <li style={{display: this.state.login}}><a className="page-scroll" onClick={this.handleClick}>Login</a></li>
                        <li style={{display: this.state.settings}}><a className="page-scroll" onClick={this.handleClick} >Profile</a></li>
                        <li style={{display: this.state.logout}}><a className="page-scroll" onClick={this.handleClick}>Log Out</a></li>
                      </ul>
                      <ul className="nav navbar-nav navbar-left">
                        <li><a className="page-scroll" onClick={this.handleClick} >myCOLLEGES</a></li>
                      </ul>

                  </div>
              </div>
          </nav>
      </div>
    )
  }
});

module.exports = TopNav;
