import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  UpdateEntry = () => {
    this.setState(prevState => ({
      entrycount: prevState.entrycount + 1
    }));
  }

  UpdateExit = () => {
    this.setState(prevState => ({
      exitcount: prevState.exitcount + 1
    }));
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Mall Entry/Exit Counter</h1>
        <div style={{ margin: '20px 0' }}>
          <h2>People Entered: {this.state.entrycount}</h2>
          <h2>People Exited: {this.state.exitcount}</h2>
        </div>
        <div>
          <button 
            onClick={this.UpdateEntry} 
            style={{ padding: '10px 20px', margin: '10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
          >
            Login (Entry)
          </button>
          <button 
            onClick={this.UpdateExit} 
            style={{ padding: '10px 20px', margin: '10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}
          >
            Exit
          </button>
        </div>
      </div>
    );
  }
}

export default CountPeople;
