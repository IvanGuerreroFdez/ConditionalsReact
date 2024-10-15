import logo from './logo.svg';
import './App.css';
import CondicionalTernario from './components/CondicionalTerniario';
import CondicionalAnd from './components/CondicionalAnd';
import CondicionalVariables from './components/CondicionalVariales';
import CondicionalAutoejecutado from './components/CondicionalAutoejecutado';
import ListaPersonas from './components/ListaPersona';

function App() {
  
  return (
    <div className="App">
      <CondicionalTernario/>
      <CondicionalVariables/>
      <CondicionalAnd/>
      <CondicionalAutoejecutado/>
      <ListaPersonas/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
