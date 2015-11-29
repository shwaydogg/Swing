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
    var text = this.props.text ? this.props.text : '&times;';
    return (
      <button onClick={this.handleDelete}>{text}</button>
    );
  }
});
