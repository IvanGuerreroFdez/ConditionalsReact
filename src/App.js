import logo from './logo.svg';
import './App.css';
import CondicionalTernario from './components/CondicionalTerniario';
import CondicionalAnd from './components/CondicionalAnd';
import CondicionalVariables from './components/CondicionalVariales';
import CondicionalAutoejecutado from './components/CondicionalAutoejecutado';
import ListaPersonas from './components/ListaPersona';
import EstiloSimple from './components/EstiloSimple';
import EstilosParrafo from './components/EstilosParrafo';
import EstiloClases from './components/EstiloClases';
import Semaforo from './components/Semaforo';

function App() {
  
  return (
    <div className="App">
      <h1>CondicionalTernario</h1>
      <CondicionalTernario/>

      <h1>CondicionalVariables</h1>
      <CondicionalVariables/>

      <h1>CondicionalAnd</h1>
      <CondicionalAnd/>

      <h1>CondicionalAutoejecutado</h1>
      <CondicionalAutoejecutado/>

      <h1>ListaPersonas</h1>
      <ListaPersonas/>

      <h1>EstiloSimple</h1>
      <EstiloSimple/>

      <h1>EstilosParrafo</h1>
      <EstilosParrafo/>

      <h1>EstiloClases</h1>
      <EstiloClases/>

      <h1>Ejercicio Semáforo</h1>
      <Semaforo/>

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
