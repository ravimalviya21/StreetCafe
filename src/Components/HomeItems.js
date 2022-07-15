import React, {useRef} from 'react';
import Slider from "react-slick";
import {cup, Bag} from './Items';
import {user1, user2, user3, user4, user5, t1, t2, t3, Avatar20, Avatar17, Avatar16,
Avatar18, Avatar19, Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, cafe1, cafe2, cafe3, cafe4
} from '../Images';
import HomeImg from '../Images/HomeImg.svg';
import Like from '../Icons/Like.svg';
import Logo from '../Icons/Logo.svg';
import Shield from '../Icons/Shield.svg';
import first from '../Images/first.svg'
import middle from '../Images/middle.svg'
import last from '../Images/last.svg'

var settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows : false,
  };
var template = {
    dots : false,
    infinite : true,
    slidesToShow : 1,
    slidesToScroll : 1,
    arrows :false,
    autoplay : true,
    autoPlaySpeed : 300
}
var test = {
    dots : false, 
    infinite : false,
    slidesToShow : 2,
    slidesToScroll : 1,
    arrows : false,
    speed : 600
}
const HomeItems = () =>
{
    const users =  [ {user : user1}, {user : user3}, {user : user5}, {user: user4}, {user : user2} ]
    const offerTemplate = [ {img : t1}, {img: t2}, {img : t3} ]

    const testimonial = [{desc : "Had An Wonderful Experience There With Food And Environment. The Staff Is Very Quick. The Food Is So Good That You'll Feel Like Home There. I Will Surly Go There Again And Suggest Everyone To Give It A Visit.", img : Avatar1, name : "ruchi malviya"},
    {desc : "Had An Wonderful Experience There With Food And Environment. The Staff Is Very Quick. The Food Is So Good That You'll Feel Like Home There. I Will Surly Go There Again And Suggest Everyone To Give It A Visit.", img : Avatar2, name : "Aakash"},
    {desc : "Had An Wonderful Experience There With Food And Environment. The Staff Is Very Quick. The Food Is So Good That You'll Feel Like Home There. I Will Surly Go There Again And Suggest Everyone To Give It A Visit.", img : Avatar3, name : "Katheterine"},
    {desc : "Had An Wonderful Experience There With Food And Environment. The Staff Is Very Quick. The Food Is So Good That You'll Feel Like Home There. I Will Surly Go There Again And Suggest Everyone To Give It A Visit.", img : Avatar4, name : "ruchika"},
    {desc : "Had An Wonderful Experience There With Food And Environment. The Staff Is Very Quick. The Food Is So Good That You'll Feel Like Home There. I Will Surly Go There Again And Suggest Everyone To Give It A Visit.", img : Avatar5, name : "abhimanyu"},
    {desc : "Had An Wonderful Experience There With Food And Environment. The Staff Is Very Quick. The Food Is So Good That You'll Feel Like Home There. I Will Surly Go There Again And Suggest Everyone To Give It A Visit.", img : Avatar16, name : "Lattie john"},
    {desc : "Had An Wonderful Experience There With Food And Environment. The Staff Is Very Quick. The Food Is So Good That You'll Feel Like Home There. I Will Surly Go There Again And Suggest Everyone To Give It A Visit.", img : Avatar17, name : "anand maheshwari"},
    {desc : "Had An Wonderful Experience There With Food And Environment. The Staff Is Very Quick. The Food Is So Good That You'll Feel Like Home There. I Will Surly Go There Again And Suggest Everyone To Give It A Visit.", img : Avatar18, name : "oliver queen"},
    {desc : "Had An Wonderful Experience There With Food And Environment. The Staff Is Very Quick. The Food Is So Good That You'll Feel Like Home There. I Will Surly Go There Again And Suggest Everyone To Give It A Visit.", img : Avatar19, name : "aarzoo"}
]

    const slider = useRef();
    const testimonial_slider = useRef();
    const item =
 [
    {name : "capiccino", img : cup, icon :Bag, ratings : "4.5 (8712)", price : 578, caption : "with oth milk" },
{name : "capiccino", img : cup, icon :Bag, ratings : "4.5 (8712)", price : 578, caption : "with oth milk" },
{name : "capiccino", img : cup, icon :Bag, ratings : "4.5 (8712)", price : 578, caption : "with oth milk" },
{name : "capiccino", img : cup, icon :Bag, ratings : "4.5 (8712)", price : 578, caption : "with oth milk" },
{name : "capiccino", img : cup, icon :Bag, ratings : "4.5 (8712)", price : 578, caption : "with oth milk" },
{name : "capiccino", img : cup, icon :Bag, ratings : "4.5 (8712)", price : 578, caption : "with oth milk" },

                    ]
    return(
        <React.Fragment>
            <div className="container-fluid">
                    <div className="row w-100 home justify-content-between"> 
                        <div className="offset-1 h-100 d-flex flex-column justify-content-evenly col-5">
                            <div className="row head-slogan1">
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
                                <div className="col-6 extras">
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

        {/* ------------ TOP RATED SECTION ----------------- */}
            
        
           <div className="top-rated-outer" >
               <div className="top-rated-inner">
                   <div className="heading-arrow">
                       <div className="heading">
                           <div>top rated</div>
                           <div>a cup of coffee in the morning sets you up for the rest of the day</div>
                       </div>
                       <div className="controls-outer">
                           <div onClick={() => slider.current.slickPrev() } className="left-control">
                           <i className="fas fa-chevron-left"></i>
                           </div>
                           <div onClick={() => slider.current.slickNext() } className="right-control">
                           <i class="fas fa-chevron-right"></i>
                           </div>
                       </div>
                   </div>
               </div>
             <div className="top-rated-items">
                    <Slider ref={slider} {...settings}>
                     { item.map((x) =>  
                     <div className="items-slide-new">
                         <div className="items-inner">
                             <div className="items-inner2">
                                 <div>
                                    <div className="item-card-circle">
                                    <img src={x.img} style={{width : "6.5rem"}}></img>
                                    </div>
                                    <div className="item-card">
                                        <div className="d-flex flex-column justify-content-evenly align-items-center">
                                           <div className="upper-details text-start d-flex flex-column align-items-center justify-content-evenly">
                                               <div className="fs-3 w-100 fw-light">{x.name}</div>
                                               <div className="text-muted w-100">{x.caption}</div>
                                               <div className="fw-bolder fs-5 w-100">₹{x.price}/-</div>
                                           </div>
                                           <div className="ratings w-100 align-self-end text-end">
                                               <div className="fw-50 text-capitalize fs-5">{x.ratings}</div>
                                           </div>
                                        </div>
                                    </div>
                                    <div className="item-buy-button d-flex align-items-center justify-content-center">
                                        <img src={x.icon} style={{width : "2rem"}}></img>
                                    </div>
                                </div>
                            </div>
                         </div>
                     </div>
                     ) }
                    </Slider>
                </div>
           </div>

        
        {/* -----------------  DEALS SECTION ------------------------ */}


           <div className="top-rated-outer">
           <div className="top-rated-inner">
                   <div className="heading-arrow">
                       <div className="heading">
                           <div>today's deal</div>
                           <div>coffee time, anytime</div>
                       </div>
                   </div>
            </div>
            <div className="offer-template d-flex justify-content-center">
                <Slider {...template}>
                    {
                        offerTemplate.map((x) => 
                        <div>
                            <img src={x.img}></img>
                        </div>
                        )
                    }
                </Slider>
            </div>
           </div>

    {/* ------------------- TRENDING SECTION ----------------- */}

           <div className="top-rated-outer" >
               <div className="top-rated-inner">
                   <div className="heading-arrow">
                       <div className="heading">
                           <div>trending</div>
                           <div>let's make your day!</div>
                       </div>
                       <div className="controls-outer">
                           <div onClick={() => slider.current.slickPrev() } className="left-control">
                           <i className="fas fa-chevron-left"></i>
                           </div>
                           <div onClick={() => slider.current.slickNext() } className="right-control">
                           <i class="fas fa-chevron-right"></i>
                           </div>
                       </div>
                   </div>
               </div>
             <div className="top-rated-items">
                    <Slider ref={slider} {...settings}>
                     { item.map((x) =>  
                     <div className="items-slide-new">
                         <div className="items-inner">
                             <div className="items-inner2">
                                 <div>
                                    <div className="item-card-circle">
                                    <img src={x.img} style={{width : "6.5rem"}}></img>
                                    </div>
                                    <div className="item-card">
                                        <div className="d-flex flex-column justify-content-evenly align-items-center">
                                           <div className="upper-details text-start d-flex flex-column align-items-center justify-content-evenly">
                                               <div className="fs-3 w-100 fw-light">{x.name}</div>
                                               <div className="text-muted w-100">{x.caption}</div>
                                               <div className="fw-bolder fs-5 w-100">₹{x.price}/-</div>
                                           </div>
                                           <div className="ratings w-100 align-self-end text-end">
                                               <div className="fw-50 text-capitalize fs-5">{x.ratings}</div>
                                           </div>
                                        </div>
                                    </div>
                                    <div className="item-buy-button d-flex align-items-center justify-content-center">
                                        <img src={x.icon} style={{width : "2rem"}}></img>
                                    </div>
                                </div>
                            </div>
                         </div>
                     </div>
                     ) }
                    </Slider>
                </div>
           </div>

            {/* ------------------- POPULAR SECTION ------------------- */}

           <div className="top-rated-outer" >
               <div className="top-rated-inner">
                   <div className="heading-arrow">
                       <div className="heading">
                           <div>popular</div>
                           <div>better coffee! less bucks</div>
                       </div>
                       <div className="controls-outer">
                           <div onClick={() => slider.current.slickPrev() } className="left-control">
                           <i className="fas fa-chevron-left"></i>
                           </div>
                           <div onClick={() => slider.current.slickNext() } className="right-control">
                           <i class="fas fa-chevron-right"></i>
                           </div>
                       </div>
                   </div>
               </div>
             <div className="top-rated-items">
                    <Slider ref={slider} {...settings}>
                     { item.map((x) =>  
                     <div className="items-slide-new">
                         <div className="items-inner">
                             <div className="items-inner2">
                                 <div>
                                    <div className="item-card-circle">
                                    <img src={x.img} style={{width : "6.5rem"}}></img>
                                    </div>
                                    <div className="item-card">
                                        <div className="d-flex flex-column justify-content-evenly align-items-center">
                                           <div className="upper-details text-start d-flex flex-column align-items-center justify-content-evenly">
                                               <div className="fs-3 w-100 fw-light">{x.name}</div>
                                               <div className="text-muted w-100">{x.caption}</div>
                                               <div className="fw-bolder fs-5 w-100">₹{x.price}/-</div>
                                           </div>
                                           <div className="ratings w-100 align-self-end text-end">
                                               <div className="fw-50 text-capitalize fs-5">{x.ratings}</div>
                                           </div>
                                        </div>
                                    </div>
                                    <div className="item-buy-button d-flex align-items-center justify-content-center">
                                        <img src={x.icon} style={{width : "2rem"}}></img>
                                    </div>
                                </div>
                            </div>
                         </div>
                     </div>
                     ) }
                    </Slider>
                </div>
           </div>
        {/* -----------------  FEATURES SECTION ------------------- */}
           <div className="top-rated-outer">
               <div className="features-text d-flex flex-column align-items-center">
                   <div>order your coffee</div>
                   <div>in just 3 steps</div>
               </div>
               <div className="d-flex align-items-center justify-content-between">
                   <div className="d-flex flex-column align-items-center justify-content-evenly">
                       <div><img src={first}></img></div>
                       <div>choose your coffee</div>
                       <div className="text-muted">Our Website is user-friendly<br></br> you can order 
                       your coffee by<br></br> just following 3 simple steps</div>
                   </div>
                   <div className="d-flex flex-column align-items-center justify-content-evenly">
                       <div><img src={middle}></img></div>
                       <div>wait for 15 minutes</div>
                       <div className="text-muted">Our Website is user-friendly<br></br> you can order 
                       your coffee by<br></br> just following 3 simple steps</div>
                   </div>
                   <div className="d-flex flex-column align-items-center justify-content-evenly">
                       <div><img src={last}></img></div>
                       <div>coffee at your door</div>
                       <div className="text-muted">Our Website is user-friendly<br></br> you can order 
                       your coffee by<br></br> just following 3 simple steps</div>
                   </div>
               </div>
           </div>


            {/* ------------------ TESTIMONIAL SECTION ------------------- */}

            <div className="top-rated-outer">
            <div className="top-rated-inner">
                   <div className="testimonial justify-content-center position-relative">
                       <div className="heading d-flex flex-column align-items-center">
                           <div>testimonials</div>
                           <div>some reviews by our customers!</div>
                       </div>
                       <div className="controls-outer position-absolute end-0">
                           <div onClick={() => testimonial_slider.current.slickPrev() } className="left-control">
                           <i className="fas fa-chevron-left"></i>
                           </div>
                           <div onClick={() => testimonial_slider.current.slickNext() } className="right-control">
                           <i class="fas fa-chevron-right"></i>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="top-rated-items testimonial-slider">
                  <Slider ref={testimonial_slider} {...test}>
                      {
                          testimonial.map((x) =>
                          <div className="position-absolute h-100">
                              <div className="d-flex review-card-outer align-items-end position-relative justify-content-center">
                       <div className="review-card-inner d-flex align-items-end justify-content-center">
                           <div className="w-75 h-75 d-flex flex-column justify-content-evenly">
                               <div className="text-muted text-start">{x.desc}</div>
                                <div>{x.name}</div>
                           </div>
                       </div>
                       <div className="position-absolute rounded-circle img-bg"><img src={x.img}></img></div>
                   </div>
                          </div>
                          )
                      }
                  </Slider>
               </div>
            </div>


            {/* ------------------------------- PARTNERSHIP SECTION ------------------ */}

            <div className="top-rated-outer">
                <div className="top-rated-inner">
                <div className="testimonial justify-content-center">
                       <div className="heading d-flex flex-column align-items-center">
                           <div>our partners</div>
                           <div>we have been always a trusting brand</div>
                       </div>
                   </div>
                </div>
                <div className="top-rated-items d-flex justify-content-evenly align-items-center h-50 opacity-75">
                    <img src={cafe1}></img>
                    <img src={cafe2}></img>
                    <img src={cafe3}></img>
                    <img src={cafe4}></img>
                </div>
            </div>
 
           {/* -----------------------------------  FOOTER SECTION ---------------------------------- */}
                    
            <div className="top-rated-outer footer-section d-flex justify-content-end w-100">
                <div className="top-rated-items d-flex align-items-center w-100 h-50">
                    <div className="h-50 w-100 d-flex align-items-start justify-content-evenly">
                    <div><img src={Logo}></img></div>
                    <div>
                        <ul>
                        <li>contact info</li>
                        <li>email</li>
                        <li>phone</li>
                        <li>tele ph.</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                        <li>our services</li>
                        <li>store</li>
                        <li>tracking</li>
                        <li>report a bug</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                        <li>our company</li>
                        <li>get in touch with us</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                        <li>address</li>
                        <li className="text-white">121 King St, VIC3000,<br></br> US 888-123-42278 <br></br> info@example.com</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default HomeItems;