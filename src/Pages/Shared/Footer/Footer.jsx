import { Link } from "react-router-dom";
import logo from '../../../assets/images/logo.png'
import fbIcon from '../../../assets/images/social/facebook.svg'
import twIcon from '../../../assets/images/social/twitter.svg'
import liIcon from '../../../assets/images/social/linkedin.svg'

const Footer = () => {
    return (
        <footer className="bg-black py-8">
            <div className="container">
                <footer className="footer p-10 text-white text-lg">
                    <div>
                        <Link to='/'>
                            <img src={logo} alt="" className="w-26" />
                        </Link>
                        <p className="mt-5">Kids Zone is popular online shop <br /> for kids to buy and sell kids sports toys.</p>
                    </div>
                    <div>
                        <span className="footer-title opacity-75">Menu</span>
                        <Link to='/' className="link link-hover">Home</Link>
                        <Link to='/all-toys' className="link link-hover">All Toys</Link>
                        <Link to='/blogs' className="link link-hover">Blogs</Link>
                        <Link to='/register' className="link link-hover">Register</Link>
                        <Link to='/login' className="link link-hover">Login</Link>
                    </div>
                    <div>
                        <span className="footer-title opacity-75">Contact Us</span>
                        <p className="flex gap-3 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <a href="tel:01735919028">01735919028</a>
                        </p>
                        <p className="flex gap-3 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                            </svg>
                            <a href="mailto:theasad.dev@gmail.com">theasad.dev@gmail.com</a>
                        </p>
                        <p className="flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>

                            890/3 Ziaraakhi
                            <br />
                            Kushtia - 7000
                            <br />
                            Dhaka, Bangladesh
                        </p>

                    </div>
                    <div>
                        <span className="footer-title opacity-75">Follow Us</span>
                        <div className="social flex gap-5">
                            <a href="#">
                                <img src={fbIcon} alt="" className="w-10 hover:opacity-70 transition-all" />
                            </a>
                            <a href="#">
                                <img src={twIcon} alt="" className="w-10 hover:opacity-70 transition-all" />
                            </a>
                            <a href="#">
                                <img src={liIcon} alt="" className="w-10 hover:opacity-70 transition-all" />
                            </a>
                        </div>
                    </div>
                </footer>
                <div className="footer-credit text-center text-white border-t border-neutral-700 pt-8">
                    <p>&copy; All rights Reserved by Asaduzzaman Ali. Made for Assignment 11 in pHero</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;