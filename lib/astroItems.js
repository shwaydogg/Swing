Items = new Mongo.Collection('items');

AstroItem = Astro.Class({
  name:'Items',
  collection: Items,
  fields : {
    title: 'string',
    content: 'string',
    ownerId: 'string',
    parentId: 'string',
    rank: 'number',
  }
});

Meteor.methods({
  '/item/create': function(params) {
      let item = new AstroItem(params);
      item.save();
      return item;
    }
  });
