const ApiActions = require('../actions/apiActions.js');

const ApiUtil = {
  fetchSession: function () {
    $.ajax({
      url: "session",
      method: "GET",
      success: function (session) {
        ApiActions.receiveSession(session);
      },
      error: function (error) {
        console.log(error);
      }
    });
  },

  signup: function (user) {
    const self = this;
    $.ajax({
      url: "api/users",
      method: "POST",
      data: {user: user},
      success: function (user) {
        ApiActions.receiveSession(user);
      },
      error: function (error) {
        ApiActions.invalidEntry(error);
      }
    });
  },

  login: function (user) {
    $.ajax({
      url: "session",
      method: "POST",
      data: {user: user},
      success: function(session){
        ApiActions.receiveSession(session);
      },
      error: function (error) {
        ApiActions.invalidEntry(error);
      }
    });
  },

  logout: function () {
    $.ajax({
      url: "session",
      method: "DELETE",
      success: function () {
        ApiActions.logout();
      },
      error: function (error) {
        ApiActions.invalidEntry(error);
      }
    });
  },

  createCollegeApplication: function (collegeApplication) {
    $.ajax({
      url: "api/college_applications",
      method: "POST",
      data: {college_application: collegeApplication},
      success: function (application) {
        ApiActions.receiveApplication(application);
      },
      error: function (error) {
        console.log(error);
      }
    });
  }
}

module.exports = ApiUtil;
