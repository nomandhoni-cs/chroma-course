import './App.css';
import { Body } from './components/Body/Body';
import { Header } from './components/Header/Header';
import logo from './logo.svg'
import bannerImage from './images/topGreenBanner.webp'
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Body halfBanner={bannerImage}/>
      <Footer />
    </div>
  );
}

export default App;
