import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { inputHandling } from '../../Features/Cart/cartSlice'
import logo from '../../Images/logo.png'

const Navbar = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handaleInput = () => {
        dispatch(inputHandling(input.toLowerCase()));
    }
  return (
    <nav className='h-[10vh] bg-[#0b0b0b] px-5 flex justify-between items-center sticky top-0 z-50'>
        <Link to="/">
            <div
                className='h-[10vh] w-[12vw] bg-contain bg-center bg-no-repeat'
                style={{backgroundImage:`url(${logo})`}}
            ></div>
        </Link>
        <div className='text-white'>
            <ul className='flex gap-10 font-bold text-xl'>
                <NavLink to="/" className={({isActive}) => `${isActive ? "text-orange-500" : "text-white"}`}>
                    <li>Home</li>
                </NavLink>
                <NavLink to="/contact" className={({isActive}) => `${isActive ? "text-orange-500" : "text-white"}`}>
                    <li>Contact</li>
                </NavLink>
                <NavLink to="/about" className={({isActive}) => `${isActive ? "text-orange-500" : "text-white"}`}>
                    <li>About</li>
                </NavLink>
            </ul>
        </div>
        <div className='h-[5vh] flex'>
            <input 
                type="text" 
                name="" 
                id="" 
                placeholder="Search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent outline-none border-white border text-white text-lg pl-3 border-r-0 h-full rounded-xl rounded-r-none"
            />
            <button
                onClick={handaleInput}
                className='bg-[#925ff0] text-white px-3 hover:bg-[#8749fa] h-full rounded-xl rounded-l-none'
            >
                <i className="fa-solid fa-magnifying-glass text-lg"></i>
            </button>
        </div>
    </nav>
  )
}

export default Navbar
