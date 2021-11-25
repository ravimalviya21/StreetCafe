import React from 'react';
import Logo from './Icons/Logo.svg';
import ShoppingCart from './Icons/ShoppingCart.svg';
import HomeImg from './Images/HomeImg.svg';
import Like from './Icons/Like.svg';
import Shield from './Icons/Shield.svg';
import {user1, user2, user3, user4, user5} from './Images';

const Header = () => {
    const users =  [ {user : user1}, {user : user3}, {user : user5}, {user: user4}, {user : user2} ]
    return(
        <React.Fragment>
                <div className="header"> 
                        <div className="logo">
                            <img src={Logo}></img>
                        </div>

                        <div className="nav">
                            <div className="nav-inner">
                                <div>
                                    <div>home</div>
                                    <div>store</div>
                                    <div>deals</div>
                                    <div>about us</div>
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
                            <div className="login-bg">
                                log in
                            </div>
                        </div>
                </div>
                <div className="container-fluid">
                    <div className="row w-100 vh-100 justify-content-between"> 
                        <div className="offset-1 h-75 d-flex flex-column justify-content-evenly col-5">
                            <div className="row">
                                <p className="head-slogan display-5">
                                wake up your<br></br>taste buds.

                                </p>
                            </div>
                            <div className="row head-slogan2 text-center">
                                <p>relax. refresh, recharge!</p>
                            </div>
                            <div className="row order-outer">
                                <div className="col-6">
                                    <div className="order-now text-capitalize">
                                        order now
                                    </div>
                                </div>
                            </div>
                            <div className="row extras">
                                <div className="col-6">
                                    <div className="row left-extra">
                                        <div className="col-1">
                                            <img src={Shield}></img>
                                        </div>
                                        <div className="col-10">
                                            100% secure checkout
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="row left-extra">
                                        <div className="col-2">
                                            <img src={Like}></img>
                                        </div>
                                        <div className="col-10 d-flex text-capitalize">
                                            24x7 available
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row users">
                                    <div className=" users-inner">
                                        <div className="user-profile">
                                            {
                                                users.map((x) => 
                                            <div className="user-circle">
                                                <img src={x.user}></img>
                                            </div>
                                                    )    }
                                        </div>
                                        <div className="user-reviews text-capitalize">
                                        <span>4500+</span><br></br>
                                        Happy Customers
                                        </div>
                                    </div>
                
                            </div>
        
                        </div>


                        <div className="col-6" style={{overflowX : "hidden"}}>
                                 <img src={HomeImg} style={{width : "115%"}}></img>
                          
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}
export default Header;