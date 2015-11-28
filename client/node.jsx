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
        <DeleteBtn/>
      </li>
    );
  }
});

var DeleteBtn = React.createClass({
  handleClick: function(event) {
    event.preventDefault();
    console.log('DELETED');
  },
  render() {
    return (
      <button onClick={this.handleClick}>&times;</button>
    );
  }
});

