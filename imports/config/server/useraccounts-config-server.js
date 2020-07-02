import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

Accounts.emailTemplates.from = 'Team chime.ly <hello@chime.ly>';
Accounts.siteName = 'chime.ly';

Accounts._options.forbidClientAccountCreation = false;

Accounts.postSignUpHook = function(userId, info){
  Roles.addUsersToRoles(userId, ['team-admin', 'customer']);
};
