import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import WelcomePure from './components/WelcomePure';
import WelcomeFunctional from './components/WelcomeFunctional'

function App() {
  const h1 = React.createElement('h1', {}, 'Hello world - React.createElement');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {h1}
      <Welcome />
      <WelcomePure />
      <WelcomeFunctional />
    </div>
  );
}

export default App;
