ItemForm = React.createClass({
  getInitialState: function() {
    if(!this.props.item){
      this.item = new AstroItem();
      return {mode: 'new'};
    }
    else{
      this.item = this.props.item;
      return {mode: 'edit'};
    }
  },

  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    var title = React.findDOMNode(this.refs.titleInput).value.trim();
    var content = React.findDOMNode(this.refs.contentInput).value.trim();
    
    this.item.set({
      title: title,
      content: content
    });

    this.item.save();
 
    // Clear form
    if(this.state.mode == "new"){
      React.findDOMNode(this.refs.titleInput).value = "";
      React.findDOMNode(this.refs.contentInput).value = "";
      this.item = new AstroItem();
    }else{
      this.props.onSave();
    }
  },
  componentDidMount: function() {
    //console.log ( "The Dom Node:", this.refs.titleInput);
    this.mediumContentEditor =  new MediumEditor('.mediumEdit');
  },

  render() {
    var item = this.item;
    return ( 
        <form onSubmit={this.handleSubmit}>
          {this.state.mode}
          <input
            type="text" 
            ref="titleInput"
            placeholder="title" 
            defaultValue={item.title}
          />
          <textarea
            type="text"
            className="mediumEdit"
            ref="contentInput"
            placeholder="content"
            defaultValue={item.content}
            
            />
          <input type="submit" />
        </form>
  )}
});
//<div className="medium-edit" ref="contentInput">{item.content}</div>
