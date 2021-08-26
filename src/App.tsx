import React from 'react';
import { Selection } from './components/Selection'
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="GPSearch">
        <Selection type='artifacts'/>
        {/* <Selection type='characters'/> */}
      </div>
    </div>
  );
}

export default App;
