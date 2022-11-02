import './App.css';
import { Header } from './components/Header/Header';
import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
    </div>
  );
}

export default App;
