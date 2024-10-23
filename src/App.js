import logo from './logo.svg';
import './App.css';
import Jogador from './components/jogador';

function App() {
  const listaDeJogadores = [
    { nome: 'Lionel Messi', numero: 10, time: 'Inter Miami', gols:  849 },
    { nome: 'Cristiano Ronaldo', numero: 7, time: 'Al Nassr', gols: 907 },
    { nome: 'Neymar Jr', numero: 10, time: 'Al Hilal', gols: 439  },
    { nome: 'Vinicius Jr', numero: 7, time: 'Real Madrid', gols: 92 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Time de Futebol</h1>
        <Jogador jogadores={listaDeJogadores} />

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
