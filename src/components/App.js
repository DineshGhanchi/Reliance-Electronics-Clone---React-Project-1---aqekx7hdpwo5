import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header/Header";
import { Home } from "./Home/Home";
import {Routes, Route} from "react-router-dom"
import PageLayout from './PageLayout/PageLayout';


function App() {
  return (

    <>
        <Routes>
          <Route path="/" element={<PageLayout/>}>
            <Route path="" element={<Home />} />
            <Route path="cart" element={<div>cart Detail</div>} />
          </Route>
          <Route path="login" element={<div>this is login page</div>} />
        </Routes>
    </>


  )

}

export default App;
