const React = require('react'),
      LinkedStateMixin = require('react-addons-linked-state-mixin'),
      ApiUtil = require('../util/apiUtil.js'),
      SessionStore = require('../stores/session.js');

const Login = React.createClass({
  contextTypes: {router: React.PropTypes.object.isRequired},

  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return { username: "", password: "" }
  },

  componentDidMount: function () {
    console.log(this.props)
    if (this.props.user) { this.context.router.push('/dashboard') }
    this.sessionListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  _onChange: function () {
    const session = SessionStore.getSession();
    if (session.user.username) { this.context.router.push('/dashboard') }
  },

  login: function () {
    const user = {username: this.state.username, password: this.state.password }
    ApiUtil.login(user);
  },

  goToSignup: function () {
    this.context.router.push('/signup');
  },

  render: function () {
    return (
      <div className="middle-box text-center loginscreen  animated fadeInDown">
          <div>
              <div>

                  <h1 className="logo-name">mC</h1>
              </div>
              <h3>Welcome back.</h3>
              <p>{this.state.message}</p>
              <form className="m-t" role="form">
                  <div className="form-group">
                      <input type="text" name="user[username]" className="form-control" placeholder="Username" required="" valueLink={this.linkState("username")}/>
                  </div>
                  <div className="form-group">
                      <input type="password" name="user[password]" className="form-control" placeholder="Password" required="" valueLink={this.linkState("password")}/>
                  </div>
                  <button className="btn btn-primary block full-width m-b" onClick={this.login}>Login</button>

                  <a href="#"><small>Forgot password?</small></a>
                  <p className="text-muted text-center"><small>Do not have an account?</small></p>
                  <a className="btn btn-sm btn-white btn-block" onClick={this.goToSignup}>Create an account</a>
              </form>
          </div>
      </div>
    )
  }
});

module.exports = Login;
