App = React.createClass({
  mixins: [ReactMeteorData],//Seems to only be needed for data retrieval (not updates)
  
  getMeteorData() {
    return {
      items: Items.find({}).fetch()
    }
  },

  renderItems() {
    return this.data.items.map((item) => {
      return <Item key={item._id} item={item} />;
    });
  },

  render() {return ( 
      <div className="container">
        <header>
          <h1>reCRUDact</h1>
        </header>
        <ItemForm/>
        <ul>
          {this.renderItems()}
        </ul>
      </div>
  )}
});

