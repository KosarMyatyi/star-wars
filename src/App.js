import './App.css';
import { Main } from './components/Main/Main.jsx';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Main />
      <hr className="divider" />
    </div>
  );
}

export default App;
