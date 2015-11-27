App = React.createClass({
  render() {
    return ( 
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
      </div>
  )},
  handleSubmit(event) {
    debugger;
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

    debugger;

    node.save();
 
    // Clear form
    React.findDOMNode(this.refs.titleInput).value = "";
    React.findDOMNode(this.refs.contentInput).value = "";
  }
});