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
          <h1>New Item</h1>
        </header>
        <ItemForm/>
        <ul>
          {this.renderItems()}
        </ul>
      </div>
  )}
});

ItemForm = React.createClass({
  handleSubmit(event) {
    console.log("submitted form");
    event.preventDefault();
 
    // Find the text field via the React ref
    var title = React.findDOMNode(this.refs.titleInput).value.trim();
    var content = React.findDOMNode(this.refs.contentInput).value.trim();
    
    var n = new AstroItem();
    n.set({
      title: title,
      content: content
    });

    n.save();
 
    // Clear form
    React.findDOMItem(this.refs.titleInput).value = "";
    React.findDOMItem(this.refs.contentInput).value = "";
  },

  render() {return ( 
        <form onSubmit={this.handleSubmit}>
          <input
            type="text" 
            ref="titleInput"
            placeholder="title" 
          />
          <input
            type="text"
            ref="contentInput"
            placeholder="content" />

          <input type="submit" />
        </form>
  )}
});
