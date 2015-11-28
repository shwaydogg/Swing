Item = React.createClass({
  //propTypes: {
  //  // This component gets the task to display through a React prop.
  //  // We can use propTypes to indicate it is required
  //  title: React.PropTypes.object.isRequired
  //},
  handleEdit() {
    event.preventDefault();
    console.log('Edit');
  },
  render() {
    //console.log("in Item render", this);
    return (
      <li>
        <div>Title: {this.props.item.title}</div>
        <div>Content: {this.props.item.content}</div>
        <button onClick={this.handleEdit}>Edit</button>
        <DeleteBtn item={this.props.item}/>
      </li>
    );
  }
});


