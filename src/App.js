
import './App.css';
import React from 'react';

import  Feed  from './components/feed/Feed';

import {
  Container
} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Social media feed</h2>
      </header>
      <Container>

      <div className="mx-0">
           <Feed id="1" title="Feed" />
      </div>
      </Container>
    </div>
  );
}

export default App;
