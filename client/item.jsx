Item = React.createClass({
  getInitialState: function() {
    return {mode: 'view'};
  },
  handleEdit() {
    event.preventDefault();
    this.setState({mode: 'edit'});
  },
  render() {
    var item;
    var restLink = "v1/item/" + this.props.item._id;
    if(this.state.mode == 'view' ){
      item = 
        <div className="itemView">
          <h3 style={{'margin-bottom': 0}}>Title: {this.props.item.title}</h3>
          <h4 style={{'margin': 0}}>Content: {this.props.item.content}</h4>
          <div>id: {this.props.item._id}</div>
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


