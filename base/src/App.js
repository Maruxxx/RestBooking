import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Search from './Pages/Search'
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    

    
    <BrowserRouter>
      
      <Header />  

        <div className="App">

        <Routes>

          <Route path='/search' element={<Search />} />

          <Route path='/' element={<Home />} />
            
        </Routes>
      
        </div>

      </BrowserRouter>

      
    
  );
}

export default App;
