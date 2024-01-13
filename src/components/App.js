import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header/Header";
import { Home } from "./Home/Home";
import {Routes, Route} from "react-router-dom"
import PageLayout from './PageLayout/PageLayout';
import SearchPage from './SearchPage/SearchPage';
import LoginPage from './LoginPage/Loginpage';
import { SearchProvider } from '../context/SearchContext';
import SignupPage from './SignupPage/SignupPage';
import ProductDetail from './ProductDetail/ProductDetail';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import CheckOutPage from './CheckOutPage/CheckOutPage';



function App() {
  return (

    <SearchProvider>
        <Routes>
          <Route path="/" element={<PageLayout/>}>
            <Route path="" element={<Home />} />
            <Route path="cart" element={<ShoppingCart />} />
            <Route path="/searchPage/:id" element={<SearchPage />} />
            <Route path="/productDetail/:id" element={<ProductDetail/>} />
            <Route path="/checkOutPage" element={<CheckOutPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="Signup" element={<SignupPage />} />
        </Routes>
    </SearchProvider>


  )

}

export default App;
