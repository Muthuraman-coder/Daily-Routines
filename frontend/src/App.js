import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import Navbar from './components/navbar';
import Signup from './pages/signup';
import Signin from './pages/signin';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
        <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
