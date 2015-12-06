Security.defineMethod("ifOwner", {
  fetch: [],
  transform: null,
  deny: function (type, arg, userId, doc) {
    return userId !== doc.ownerId;
  }
});

Security.defineMethod("ifG_d", {
  fetch: [],
  transform: null,
  deny: function (type, arg, userId, doc) {
    if(!Meteor.settings.g_dEmail) return false;
    var user = Meteor.users.findOne({_id: userId});
    return  Meteor.settings.g_dEmail !== user.emails[0].address;
  }
});

Tags.permit(['insert', 'update', 'remove']).ifOwner().apply();
Items.permit(['insert', 'update', 'remove']).ifOwner().apply();
Items.permit(['insert', 'update', 'remove']).ifG_d().apply();
