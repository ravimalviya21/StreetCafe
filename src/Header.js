import React, {useState, useEffect} from 'react';
import Logo from './Icons/Logo.svg';
import ShoppingCart from './Icons/ShoppingCart.svg';
import {Link, useLocation, useNavigate} from 'react-router-dom'

const Header = () => {

    const[visible, setVisible] = useState(true);
    const navigate = useLocation();
    const login = useNavigate();

    
    useEffect(() => 
    {
        if(navigate.pathname == "/")
        {   
            setVisible(true);
        }
    } ,[navigate.pathname])

    function toggleNav()
    {
        console.log("called")
        login('/login')
        setVisible(false)
    }

    return(
        <React.Fragment>
            {
                visible ? 
                <div className="header"> 
                        <div className="logo">
                            <img src={Logo}></img>
                        </div>

                        <div className="nav">
                            <div className="nav-inner">
                                <div>
                                   <Link to="/"> <div>home</div></Link>
                                   <Link to="/store"> <div>store</div> </Link>
                                   <Link to="/deals"> <div>deals</div> </Link>
                                   <Link to="/aboutUs"> <div>aboutUs</div> </Link>
                                </div>
                            </div>
                        </div>

                        <div className="cart">
                            <div className="cart-inner-bg">
                                <img src={ShoppingCart}></img>

                            </div>
                            <div className="cart-badge">3</div>
                        </div> 

                        <div className="login">
                            <div onClick={() => toggleNav()} className="login-bg">
                                {/* <Link>Log in</Link> */} log in
                            </div>
                        </div>
                </div>
          : null  }
        </React.Fragment>
    )
}
export default Header;