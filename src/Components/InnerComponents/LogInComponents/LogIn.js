import React, {useEffect, useRef} from 'react';
import lottie from 'lottie-web'
import {Link, useNavigate} from 'react-router-dom';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const LogIn = () =>
{
    const lottieWeb = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
            lottie.loadAnimation({
                container : lottieWeb.current,
                loop : true,
                autoplay : true,
                renderer : 'svg',
                animationData : require('../../../Images/Animation/login.json')
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
                            <div className="display-4 text-capitalize">log in</div>
                        </div>
                        </div>
                        <div className="login-inner-container">
                            <form className="text-capitalize">
                                <div className="d-flex flex-column justify-content-between">
                                    <div>
                                    <div className="input-email d-flex flex-column justify-content-evenly">
                                        <div><label>enter email</label></div>
                                        <div><input name="email" type="email"></input></div>
                                    </div>
                                    <div className="input-pass d-flex flex-column justify-content-evenly">
                                        <div><label>password</label></div>
                                        <div><input name="password" type="password"></input></div>
                                    </div>
                                    <div className="w-100 d-flex justify-content-between text-white">
                                        <div className="d-flex justify-content-between">
                                            <div><i class="fas fa-check-circle"></i></div>
                                            <div>remember me ?</div>
                                        </div>
                                        <div onClick={() => navigate('/password') } className="text-decoration-underline">forget password?</div>
                                    </div>
                                    </div>
                                    <div className="d-flex flex-column justify-content-evenly">
                                        <div className="login-button d-flex align-items-center justify-content-center text-white"><div>log in</div></div>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="d-flex align-items-center justify-content-evenly">
                                                <div><i class="fab fa-google"></i></div>
                                                <div>log in with google</div>
                                            </div>
                                        </div>
                                        <div className="text-center text-decoration-underline"><Link to="/signup">don't have an account ?</Link></div>
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
export default LogIn;