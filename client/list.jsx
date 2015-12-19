List = React.createClass({
  mixins: [ReactMeteorData],//Seems to only be needed for data retrieval (not updates)
  
  getMeteorData() {
    if(this.props.currentUser)
      return {
        items: Items.find({ownerId: this.props.currentUser._id}).fetch()
      }
    else return {}; //Must return something.
  },

  renderItems() {
    return this.data.items.map((item) => {
      return <Item key={item._id} item={item} currentUser={this.props.currentUser} />;
    });
  },
  render: function() {
    return <div>{this.renderItems()}</div>
  }
});
