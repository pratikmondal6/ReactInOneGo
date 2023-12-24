import React from 'react'
import './App.css';
import DestructurePropsClass from './components/DestructurePropsClass';
import DestructurePropsFunc from './components/DestructurePropsFunc';

function App() {
  return (
    <div className="App">
      <DestructurePropsClass name="John" age="20" />
      <DestructurePropsFunc name="Jane" age="30" />
    </div>
  );
}

export default App;
