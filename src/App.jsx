import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCat from './Pages/ShopCat';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import all_product from './Components/assets/all_product';
import WriteProduct from './Write';
// import Read from './Read';

console.log(Shop);

function App() {

  

  return (
    <>
    <div style={{width: '100px', height: '100px', background: "red"}} 
    onClick={() => {
      console.log("clicked");
      
     
      for(let product of all_product){
              // console.log(product.name,product.image,product.new_price,product.old_price,product.category);
              WriteProduct(product);
            }
    }
      
    }>
      click to save to db(test)
    </div>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCat category="mens" />} />
        <Route path="/womens" element={<ShopCat category="womens" />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    

    </>
  )
}

export default App