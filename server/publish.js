Meteor.publish("items", function(){
  return Items.find();
});
Meteor.publish("tags", function(){
  return Items.find();
});
