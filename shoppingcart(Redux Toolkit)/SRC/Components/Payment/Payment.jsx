import React, { useState } from 'react'
import Cash from '../Cash/Cash'
import Netbanking from '../Netbanking/Netbanking'

const Payment = () => {
    const [isCreditCard, setIsCreditCard] = useState(true);
    return (
        <div className='w-[50%] bg-[#fff4bd] px-12 py-10 mt-4 ml-8 rounded-3xl'>
            <div className='flex justify-center gap-20 mb-8'>
                <div className='flex items-center gap-1.5'>
                    <input 
                        type="radio" 
                        name="payment" 
                        id="online" 
                        checked={isCreditCard}
                        onChange={() => setIsCreditCard(!isCreditCard)}
                    />
                    <label htmlFor="online" className='font-bold text-2xl'>Credit Card</label>
                </div>
                <div className='flex items-center gap-1.5'>
                    <input 
                        type="radio" 
                        name="payment" 
                        id="cash" 
                        checked={!isCreditCard}
                        onChange={() => setIsCreditCard(!isCreditCard)}
                    />
                    <label htmlFor="cash" className='font-bold text-2xl'>Net Banking</label>
                </div>
            </div>
            <div>
                {
                    isCreditCard ? <Cash /> : <Netbanking />
                }
            </div>
        </div>
    )
}

export default Payment
