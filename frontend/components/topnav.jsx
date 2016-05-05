const React = require('react');

const TopNav = React.createClass({
  goToSignup: function (e) {
    e.preventDefault();
    console.log(e.currentTarget.innerHTML);
  },

  render: function () {
    const signup = this.session ? "none" : "block",
          login = this.session ? "none" : "block",
          settings = this.session ? "block" : "none",
          logout = this.session ? "block" : "none";

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
                        <li style={{display: signup}}><a className="page-scroll" onClick={this.goToSignup}>Sign Up</a></li>
                        <li style={{display: login}}><a className="page-scroll" onClick={this.goToLogin}>Login</a></li>
                        <li style={{display: settings}}><a className="page-scroll" onClick={this.expandSettingsSubMenu} >Settings</a></li>
                        <li style={{display: logout}}><a className="page-scroll" onClick={this.logOut}>Log out</a></li>
                      </ul>
                      <ul className="nav navbar-nav navbar-left">
                        <li><a className="page-scroll" onClick={this.goToLanding} >MyColleges</a></li>
                      </ul>

                  </div>
              </div>
          </nav>
      </div>
    )
  }
});

module.exports = TopNav;
