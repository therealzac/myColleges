const AppDispatcher = require('../dispatcher/appDispatcher.js'),
      SessionStore = require('../stores/session.js'),
      SessionConstants = require('../constants/sessionConstants.js');

const ApiActions = {
  receiveSession: function (session) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.SESSION_RECEIVED,
      session: session
    });
  },

  logout: function () {
    AppDispatcher.dispatch({
      actionType: SessionConstants.SESSION_DESTROYED
    });
  },

  invalidEntry: function (error) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.INVALID_ENTRY,
      error: error
    })
  }
}

module.exports = ApiActions;
