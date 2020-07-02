import { Roles } from 'meteor/alanning:roles';

const roles = [];

export function initializeRoles(){
  roles.forEach(function(role){
    Roles.createRole(role, {unlessExists: true});
  });
};