import React from 'react';
import cup from '../Images/cup.png';
import Bag from '../Icons/Bag.svg';

 const Slider = () => 
{
    return(
        <React.Fragment>
          <div className="top-rated-items">
              <div className="slider">
                  <div className="slider-item">
                      <div className="slider-image text-capitalize d-flex align-items-center justify-content-center">
                          <div><img src={cup}></img></div>
                      </div>
                      <div className="slider-item-inner d-flex align-items-center justify-content-center">
                          <div className="d-flex flex-column justify-content-between">
                          <div className="h3">Capucinno</div>
                          <div className="text-muted">with oth milk</div>
                          <div className="h5">₹578/-</div>
                          <div className="align-self-end">4.5 (8712)</div>
                          </div>
                      </div>
                      <div className="bag d-flex align-items-center justify-content-center">
                          <img src={Bag}></img>
                      </div>
                  </div>
                  <div className="slider-item">
                      <div className="slider-image text-capitalize d-flex align-items-center justify-content-center">
                          <div><img src={cup}></img></div>
                      </div>
                      <div className="slider-item-inner d-flex align-items-center justify-content-center">
                          <div className="d-flex flex-column justify-content-between">
                          <div className="h3">Capucinno</div>
                          <div className="text-muted">with oth milk</div>
                          <div className="h5">₹578/-</div>
                          <div className="align-self-end">4.5 (8712)</div>
                          </div>
                      </div>
                      <div className="bag d-flex align-items-center justify-content-center">
                          <img src={Bag}></img>
                      </div>
                  </div>
                  <div className="slider-item">
                      <div className="slider-image text-capitalize d-flex align-items-center justify-content-center">
                          <div><img src={cup}></img></div>
                      </div>
                      <div className="slider-item-inner d-flex align-items-center justify-content-center">
                          <div className="d-flex flex-column justify-content-between">
                          <div className="h3">Capucinno</div>
                          <div className="text-muted">with oth milk</div>
                          <div className="h5">₹578/-</div>
                          <div className="align-self-end">4.5 (8712)</div>
                          </div>
                      </div>
                      <div className="bag d-flex align-items-center justify-content-center">
                          <img src={Bag}></img>
                      </div>
                  </div>
                  <div className="slider-item">
                      <div className="slider-image text-capitalize d-flex align-items-center justify-content-center">
                          <div><img src={cup}></img></div>
                      </div>
                      <div className="slider-item-inner d-flex align-items-center justify-content-center">
                          <div className="d-flex flex-column justify-content-between">
                          <div className="h3">Capucinno</div>
                          <div className="text-muted">with oth milk</div>
                          <div className="h5">₹578/-</div>
                          <div className="align-self-end">4.5 (8712)</div>
                          </div>
                      </div>
                      <div className="bag d-flex align-items-center justify-content-center">
                          <img src={Bag}></img>
                      </div>
                  </div>
              </div>
          </div>
        </React.Fragment>
    )
}
export default Slider;