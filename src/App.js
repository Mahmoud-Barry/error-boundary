import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Goku from './components/Goku';
import Vegeta from './components/Vegeta';
import Frieza from './components/Frieza';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
  
  render(){
    return (
      <div className="container text-center">
          <h1>Cliquer sur les gentils</h1>

          <div className="row">
            <ErrorBoundary >
              <Frieza />
            </ErrorBoundary>

            <ErrorBoundary >
              <Goku />
            </ErrorBoundary>

            <ErrorBoundary >
              <Vegeta />
            </ErrorBoundary>
            
          </div>
      </div>
    );
  }
  
}

export default App;
