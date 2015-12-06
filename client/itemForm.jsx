ItemForm = React.createClass({
  getInitialState: function() {
    if(!this.props.item){
      this.item = new AstroItem({ownerId: this.props.currentUser._id} );
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
    var title = ReactDOM.findDOMNode(this.refs.titleInput).value.trim();
    var content = ReactDOM.findDOMNode(this.refs.contentInput).value.trim();

 
    // Clear form
    if(this.state.mode == "new"){
      ReactDOM.findDOMNode(this.refs.titleInput).value = "";
      //this.mediumContentEditor.setContent('');// Not working setContent is undefined.
      //The above line should be all that's needed, the following three lines
      //are a replacement work around:
      ReactDOM.findDOMNode(this.refs.contentInput).value = "";//Original version before medium
      this.mediumContentEditor.destroy();
      this.setupMediumEditor();
      this.item = new AstroItem({ownerId: this.props.currentUser._id} );
    }else{
      this.props.onSave();
    }
    this.item.set({
      title: title,
      content: content
    });
    this.item.save();

    var tags = _.uniq(getTags(title));//Find All uniq tags
    //console.log('tags', tags);

    //Add Tags to DB:
    _.each(tags, t=>{
      tag = new Tag({
        title: t,
        itemId: this.item._id,
        ownerId: Meteor.userId()
      });
      tag.save();
      console.log('tag:', tag);
    });

  },
  componentDidMount: function() {
    //console.log ( "The Dom Element:", this.refs.titleInput);
    this.setupMediumEditor(this.item._id);
  },
  setupMediumEditor: function(id){
    var className = '.mediumEdit',
        selector = id ?  "#ID" + id + ' ' + className : className + ".new";

    this.mediumContentEditor =  new MediumEditor(selector, {
            cleanPastedText: true,
            disableReturn: true,
            toolbar: {buttons: ['bold', 'italic', 'underline', 
                                'anchor', 'removeFormat' ]}
    });
  },

  render() {
    var item = this.item, 
        contentClass = "content mediumEdit " + this.state.mode;
    return ( 
        <form className="item itemEdit" onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input
            className="title"
            type="text" 
            ref="titleInput"
            placeholder="title" 
            defaultValue={item.title}
          />
          <label>Content:</label>
          <textarea
            type="text"
            className={contentClass}
            ref="contentInput"
            placeholder="content"
            defaultValue={item.content}
            />
          <br/>
          <input type="submit" value={this.state.mode == 'new' ? 'Add New' : 'Save'}/>
        </form>
  )}
});

function getTags(str) {
  var tags = [];

  var hashTagPattern = /#[A-Za-z0-9_]*/gi;

  tags =  _.map(

    // 1. find all matches for '#foo' in str
    str.match(hashTagPattern),
    
    // 2. remove first character (the '#') 
    function(tag) {
      return tag.substr(1, tag.length);
    }
  ); 
  return tags;
}
