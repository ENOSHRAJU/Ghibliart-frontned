import Home from './Pages/Home';
import Create from './Pages/Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/create' element={<Create/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
