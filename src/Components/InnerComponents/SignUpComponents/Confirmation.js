import React, {useEffect, useRef} from 'react';
import lottie from 'lottie-web'
import {Link, useNavigate} from 'react-router-dom';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Confirmation = () =>
{
    const lottieWeb = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
            lottie.loadAnimation({
                container : lottieWeb.current,
                loop : true,
                autoplay : true,
                renderer : 'svg',
                animationData : require('../../../Images/Animation/confirmation.json')
            })
    }, [] )
    
    return(
        <React.Fragment>
            <div className="login-container">
                <div className="d-flex justify-content-center">
                    <div className="w-50">
                        <div ref={lottieWeb}>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="d-flex justify-content-between flex-column">
                        <div>
                        <div className="cross position-relative">
                            <div onClick={() => { navigate('/') } } className="d-flex position-absolute top-0 end-0 align-items-center justify-content-center">
                                <CloseRoundedIcon sx={{fontSize : 35, fontWeight : 50}}></CloseRoundedIcon>
                            </div>
                        </div>
                        <div className="login-head">
                            <div className="display-4 text-capitalize">Confirmation</div>
                        </div>
                        </div>
                        <div className="login-inner-container">
                            <form className="text-capitalize">
                                <div className="confirmation-inner-container d-flex flex-column justify-content-evenly">
                                    <div className="d-flex flex-column justify-content-evenly">
                                    <div className="input-email d-flex flex-column justify-content-evenly">
                                        <div><label>enter your code</label></div>
                                        <div><input name="email" type="email"></input></div>
                                    </div>
                               
                                    </div>
                                    <div className="d-flex flex-column justify-content-evenly">
                                    
                                        <div onClick={() => navigate('/updatepassword') } className="login-button d-flex align-items-center justify-content-center text-white"><div>finish</div></div>
                                        
                                    </div>  
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Confirmation;