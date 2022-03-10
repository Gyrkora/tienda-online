// import logo from './logo.svg';
import tow from './tow.PNG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={tow} className="App-logo" alt="logo" />
        <p>
          Nombre de app: <code>Tienda TOW</code>
        </p>
        <p>Another Way to learn</p>
        <a
          className="App-link"
          href="https://theotherwayspanish.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Más info
        </a>
      </header>
    </div>
  );
}

export default App;
