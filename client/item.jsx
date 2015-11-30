Item = React.createClass({
  getInitialState: function() {
    return {mode: 'view'};
  },
  handleEdit() {
    event.preventDefault();
    this.setState({mode: 'edit'});
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
          <DeleteBtn item={this.props.item} text={'Delete'}/>
        </div>
    }else{
      item = <ItemForm  
        item={this.props.item} 
        onSave={()=>this.setState({mode: 'view'})} 
      />;
    }
    return (
      <li>
        {item}
      </li>
    );
  }
});


