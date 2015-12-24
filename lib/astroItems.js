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
  },
  methods:{
    addChildren: function(){
      this.children = Items.find({parentId: this._id}).fetch();
      return this;
    },
    addGrandChildren: function(){
      this.addChildren();
      _.each(this.children, child => child.addChildren());
      return this;
    }
  }
});
