import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import Petboarding from './components/Petboarding';
// import Navbar from './components/Navbar';
import Homepage from './pages';

//Pages and Components
import Home from './pages/Home';
import Petboardingpage from './pages/petboarding';
import Reservation from './pages/reservation';
import SearchReservation from './pages/searchReservation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/petboarding' element={<Petboardingpage/>}/>
          <Route path='/reserve' element={<Home/>}/>
          <Route path='/admin' element={<Reservation/>}/>
          <Route path='/search' element={<SearchReservation/>}/>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
