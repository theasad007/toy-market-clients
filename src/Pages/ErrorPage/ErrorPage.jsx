import { Link } from 'react-router-dom';
import errorImg from '../../assets/images/404.jpg'

const ErrorPage = () => {
    return (
        <div className="container h-screen text-center flex flex-col items-center justify-center">
            <img src={errorImg} alt="" className='mx-auto' />
            <Link to='/'><button className='btn h-auto flex gap-2 items-center py-3 px-12 text-center mx-auto mt-10 bg-transparent border-pink-100 border-2 text-black hover:bg-pink-100 hover:text-white hover:border-pink-100'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
                Back to Home
            </button></Link>
        </div>
    );
};

export default ErrorPage;