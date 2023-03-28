import './App.css';
import Header from './components/Header';
import Container from '@mui/material/Container'

function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <Header></Header>
        </header>
      </div>
    </Container>
  );
}

export default App;
