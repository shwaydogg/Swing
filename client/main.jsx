App = React.createClass({
 
  render() {
    return ( 
      <div className="container">
        <header>
          <h1>New Node</h1>
        </header>
          <form>
          <input type="text" value="title" placeholder="title" />
          <input type="text" value="content" placeholder="content" />
          <input type="submit" />
        </form>
      </div>
    );
  }
});