App = React.createClass({
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    return {
      nodes: Nodes.find({}).fetch()
    }
  },

  renderNodes() {
    return this.data.nodes.map((node) => {
      return <Node key={node._id} node={node} />;
    });
  },

  handleSubmit(event) {
    console.log("submitted form");
    event.preventDefault();
 
    // Find the text field via the React ref
    var title = React.findDOMNode(this.refs.titleInput).value.trim();
    var content = React.findDOMNode(this.refs.contentInput).value.trim();
    
    var node = new Node();

    node.set({
      title: title,
      content: content,
      createdAt: new Date() // current time
    });

    node.save();
 
    // Clear form
    React.findDOMNode(this.refs.titleInput).value = "";
    React.findDOMNode(this.refs.contentInput).value = "";
  },

  render() {return ( 
      <div className="container">
        <header>
          <h1>New Node</h1>
        </header>
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
        <ul>
          {this.renderNodes()}
        </ul>
      </div>

  )}
});
