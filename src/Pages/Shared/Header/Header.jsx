
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {
    const { logOut, user } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log Out Successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate('/')
            })
    }
    const menuItems = <>
        <li><ActiveLink to='/'>Home</ActiveLink></li>
        <li><ActiveLink to='/all-toys'>All Toys</ActiveLink></li>
        {
            user && <>
                <li><ActiveLink to='/my-toys'>My Toys</ActiveLink></li>
                <li><ActiveLink to='/add-a-toy'>Add a Toy</ActiveLink></li>
            </>
        }
        <li><ActiveLink to='/blogs'>Blog</ActiveLink></li>
    </>
    return (
        <header>
            <div className="container">
                <div className="navbar py-5">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    menuItems
                                }
                            </ul>
                        </div>
                        <Link className="">
                            <img src={logo} alt="" className=' w-10 md:w-20' />
                        </Link>

                    </div>
                    <div className="navbar-end w-full">
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {
                                    menuItems
                                }
                                {
                                    !user && <Link to='/login' className='ml-4'>
                                        <button className='w-full btn py-3 px-5 font-bold text-base leading-none h-auto bg-pink-100 border-2 border-pink-100 hover:bg-pink-200 hover:border-pink-200'>Login</button>
                                    </Link>
                                }
                            </ul>
                        </div>
                        {
                            user && <>
                                <div className="dropdown dropdown-end ms-6">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} title={user?.displayName}/>
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                            </a>
                                        </li>
                                        <li><a onClick={handleLogOut}> Logout</a></li>
                                    </ul>
                                </div>
                            </>
                        }

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;