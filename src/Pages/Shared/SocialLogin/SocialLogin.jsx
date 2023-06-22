
import { useContext } from 'react';
import googleLogo from '../../../assets/images/google.svg'
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const {setUser, googleLogin} = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const user = result.user;
            setUser(user)
            console.log(user)
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
            navigate(from, {replace: true});

        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='mt-8'>
            <button onClick={handleGoogleLogin} className='btn flex gap-3 w-full h-auto py-4 font-bold items-center bg-neutral-200 border-neutral-400 hover:border-pink-100 hover:bg-neutral-200 text-black'> <img src={googleLogo} alt="" className='w-5' /> Continue With Google</button>
        </div>
    );
};

export default SocialLogin;