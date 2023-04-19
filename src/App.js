import './App.css';
import Header from './components/Header';
import Proyectos from './components/Proyectos';
import Sobremi from './components/Sobremi';
import Container from '@mui/material/Container';


function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <Header/> 
          <Sobremi/>
          <Proyectos/>
        </header>
      </div>
    </Container>
  );
}

export default App;
