import snail from './assets/snail.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={snail} className="snail-logo" alt="logo" />
        <p>
          Welcome to <code>Snail Tutors</code>
        </p>
        <a
          className="App-link"
          href="https://www.madeira.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Madeira Home
        </a>
      </header>
    </div>
  );
}

export default App;
