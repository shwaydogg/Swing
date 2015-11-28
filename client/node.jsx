Item = React.createClass({
  //propTypes: {
  //  // This component gets the task to display through a React prop.
  //  // We can use propTypes to indicate it is required
  //  title: React.PropTypes.object.isRequired
  //},
  render() {
    //console.log("in Item render", this);
    return (
      <li>
        {this.props.item.title}
        <DeleteBtn item={this.props.item}/>
      </li>
    );
  }
});

var DeleteBtn = React.createClass({
  handleDelete: function(event) {
    //Gets triggerend when delete is clicked.
    event.preventDefault();
    console.log('DELETED');

    var confirmDelete = confirm("Are you sure you want to delete?");
    if(confirmDelete){
      this.props.item.remove();
    }
  },
  render() {
    return (
      <button onClick={this.handleDelete}>&times;</button>
    );
  }
});

