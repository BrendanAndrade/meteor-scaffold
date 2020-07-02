import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Session } from 'meteor/session';
import { Accounts } from 'meteor/accounts-base';


// Import to load these templates
import '../../ui/layouts/app-body.js';
import '../../ui/layouts/public-page.js';
import '../../ui/pages/root-redirector.js';
import '../../ui/pages/app-not-found.js';
import '../../ui/pages/login.js';
import '../../ui/pages/loading.js';


let exposed = FlowRouter.group({});


let loggedIn = FlowRouter.group({
  triggersEnter: [
    function() {
      if (!(Meteor.userId() || Meteor.loggingIn())) {
        route = FlowRouter.current();

        if (route.route.name != 'login') {
          Session.set('redirectAfterLogin', route.path);
        }

        FlowRouter.go('signin');
      }
      let onboarded = true;
      if (Meteor.userId() && !onboarded){
        FlowRouter.go('onboarding')
      }
    }],
  subscriptions: function(params, queryParams) {
    Meteor.subscribe('user.me');
  }
});

loggedIn.route('/', {
  name: 'App.home',
  action: function(params) {
    BlazeLayout.render('App_body', {main: 'home'});
  },
});

exposed.route('/external',{
  name:'Plans.purchase',
  action(params, queryParams){
    BlazeLayout.render('Public_page', { main: 'hello'});
  },
})

// the App_notFound template is used for unknown routes and missing lists
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

Accounts.onLogout(function() {
  setTimeout(() => {
    FlowRouter.go('/signin');
  }, 100);
});
