import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import {BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/search' element={<Search/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/recipes/:id' element={<Recipe/>} />
        </Routes>
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
