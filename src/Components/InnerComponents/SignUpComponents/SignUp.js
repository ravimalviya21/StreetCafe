import React, {useEffect, useRef} from 'react';
import lottie from 'lottie-web'
import {Link, useNavigate} from 'react-router-dom';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const SignUp = () =>
{
    const lottieWeb = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
            lottie.loadAnimation({
                container : lottieWeb.current,
                loop : true,
                autoplay : true,
                renderer : 'svg',
                animationData : require('../../../Images/Animation/signup.json')
            })
    }, [] )
    
    return(
        <React.Fragment>
            <div className="login-container">
                <div>
                    <div>
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
                            <div className="display-4 text-capitalize">sign up</div>
                        </div>
                        </div>
                        <div className="login-inner-container">
                            <form className="text-capitalize">
                                <div className="signup-inner-container d-flex flex-column justify-content-between">
                                    <div className="d-flex flex-column justify-content-evenly">
                                    <div className="input-email d-flex flex-column justify-content-evenly">
                                        <div><label>enter your name</label></div>
                                        <div><input name="email" type="email"></input></div>
                                    </div>
                                    <div className="input-pass d-flex flex-column justify-content-evenly">
                                        <div><label>password</label></div>
                                        <div><input name="password" type="password"></input></div>
                                    </div>
                                    <div className="input-pass d-flex flex-column justify-content-evenly">
                                        <div><label>re-enter password</label></div>
                                        <div><input name="password" type="password"></input></div>
                                    </div>
                                    <div className="input-pass d-flex flex-column justify-content-evenly">
                                        <div><label>enter your email</label></div>
                                        <div><input name="password" type="password"></input></div>
                                    </div>
                                    <div className="input-pass d-flex flex-column justify-content-evenly">
                                        <div><label>enter your phone number</label></div>
                                        <div><input name="password" type="password"></input></div>
                                    </div>
                                    <div className="input-pass d-flex flex-column justify-content-evenly">
                                        <div><label>enter your address</label></div>
                                        <div><input name="password" type="password"></input></div>
                                    </div>
                                    <div className="input-pass d-flex flex-column justify-content-evenly">
                                        <div><label>city</label></div>
                                        <div><input name="password" type="password"></input></div>
                                    </div>
                                    <div className="input-pass d-flex flex-column justify-content-evenly">
                                        <div><label>pin code</label></div>
                                        <div><input name="password" type="password"></input></div>
                                    </div>
                                    </div>
                                    <div className="d-flex flex-column justify-content-evenly">
                                        <div onClick={() => navigate('/confirmation') } className="login-button d-flex align-items-center justify-content-center text-white"><div>sign up</div></div>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="d-flex align-items-center justify-content-evenly">
                                                <div><i class="fab fa-google"></i></div>
                                                <div>Sign Up with google</div>
                                            </div>
                                        </div>
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
export default SignUp;