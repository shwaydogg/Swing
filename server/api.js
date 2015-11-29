var Api;

Api = new Restivus({
  apiPath: '/',
  useDefaultAuth: true,
  prettyJson: true
});

Api.addRoute('v1/item-id/:itemId', {
  authRequired: false,
  enableCors: true
}, {
  get: function() {
    var item,
      itemId = this.urlParams.itemId;

    check(itemId, String);

    item = Items.findOne({_id: itemId});
    if (item) 
      return item;
    return 
      {error: "can't find item for id: " + itemId};
  }
});

Meteor.publish('items', function(){
  return Items.find();
});
