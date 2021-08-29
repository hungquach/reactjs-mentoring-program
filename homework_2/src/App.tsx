import React from 'react';
//import './App.css';
import Welcome from '@components/Welcome';
import WelcomePure from './components/WelcomePure';
import WelcomeFunctional from './components/WelcomeFunctional'

function App() {
  const h1 = React.createElement('h1', { }, 'Hello world - React.createElement');
  return (
    <div className="App">
      {h1}
      <Welcome />
      <WelcomePure />
      <WelcomeFunctional />
    </div>
  );
}

export default App;
