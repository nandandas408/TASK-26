import React from 'react'

const Cash = () => {
  return (
    <div className='border-2 border-black rounded-3xl px-6 py-5'>
        <form 
            action=""
            className='flex flex-col gap-5' 
            onSubmit={(e) => e.preventDefault()}
        >
            <div className='flex flex-col gap-2'>
                <label 
                    htmlFor="number"
                    className='text-2xl font-medium font-serif'
                >
                    Enter your card number:
                </label>
                <input 
                    type="number" 
                    id="number" 
                    name="number"
                    required
                    placeholder='1111 2222 3333 4444'
                    className='px-3 rounded-xl w-[50%] h-10 outline-none'
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label 
                    htmlFor="exp"
                    className='text-2xl font-medium font-serif'
                >
                    Enter your card's expiry date:
                </label>
                <input 
                    type="date" 
                    name="exp" 
                    id="exp" 
                    required
                    className='px-3 rounded-xl w-[50%] h-10 outline-none'
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label 
                    htmlFor="cvv"
                    className='text-2xl font-medium font-serif'
                >
                    Enter your CVV:
                </label>
                <input 
                    type="number" 
                    name="cvv" 
                    id="cvv" 
                    placeholder='123'
                    required
                    className='px-3 rounded-xl w-[50%] h-10 outline-none'
                />
            </div>
            <div className='flex justify-center'>
                <button
                    className='bg-[#ffd100] w-[50%] py-3 rounded-3xl text-lg outline-none'
                >
                    Continue
                </button>
            </div>
        </form>
    </div>
  )
}

export default Cash
