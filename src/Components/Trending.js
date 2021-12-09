import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Slider from './Slider'

const Trending = () => 
{
    return(
        <React.Fragment>
           <div className="top-rated-outer">
               <div className="top-rated-inner">
                   <div className="heading-arrow">
                       <div className="heading">
                           <div>top rated</div>
                           <div>a cup of coffee in the morning sets you up for the rest of the day</div>
                       </div>
                       <div className="controls-outer">
                           <div>
                           <i class="fas fa-chevron-left"></i>
                           </div>
                           <div>
                           <i class="fas fa-chevron-right"></i>
                           </div>
                       </div>
                   </div>
               </div>
             <Slider></Slider>
           </div>
        </React.Fragment>
    )
}
export default Trending;