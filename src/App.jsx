import './App.css'
import ConfessionCard from './component/ConfessionCard'
import Navbar from './component/Navbar';
import AddConfession from './pages/AddConfession';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' Component={Feed} />
        <Route path='/add' Component={AddConfession} />
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
