import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { quantityHandling, removeFromCart } from '../../Features/Cart/cartSlice';
import { Link } from 'react-router-dom';

const PaymentCart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [isDisabled, setIsDisabled] = useState(true);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
  
    const totalCount = () => {
      let total = 0;
      cart.map((item) => {
        total += item.price * item.quantity;
      })
      setTotalPrice(total.toFixed(2));
    }
  
    useEffect(() => {
      /* The `totalCount()` function in the provided code snippet calculates the total price of all items
      in the cart by iterating over each item in the `cart` array and summing up the product of the
      item's price and quantity. The calculated total price is then set in the component's state using
      `setTotalPrice(total.toFixed(2));`, ensuring that it is displayed with two decimal places. */
      totalCount();
  
      /* This code snippet is checking the length of the `cart` array. If the length is greater than 0
      (meaning there are items in the cart), it sets the `isDisabled` state to `false`. This likely
      controls the disabled state of a button or element in the UI based on whether there are items in
      the cart or not. If the cart is empty (length is 0), it sets the `isDisabled` state to `true`,
      which would typically disable the button or element. */
      if(cart.length > 0)
        setIsDisabled(false);
      else
        setIsDisabled(true);
  
      /* The code snippet `cart.forEach(item => {
        if(item.quantity < 1)
          dispatch(removeFromCart(item.id));
      });` is iterating over each item in the `cart` array and checking if the `quantity` of the item
      is less than 1. If the quantity is less than 1 (meaning it's 0 or negative), it dispatches an
      action to remove that item from the cart using the `removeFromCart` action creator with the
      `item.id` as the parameter. */
      cart.forEach(item => {
        if(item.quantity < 1)
          dispatch(removeFromCart(item.id));
      });
    },[cart])
  
    const removeCart = (id) => {
      dispatch(removeFromCart(id))
    }
  
    const quantity = (id, num) => {
      dispatch(quantityHandling({id: id, num: num}));
    }
  
    return (
      <div className='w-[44%] px-6 py-5 bg-[#fff4bd] h-[90vh] fixed top-[10vh] right-0'>
        <div className='h-full flex flex-col justify-between'>
          <h1 className='font-bold text-2xl h-[5%]'>
              Cart
          </h1>
          <div className='h-[75%] bg-white overflow-y-scroll'>
            {
              cart.map((item) => {
                return(
                  <div key={item.id} className='flex justify-between my-5'>
                    <div
                      className='w-[20%] bg-contain bg-center bg-no-repeat'
                      style={{backgroundImage:`url(${item.image})`}}
                    ></div>
                    <div className='flex flex-col w-[55%]'>
                      <h1 className='font-semibold text-sm'>{item.title}</h1>
                      <p className='font-bold text-green-500'>
                        <span><i className="fa-solid fa-dollar-sign"></i></span> {item.price}
                      </p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <button
                        disabled={true}
                        onClick={() => quantity(item.id, -1)}
                        className='bg-red-100 px-3 rounded-md'
                      >
                        <i className="fa-solid fa-minus text-sm font-bold"></i>
                      </button>
                      <p className='font-bold'>{item.quantity}</p>
                      <button
                        disabled={true}
                        onClick={() => quantity(item.id, +1)}
                        className='bg-green-100 px-3 rounded-md'
                      >
                        <i className="fa-solid fa-plus text-sm font-bold"></i>
                      </button>
                    </div>
                    <div className='flex items-center'>
                      <button 
                        disabled={true}
                        className='bg-red-100 px-1.5 py-1 rounded-lg'
                        onClick={() => removeCart(item.id)}
                      >
                        <i className="fa-solid fa-trash text-rose-700"></i>
                      </button>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='flex justify-center'>
              <h1 className='font-bold text-xl'>
                <span>Total: </span> 
                <span> <i className="fa-solid fa-dollar-sign"></i> {totalPrice}</span>
              </h1>
          </div>
          <div className='flex justify-center'>
              <Link to="/">
                <button 
                  className={`${isDisabled ? "bg-[#daffd9]" : "bg-[#8eff8c] hover:bg-[#63ff60]"} text-lg font-bold px-5 py-2 rounded-xl`}
                  disabled={isDisabled}
                >
                    Go Back To Shopping
                </button>
              </Link>
          </div>
        </div>
      </div>
    )
}

export default PaymentCart
