import React, {useEffect, useRef} from 'react';
import lottie from 'lottie-web'
import {Link, useNavigate} from 'react-router-dom';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const ForgetPassWord = () =>
{
    const lottieWeb = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
            lottie.loadAnimation({
                container : lottieWeb.current,
                loop : true,
                autoplay : true,
                renderer : 'svg',
                animationData : require('../../../Images/Animation/forgetpassword.json')
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
                            <div className="display-4 text-capitalize">forget password</div>
                        </div>
                        </div>
                        <div className="login-inner-container">
                            <form className="text-capitalize">
                                <div className="forget-inner-container d-flex flex-column justify-content-evenly">
                                    <div className="d-flex flex-column justify-content-evenly">
                                    <div className="input-email d-flex flex-column justify-content-evenly">
                                        <div><label>enter email address</label></div>
                                        <div><input name="email" type="email"></input></div>
                                    </div>
                                    <div className="login-button d-flex align-items-center justify-content-center text-white"><div>sign up</div></div>
 
                               
                                    </div>
                                    <div className="d-flex opacity-50 flex-column justify-content-evenly">
                                    <div className="input-email d-flex flex-column justify-content-evenly">
                                        <div className="w-100 d-flex justify-content-between"><label>enter 6 digit code</label><label>5:00</label></div>
                                        <div><input name="email" type="number"></input></div>
                                    </div>
                                        <div onClick={() => navigate('/updatepassword') } className="reset-button .bg-danger d-flex align-items-center justify-content-center text-white"><div>reset</div></div>
                                        
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
export default ForgetPassWord;