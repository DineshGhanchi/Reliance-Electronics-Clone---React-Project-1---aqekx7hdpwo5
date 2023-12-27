import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header/Header";
import { Home } from "./Home/Home";
import {Routes, Route} from "react-router-dom"
import PageLayout from './PageLayout/PageLayout';
import SearchPage from './SearchPage/SearchPage';
import LoginPage from './LoginPage/Loginpage';



function App() {
  return (

    <>
        <Routes>
          <Route path="/" element={<PageLayout/>}>
            <Route path="" element={<Home />} />
            <Route path="cart" element={<div>cart Detail</div>} />
            <Route path="/searchPage/:id" element={<SearchPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
        </Routes>
    </>


  )

}

export default App;
