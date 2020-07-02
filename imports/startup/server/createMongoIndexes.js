
/*
import { Contacts } from '/imports/api/contacts/contacts.js';
import { Lists } from '/imports/api/lists/lists.js';
import { Messages } from '/imports/api/messages/messages.js';
import { Tags } from '/imports/api/tags/tags.js';
import { TagsContacts } from '/imports/api/tags_contacts/tags_contacts.js';
import { Texts } from '/imports/api/texts/texts.js';

Meteor.startup(() => {
  
  Contacts.rawCollection().createIndex({ listId: 1 });
  Contacts.rawCollection().createIndex({ listId: 1, active: 1 });
  Contacts.rawCollection().createIndex({ listId: 1, _id: 1, active: 1 });
  Contacts.rawCollection().createIndex({ listId: 1, phoneNumber: 1 });

  Lists.rawCollection().createIndex({ teamId: 1 });
  Lists.rawCollection().createIndex({ phoneNumber: 1 });

  Messages.rawCollection().createIndex({ listId: 1});

  Tags.rawCollection().createIndex({ listId: 1, _id: 1 });

  TagsContacts.rawCollection().createIndex({ contactId: 1 });
  TagsContacts.rawCollection().createIndex({ tagId: 1 });

  Texts.rawCollection().createIndex({ messageId:1 });
  Texts.rawCollection().createIndex({ sid: 1 });
  Texts.rawCollection().createIndex({ receiverType: 1, receiverId: 1, senderId: 1, unread: 1 });

});
*/