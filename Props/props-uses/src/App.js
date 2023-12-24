import React from 'react';
import PropsComponent from './components/PropsComponent';
import './App.css';
import ClassCompoProps from './components/ClassCompoProps';

function App() {
  return (
    <div className="App">
    <PropsComponent name="Pratik" age="22">
      <p>I live in KL</p>
    </PropsComponent>

     <PropsComponent name="Pulak">
        <button>Click Me</button>
     </PropsComponent>

      <ClassCompoProps name="Class Rahul" age="23"
      />

    </div>
  );
}

export default App;
