import React, { useEffect } from 'react'
import './Card.css'
import {useDispatch} from 'react-redux';
import { addToCart } from '../../Features/Cart/cartSlice';

const Card = ({data}) => {

  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(addToCart({data:{...data,quantity:1}, id:data.id}));
  }
  let img = "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  return (
    <div className='card w-[45%] h-[60vh] bg-white rounded-xl'>
      <div
        style={{backgroundImage: `url(${data.image})`}}
        className='h-[50%] bg-contain bg-center bg-no-repeat rounded-t-xl'
      ></div>
      <div className='h-[50%] px-5 py-5 flex flex-col justify-between'>
        <h1 className='text-[1.1vw] font-bold leading-5'>{data.title}</h1>
        <h1 className='font-bold text-lg text-green-500'>
          <span><i className="fa-solid fa-dollar-sign"></i></span> {data.price}
        </h1>
        <div>
          <span >
            <i className="fa-solid fa-star text-[#ffa200]"></i>
          </span>
          <span >
            <i className="fa-solid fa-star text-[#ffa200]"></i>
          </span>
          <span>
            <i className="fa-solid fa-star text-[#ffa200]"></i>
          </span>
          <span >
            <i className="fa-solid fa-star text-[#ffa200]"></i>
          </span>
          <span >
            <i className="fa-solid fa-star text-[#ffa200]"></i>
          </span>
        </div>
        <div className='flex justify-center'>
          <button 
            className='bg-[#a3fda1] hover:bg-[#70fe6e] w-full py-2 text-lg rounded-lg font-bold'
            onClick={addCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
