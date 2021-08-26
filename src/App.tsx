import React from 'react';
import { Selection } from './components/Selection'
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="GPSearch">
        <Selection type='artifacts'/>
        <Selection type='characters'/>
        <Selection type='weapons'/>
      </div>
      <footer className="bg-light text-center text-lg-start">
        <div className="GPFooter p-3">
          Website by Oscar Sandford. Not affiliated with miHoYo. <br/> 
          Check out the <a href="https://github.com/genshindev/api"> <u>genshin.dev API</u></a>.
        </div>
      </footer>
    </div>
  );
}

export default App;
