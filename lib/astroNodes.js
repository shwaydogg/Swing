Nodes = new Mongo.Collection('nodes');

Node = Astro.Class({
  name:'Nodes',
  collection: Nodes,
  fields : {
    title: 'string',
    content: 'string'
  }
});