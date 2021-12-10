import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { LandingPage } from './screens/LandingPage/LandingPage';
import { Route, Link, BrowserRouter as Router ,Switch, Routes, BrowserRouter} from 'react-router-dom'  
import MyNotes from './screens/MyNotes/MyNotes';

const App = () => (

  
  

 <BrowserRouter>
 <Header />
 <Routes>
   <Route path='/' element={<LandingPage />} exact />
   <Route path="/mynotes" element={<MyNotes />} />
 </Routes>
    
    <Footer />
 </BrowserRouter>
  
  
    
    
    
  )
  



export default App;
