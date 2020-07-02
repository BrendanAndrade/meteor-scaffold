import { AccountsTemplates } from 'meteor/useraccounts:core';
import { Roles } from 'meteor/alanning:roles';

AccountsTemplates.configure({

  // defaultTemplate: 'Auth_page',
  defaultLayout: 'login',
  // defaultContentRegion: 'main',
  // defaultLayoutRegions: {},
  enablePasswordChange: true,
  sendVerificationEmail: true,
  showForgotPasswordLink: true,
  showLabels: false,
  forbidClientAccountCreation: false,

  /*
  postSignUpHook: (userId, info) => {
    //Roles.addUsersToRoles(userId, ['user']);
  },
  */
});