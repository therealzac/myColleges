const Store = require('flux/utils').Store,
      AppDispatcher = require('../dispatcher/appDispatcher.js'),
      SessionConstants = require('../constants/sessionConstants.js');

const SessionStore = new Store(AppDispatcher);

var _session = {};

SessionStore.__onDispatch = function (payload) {
  console.log(payload);
  switch (payload.actionType) {
    case SessionConstants.SESSION_RECEIVED:
      setSession(payload.session);
      SessionStore.__emitChange();
      break;

    case SessionConstants.SESSION_DESTROYED:
      clearSession();
      SessionStore.__emitChange();
      break;

    case SessionConstants.INVALID_ENTRY:
      invalidEntry(payload.error);
      SessionStore.__emitChange();
      break;

    case SessionConstants.APPLICATION_RECEIVED:
      logApplication(payload.application);
      SessionStore.__emitChange();
      break;
  }
}

const setSession = function (session) {
  _session = session;
}

const clearSession = function () {
  _session = {};
}

const logApplication = function (application) {
  _session.applications.push(application);
}

const invalidEntry = function (error) {
  _session.message = error.responseJSON[0];
}

SessionStore.getSession = function () {
  return _session;
};


module.exports = SessionStore;
