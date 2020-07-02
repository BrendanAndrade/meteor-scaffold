import { AccountsTemplates } from 'meteor/useraccounts:core';

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/signin',
  template: 'login',
  redirect: '/',
});

AccountsTemplates.configureRoute('signUp', {
  name: 'signup',
  path: '/signup',
  template: 'login',
  redirect: '/',
});

AccountsTemplates.configureRoute('forgotPwd', {
  template: 'login',
});


AccountsTemplates.configureRoute('resetPwd', {
  template: 'login',
});


AccountsTemplates.configureRoute('verifyEmail', {
  template: 'login',
});

AccountsTemplates.configureRoute('resendVerificationEmail', {
  template: 'login',
});