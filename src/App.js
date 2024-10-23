import logo from './logo.svg';
import './App.css';
import Jogador from './components/jogador';


function App() {
  const listaDeJogadores = [
    { nome: 'Lionel Messi', numero: 10, time: 'Inter Miami', gols: 849, nacionalidade: 'Argentina', times: [{ nome: 'Barcelona', ano: '2004-2021' }, { nome: 'Paris Saint-Germain', ano: '2021-2023' }] },
    { nome: 'Cristiano Ronaldo', numero: 7, time: 'Al Nassr', gols: 907, nacionalidade: 'Portugal', times: [{ nome: 'Sporting CP', ano: '2002-2003' }, { nome: 'Manchester United', ano: '2003-2009 Retornou em 2022' }, { nome: 'Real Madrid', ano: '2009-2018' }, { nome: 'Juventus', ano: '2018-2021' }] },
    { nome: 'Neymar Jr', numero: 10, time: 'Al Hilal', gols: 439, nacionalidade: 'Brasil', times: [{ nome: 'Santos', ano: '2009-2013' }, { nome: 'Barcelona', ano: '2013-2017' }, { nome: 'Paris Saint-Germain', ano: '2017-2023' }] },
    { nome: 'Vinicius Jr', numero: 7, time: 'Real Madrid', gols: 92, nacionalidade: 'Brasil', times: [{ nome: 'Flamengo', ano: '2018-2019' }] },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Jogadores De Futebol</h1>
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
