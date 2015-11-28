DeleteBtn = React.createClass({
  handleDelete: function(event) {
    //Gets triggerend when delete is clicked.
    event.preventDefault();
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
