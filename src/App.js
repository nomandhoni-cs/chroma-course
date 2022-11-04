import './App.css';
import { Body } from './components/Body/Body';
import { Header } from './components/Header/Header';
import logo from './logo.svg'
import bannerImage from './images/topGreenBanner.webp';
import { Footer } from './components/Footer/Footer';
const courseInfo = [
  {title: 'React crash course 2022',
  price: 19.99,
  insturctor: 'Noman Dhoni',
  length: '4h 40min'    
},
  {title: 'React crash course 2022',
  price: 19.99,
  insturctor: 'Noman Dhoni',
  length: '4h 40min'    
},
  {title: 'React crash course 2022',
  price: 19.99,
  insturctor: 'Noman Dhoni',
  length: '4h 40min'    
},
  {title: 'React crash course 2022',
  price: 19.99,
  insturctor: 'Noman Dhoni',
  length: '4h 40min'    
}
]

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Body courseList={courseInfo} halfBanner={bannerImage}/>
      <Footer />
    </div>
  );
}

export default App;
