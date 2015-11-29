var Api;

Api = new Restivus({
  apiPath: '/',
  useDefaultAuth: true,
  prettyJson: true
});

Api.addRoute('v1/item/:itemId', {
  authRequired: false,
  enableCors: true
}, {
  get: function() {
    var item, itemId = this.urlParams.itemId;
    check(itemId, String);

    item = Items.findOne({_id: itemId}, {transform:null});
    if (item) 
      return item;
    return 
      {error: "can't find item for id: " + itemId};
  }
});

//Meteor.publish('items', ()=>Items.find({}) );//Currently AutoPublished so not needed.
