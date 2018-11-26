import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';

class App extends Component {
  render() {
    console.log(timelineData.events);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Basically Twitter</h1>
        </header>
        <main className="App-main">
          <Timeline
            events={timelineData.events}
          />
        </main>
      </div>
    );
  }
}

export default App;
