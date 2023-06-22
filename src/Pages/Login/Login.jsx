
import PageBanner from '../Shared/PageBanner/PageBanner';
import logo from '../../assets/images/logo.png'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const [showHide, setShowHide] = useState(true);
    const [errorMessage, setErrorMessage] = useState([])
    const handleSHowHide = () => {
        setShowHide(!showHide)
    }

    const { emailLogin } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        emailLogin(email, password)
            .then(() => {
                // const user = result.user;
                // console.log(user)
                navigate(from, {replace: true})
                toast.success('Login Successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(error => {
                console.log(error)
                setErrorMessage(error.message)
            })

    }
    return (
        <div className='login-page'>
            <PageBanner>
                Login
            </PageBanner>
            <div className="login-wrap py-20">
                <div className="container">
                    <div className="login-box w-6/12 mx-auto p-20 bg-gray rounded-md">
                        <div className="site-logo text-center">
                            <img src={logo} alt="" className='w-28 mx-auto' />
                        </div>
                        <SocialLogin></SocialLogin>
                        <div className="divider py-8">OR</div>
                        <div className="user-pass">
                            <form onSubmit={handleLogin}>
                                <div className="input-wrap mb-4">
                                    <input type="email" name="email" placeholder='Your Email' className='w-full border border-neutral-300 py-3 px-4 rounded-md text-lg focus:outline-none hover:border-neutral-500 focus:border-pink-100 transition-all placeholder:text-neutral-500 text-black' required />
                                </div>

                                <div className="relative input-wrap mb-8">
                                    <input type={showHide === false ? 'text' : 'password'} name='password' placeholder='Enter Password' className='w-full border border-neutral-300 py-3 px-4 rounded-md text-lg focus:outline-none hover:border-neutral-500 focus:border-pink-100 transition-all placeholder:text-neutral-500 text-black' required />
                                    <label onClick={handleSHowHide} className='flex justify-end gap-3 mt-2 cursor-pointer absolute top-2 right-3 z-10'>
                                        {showHide === true ? <><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg></> : <><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                        </>}</label>
                                </div>

                                <div className="btn-wrap">
                                    <input type="submit" value="Login" className='w-full btn py-3 px-5 font-bold text-base leading-none h-auto bg-pink-100 border-2 border-pink-100 hover:bg-pink-200 hover:border-pink-200' />
                                </div>
                                <p className='text-[#990000] text-xl text-center mt-5'>{errorMessage}</p>

                            </form>
                        </div>
                        <h2 className='text-center mt-5 font-bold'>Have Not Any Account? <Link to='/register'><span className='text-blue'>Create Here</span></Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;