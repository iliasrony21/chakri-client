import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'
import banner1 from '../../../images/banner1.png'
import banner2 from '../../../images/banner2.png'
import icon1 from '../../../images/icon1.png'
import icon2 from '../../../images/icon2.png'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { MdFmdGood } from 'react-icons/md'
import { FaRegKeyboard } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className=''>
      <div className='all-part flex '>
        <div className='document-part w-50% mt-24 ml-20'>
          <span className='text-6xl text-secondary font-bold mr-2'>The</span>
          <span className='text-6xl font-bold text-primary '>Easiest Way</span>
          <br />
          <span className='text-6xl text-secondary font-bold '>
            to Get Your New Job
          </span>
          <br />
          <br />
          <span className='text-justify text-xl mb-5 '>
            Each month, more than 3 million job seekers turn to <br /> website
            in their search for work, making over 140,000 <br /> applications
            every single day
          </span>
          <br />
          <div className='job-keyword mt-3'>
            <span className='font-bold'>Trending job keywords: </span>
            <span>
              <Link className='btn btn-primary btn-xs ml-2 w-32 text-xs mr-2 '>
                Web Developer
              </Link>
            </span>
            <span>
              <Link className='btn btn-primary btn-xs  w-32 text-xs mr-2'>
                Data Entry
              </Link>
            </span>
            <span>
              <Link className='btn btn-primary btn-xs  w-32 text-xs mr-2'>
                Android
              </Link>
            </span>
            <span>
              <Link className='btn btn-primary btn-xs   w-32 text-xs'>
                Ios Developer
              </Link>
            </span>
          </div>
          <div className='search '>
            <div className='search-main flex w-9/12 h-16 p-2 pl-5 mt-5 bg-white rounded-lg drop-shadow-2xl'>
              <div className='industries'>
                <HiOutlineBriefcase className='mt-4 ml-[-2px] fixed' />
                <select className='select select-ghost w-32 max-w-xs'>
                  <option disabled selected>
                    Industries
                  </option>
                  <option>Software</option>
                  <option>Finance</option>
                  <option>Management</option>
                  <option>Advertising</option>
                  <option>Development</option>
                  <option>Recruting</option>
                </select>
              </div>
              <div className='location'>
                <MdFmdGood className='fixed mt-4' />
                <select className='select select-ghost w-32 max-w-xs'>
                  <option>Location</option>
                  <option>BANGLADESH</option>
                  <option>INDIA</option>
                  <option>USA</option>
                  <option>NEPAL</option>
                  <option>PHILIPINE</option>
                  <option>PAKISTAN</option>
                  <option>KORIA</option>
                </select>
              </div>
              <div className='searchinput'>
                <FaRegKeyboard className='fixed mt-4 ' />
                <input
                  type='text'
                  placeholder='Catagories'
                  className='input input-ghost w-32 max-w-xs ml-2'
                />
              </div>
              <div className='searchBtn'>
                <button className='btn border-none hover:bg-white hover:text-primary outline hover:outline-2 bg-primary w-32 h-10'>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='picture-part relative w-50% ml-[-20px]'>
          <div className='moving'>
            <img className='ml-28 mt-20 w-10/12' src={banner1} alt='' />
          </div>
          <div className='icon1'>
            <img
              className='absolute bottom-0 right-[-40px] top-28 '
              src={icon1}
              alt=''
            />
          </div>
          <div className='icon2'>
            <img
              className='absolute left-52 bottom-[-70px]'
              src={icon2}
              alt=''
            />
          </div>
          <div className='banner2'>
            <img
              className='absolute bottom-0 top-96 left-96 right-0'
              src={banner2}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
