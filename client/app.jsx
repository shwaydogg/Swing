App = React.createClass({
  mixins: [ReactMeteorData],//Seems to only be needed for data retrieval (not updates)
  
  getMeteorData() {
    var currentUser = Meteor.user();
    if(currentUser)
      return {
        currentUser: Meteor.user(),
        items: Items.find({ownerId: currentUser._id}).fetch()
      }
    else return {}; //Must return something.
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

        { this.data.currentUser ?
          <main>
            <ItemForm currentUser={this.data.currentUser}/>
            <ul>
              {this.renderItems()}
            </ul>
          </main>
            : 
            <p>Login Above to view your saved items.</p>
        }
      </div>
  )}
});

