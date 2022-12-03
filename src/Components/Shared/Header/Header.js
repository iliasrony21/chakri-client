import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/joblogo.png'

const Header = () => {
  return (
    <div className=''>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/home'>Home</Link>
              </li>
              <li tabIndex={0}>
                <a>
                  Find a job
                  <svg
                    className='fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                  >
                    <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                  </svg>
                </a>
                <ul className='p-2'>
                  <li>
                    <Link>Job Lists</Link>
                  </li>
                  <li>
                    <Link to='/catagories'>Job Catagories</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/blogs'>Blogs</Link>
              </li>
              <li>
                <Link to='/contact'>Contact us</Link>
              </li>
            </ul>
          </div>
          <img className='w-20 h-20 ml-5 mt-5' src={logo} alt='logo' />
          <a className=' text-4xl font-bold text-secondary  ml-[-15px]'>
            Chakri.com
          </a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li tabIndex={0}>
              <a>
                Find a job
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                >
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </a>
              <ul className='p-2'>
                <li>
                  <Link>Job Lists</Link>
                </li>
                <li>
                  <Link to='/catagories'>Job Catagories</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/about'>About us</Link>
            </li>
            <li>
              <Link to='/blogs'>Blogs</Link>
            </li>
            <li>
              <Link to='/contact'>Contact us</Link>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          <Link className='underline hover:text-primary' to='/signup'>
            Register
          </Link>
          <Link
            to='/signin'
            className='btn w-28 bg-primary text-white ml-9 mr-28 border-none hover:bg-white hover:text-primary outline hover:outline-2'
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
