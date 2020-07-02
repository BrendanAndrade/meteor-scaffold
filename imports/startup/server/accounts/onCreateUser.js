import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
//import { Teams } from '../../../api/teams/teams.js';


Accounts.onCreateUser((options, user) => {
  const userToCreate = user;

  /*
  if(options.profile.teamId){
    userToCreate.teamId = options.profile.teamId;
  } else {
    userToCreate.teamId = Teams.insert({creatorId: userToCreate._id});
  }
  */

  return userToCreate;
})