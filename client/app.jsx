App = React.createClass({
  mixins: [ReactMeteorData],//Seems to only be needed for data retrieval (not updates)
  
  getMeteorData() {
    var currentUser = Meteor.user();
    if(currentUser)
      return {
        currentUser: Meteor.user()
      }
    else return {}; //Must return something.
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
              <List currentUser={this.data.currentUser}/>
            </ul>
          </main>
            : 
            <p>Login Above to view your saved items.</p>
        }
      </div>
  )}
});

