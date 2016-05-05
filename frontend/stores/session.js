const Store = require('flux/utils').Store,
      AppDispatcher = require('../dispatcher/appDispatcher.js'),
      SessionConstants = require('../constants/sessionConstants.js');

const SessionStore = new Store(AppDispatcher);

module.exports = SessionStore;
