const React = require('react'),
      LinkedStateMixin = require('react-addons-linked-state-mixin'),
      SessionStore = require('../stores/session.js'),
      ApiUtil = require('../util/apiUtil.js');


const SignUp = React.createClass({
  contextTypes: {router: React.PropTypes.object.isRequired},

  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {
      username: "",
      password: "",
      confirmPassword: ""
    }
  },

  _onChange: function () {
    const session = SessionStore.getSession();

    if (session.user.username) {
      this.context.router.push('/dashboard');
    } else if (session.message) {
      this.setState({message: session.message});
    }
  },

  componentDidMount: function () {
    if (this.props.user) { this.context.router.push('/dashboard') }
    this.sessionListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  signup: function (e) {
    e.preventDefault();
    if (this.state.password.length < 6) {

      this.setState({
        message: "Password must be at least 6 characters.",
        password: "",
        confirmPassword: ""
      });

    } else if (this.state.password === this.state.confirmPassword) {

      const user = {
        username: this.state.username,
        password: this.state.password
      }

      ApiUtil.signup(user);

    } else {

      this.setState({
        message: "Passwords didn't match.",
        password: "",
        confirmPassword: ""
      });

    }
  },


  render: function () {
    return (
      <div className="middle-box text-center loginscreen  animated fadeInDown">
          <div>

              <h1 className="logo-name">mC</h1>

          </div>
          <h3>Sign Up with myCOLLEGES</h3>
          <p style={{color: "red"}}>{this.state.message}</p>
          <form className="m-t" role="form">
              <div className="form-group">
                  <input
                    type="text"
                    name="user[username]"
                    className="form-control"
                    placeholder="Username"
                    valueLink={this.linkState("username")}
                  />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="user[password]"
                  className="form-control"
                  placeholder="Password"
                  valueLink={this.linkState("password")}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  valueLink={this.linkState("confirmPassword")}
                />
              </div>

              <button
                onClick={this.signup}
                className="btn btn-primary block full-width m-b">
                Sign Up
              </button>

              <p className="text-muted text-center"><small>
                Already have an account?
              </small></p>

              <a onClick={this.goToLogin}>Log In</a>
          </form>
      </div>
    )
  }
});

module.exports = SignUp;
