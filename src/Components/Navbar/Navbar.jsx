import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img from '../../ProductImage/images.jpg'

const Navbar = () => {
    const { user, logoutUser } = useAuth()
    console.log(user);
    const handelLogOutBtn = () => {
        logoutUser()
    }
    return (
<<<<<<< HEAD
        <div className='lg:mx-10 md:mx-5 mx-3'>
=======
        <div className='mx-10'>
>>>>>>> c058ccc4e2bb36fbc1d054f3a69c453e25d3a281
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
<<<<<<< HEAD
                            <NavLink className='text-lg font-medium' to='/'>Home</NavLink>
                            <NavLink className='text-lg font-medium' to='/product'>Product</NavLink>
                            <NavLink className='text-lg font-medium' to='/add-product'>Add Product</NavLink>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-16 h-16 rounded-full max-sm:hidden' src={img} alt="" />
=======
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className='flex gap-0 items-center'>
                        <img className='w-16 h-16 rounded-full' src={img} alt="" />
>>>>>>> c058ccc4e2bb36fbc1d054f3a69c453e25d3a281
                        <a className="btn btn-ghost text-2xl">Crazy Shop</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        <NavLink className='text-lg font-medium' to='/'>Home</NavLink>
                        <NavLink className='text-lg font-medium' to='/product'>Product</NavLink>
                        <NavLink className='text-lg font-medium' to='/add-product'>Add Product</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <div className="dropdown dropdown-end">
<<<<<<< HEAD
                        <div tabIndex={0} role="button" className="md:w-14 md:h-14 w-12 h-12 rounded-full">
                            <div className="">
                                <img
                                    className="md:w-14 md:h-14 w-12 h-12 rounded-full"
=======
                        <div tabIndex={0} role="button" className="w-14 h-14 rounded-full">
                            <div className="">
                                <img
                                    className="w-14 h-14 rounded-full"
>>>>>>> c058ccc4e2bb36fbc1d054f3a69c453e25d3a281
                                    src={user?.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-24 p-2 shadow">
                            <li>
                                <Link>Profile</Link>
                            </li>
                            <li><Link to='/'><button onClick={handelLogOutBtn}>Sign Out</button></Link></li>
                        </ul>
                    </div>
                        : <Link to='/register'><button className='bg-'>Sign Up</button></Link>}
                </div>
            </div >
        </div>
    );
};

export default Navbar;