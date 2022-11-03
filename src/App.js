import './App.css';
import { Body } from './components/Body/Body';
import { Header } from './components/Header/Header';
import logo from './logo.svg'
import bannerImage from './images/topGreenBanner.webp'

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Body halfBanner={bannerImage}/>
    </div>
  );
}

export default App;
