Tags = new Mongo.Collection('tags');

Tag = Astro.Class({
  name:'Tags',
  collection: Tags,
  fields : {
    itemId: 'string',
    title: 'string', //!unique
    ownerId: 'string',
  }
});

//Tag.getChildren = function(title){
//  var parent  = Tags.find(
//};
