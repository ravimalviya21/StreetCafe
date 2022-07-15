import React from 'react';
import "./CSS/bootstrap.css";
import "./CSS/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './Header';
import HomeItems from './Components/HomeItems';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Store from './Components/InnerComponents/Store'
import Deals from './Components/InnerComponents/Deals'
import AboutUs from './Components/InnerComponents/AboutUs'
import LogIn from './Components/InnerComponents/LogInComponents/LogIn';
import SignUp from './Components/InnerComponents/SignUpComponents/SignUp';
import ForgetPassWord from './Components/InnerComponents/LogInComponents/ForgetPassWord';
import UpdatePassWord from './Components/InnerComponents/LogInComponents/UpdatePassWord';
import Confirmation from './Components/InnerComponents/SignUpComponents/Confirmation';


const App = () => {

    return(
        <React.Fragment>
            <Router>
                <Header></Header>

                <Routes>
                    <Route path="/" element={<HomeItems></HomeItems>}></Route>
                    <Route path="/store" element={<Store></Store>}></Route>
                    <Route path="/deals" element={<Deals></Deals>}></Route>
                    <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
                    <Route path="/login" element={<LogIn></LogIn>}></Route>
                    <Route path="/signup" element={<SignUp></SignUp>}></Route>
                    <Route path="/password" element={<ForgetPassWord></ForgetPassWord>}></Route>
                    <Route path="/updatepassword" element={<UpdatePassWord></UpdatePassWord>}></Route>
                    <Route path="/confirmation" element={<Confirmation></Confirmation>}></Route>
                </Routes>
            </Router>
        </React.Fragment>
    )
}

export default App;