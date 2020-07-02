import { Template } from 'meteor/templating';

import './hello.html';

Template.hello.events({
  'click .logout': function(event){
    event.preventDefault();
    AccountsTemplates.logout();
  }
})