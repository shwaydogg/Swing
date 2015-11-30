Items = new Mongo.Collection('items');

AstroItem = Astro.Class({
  name:'Items',
  collection: Items,
  fields : {
    title: 'string',
    content: 'string',
    ownerId: 'string'
  }
});

Security.defineMethod("ifOwner", {
  fetch: [],
  transform: null,
  deny: function (type, arg, userId, doc) {
    return userId !== doc.ownerId;
  }
});

Items.permit(['insert', 'update', 'remove']).ifOwner().apply();
