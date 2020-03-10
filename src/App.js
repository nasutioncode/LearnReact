import React from 'react';
import './index.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <h1>Learn React</h1>
      
      {/* <Welcome/>
      <Hello/> */}
{/* 
        <Greet name="Nasution" asal="Bima">
          <p>This is Children Nasution</p>
          <button>Click Me</button>
        </Greet>
        <Greet name="Fathi" asal="Tasikmalaya">
          <p>This is Children Fathi</p>
        </Greet>
        <Greet name="Dzikri" asal="Banten">
          <p>This is Children Dzikri</p>
        </Greet> */}

        <Message/>
    </div>
  );
}

export default App;
