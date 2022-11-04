import './App.css';
import { Body } from './components/Body/Body';
import { Header } from './components/Header/Header';
import logo from './logo.svg'
import bannerImage from './images/topGreenBanner.webp'
<<<<<<< HEAD
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
=======
import { Footer } from './components/Footer/Footer';

>>>>>>> 871ad318c52584456eafc943e6f9b4c203e5be91
function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
<<<<<<< HEAD
      <Body courseList={courseInfo} halfBanner={bannerImage}/>
=======
      <Body halfBanner={bannerImage}/>
      <Footer />
>>>>>>> 871ad318c52584456eafc943e6f9b4c203e5be91
    </div>
  );
}

export default App;
