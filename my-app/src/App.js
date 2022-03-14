
import './App.css';
import './components/NavBar/NavBar'
import { NavBar } from './components/NavBar/NavBar';
import { Header } from './components/Hero/Header';
import { ButtonStyle } from './components/button.style';
import { GlobalStyles } from './global.style'


function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <NavBar />   
      
      <div><Header /> </div>
    
      <ButtonStyle buttonLabel={'Click Here'}></ButtonStyle>
    </div>
  );
}

export default App;



// const style = { backgroundColor: 'brown' }


/* <header className="App-header">
        <img src={tow} className="App-logo" alt="logo" style={ style }/>
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
      </header> */