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

Api.addRoute('v1/items/:itemIds', {
  authRequired: false,
  enableCors: true
}, {
  get: function() {
    var items, itemIds = this.urlParams.itemIds;
    check(itemIds, String);
    items = itemIds.split('-');
    if(items.length > 10000){
      throw new Meteor.Error("Too-many-ids");
    }
    items = _.map(items, id => {
      check(id, String);
      return Items.findOne({_id: id}, {transform:null});
    });
    return items;
  }
});

Api.addRoute('v1/children/:itemIds', {
  authRequired: false,
  enableCors: true
}, {
  get: function() {
    var items, itemIds = this.urlParams.itemIds;
    check(itemIds, String);
    items = itemIds.split('-');
    if(items.length > 10000){
      throw new Meteor.Error("Too-many-ids");
    }
    items = _.map(items, id => {
      check(id, String);
      return Items.find({parentId: id}, {transform:null, sort:{rank:1}}).fetch();
    });
    return items;
  }
});

Api.addRoute('v1/grandChildren/:itemIds', {
  authRequired: false,
  enableCors: true
}, {
  get: function() {
    var items, itemIds = this.urlParams.itemIds;
    check(itemIds, String);
    items = itemIds.split('-');
    if(items.length > 10000){
      throw new Meteor.Error("Too-many-ids");
    }
    items = _.map(items, id => {
      check(id, String);
      var found = Items.findOne({_id: id});
      return found.addGrandChildren();
    });
    return items;
  }
});

//Meteor.publish('items', ()=>Items.find({}) );//Currently AutoPublished so not needed.
