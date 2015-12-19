Item = React.createClass({
  getInitialState: function() {
    return {mode: 'view'};
  },
  handleEdit() {
    event.preventDefault();
    this.setState({mode: 'edit'});
  },
  handleCreateChild() {
    event.preventDefault();
    var child = new AstroItem({
      ownerId: this.props.currentUser._id,
      parentId: this.props.item._id,
      title: "New Child Title",
      content: "Give your child content."
    });
    child.save();
  },
  render() {
    var item, self = this,
        restLink = "v1/item/" + this.props.item._id;
    function getContent(){ return {__html: self.props.item.content};}
    if(this.state.mode == 'view' ){
      item = 
        <div className="item itemView">
          <h3 className="title">{this.props.item.title}</h3>
          <aside className="id">{this.props.item._id}</aside>
          <div className="content" dangerouslySetInnerHTML={getContent()}></div>

          <a href={restLink} target="_blank"><button>Rest Link</button></a>
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleCreateChild}>NEW CHILD</button>
          <DeleteBtn item={this.props.item} text={'Delete'}/>
          <List isRoot={false} item={this.props.item} currentUser={this.props.currentUser}/>
        </div>
    }else{
      item = <ItemForm  
        item={this.props.item} 
        currentUser={this.props.currentUser}
        onSubmit={()=>this.setState({mode: 'view'})} 
      />;
    }
      
    

    return (
      <li id={'ID'+this.props.item._id}>
        {item}
      </li>
    );
  }
});


