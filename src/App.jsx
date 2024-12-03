import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<shop/>}/>
      <Route path='/mens' element={<shopCat category="mens"/>}/>
      <Route path='/womens' element={<shopCat category="womens"/>}/>
      <Route path='product' element={<product/>}>
        <Route path=':productId' element={<product/>}/>
      </Route>
      <Route path='/cart' element={<cart/>}/>
      <Route path='/login' element={<loginSignup/>}/>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
