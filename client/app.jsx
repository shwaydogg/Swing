App = React.createClass({
  mixins: [ReactMeteorData],//Seems to only be needed for data retrieval (not updates)
  
  getMeteorData() {
    return {
      items: Items.find({}).fetch(),
      currentUser: Meteor.user()
    }
  },

  renderItems() {
    return this.data.items.map((item) => {
      return <Item key={item._id} item={item} currentUser={this.data.currentUser} />;
    });
  },

  render() {return ( 
      <div className="container">
        <AccountsUIWrapper />

        <header>
          <h1>Swing.</h1>
        </header>

        <ItemForm/>
        { this.data.currentUser ?
          <ul>
            {this.renderItems()}
          </ul>
          : 
          <p>Login Above to view your saved items.</p>
        }
      </div>
  )}
});

