Node = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    title: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.node.title}</li>
    );
  }
});
