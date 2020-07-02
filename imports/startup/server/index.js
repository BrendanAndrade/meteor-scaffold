// Set up some rate limiting and other important security settings.
import './register-api.js';
import './security.js';
import './accounts/index.js';
import './createMongoIndexes.js';


import '../../config/useraccounts-configuration.js';
import '../../config/server/useraccounts-config-server.js';
import '../../config/accounttemplates-routes.js';

import {initializeRoles} from '../../config/server/init-roles.js';


import { Meteor } from 'meteor/meteor';

Meteor.startup(function() {

  //Setup mail smtp connection variable
  process.env.MAIL_URL = Meteor.settings.mailgun_url;  

  initializeRoles();

});
