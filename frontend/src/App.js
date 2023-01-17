import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import Petboarding from './components/Petboarding';
// import Navbar from './components/Navbar';
import Homepage from './pages';

//Pages and Components
import Petboardingpage from './pages/petboarding';
// import Reservation from './pages/Admin';
import SearchReservation from './pages/searchReservation';
import UserForm from './pages/userForm';
import Admin from './pages/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/petboarding' element={<Petboardingpage/>}/>
          <Route path='/reserve' element={<UserForm/>}/>
          <Route path='/admin' element={<Admin/>}/>
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
