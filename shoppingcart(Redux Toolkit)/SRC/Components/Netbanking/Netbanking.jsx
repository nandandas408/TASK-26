import React from 'react'

const Netbanking = () => {
  return (
    <div className='border-2 border-black rounded-3xl px-6 py-5'>
        <form 
            action=""
            className='flex flex-col gap-5' 
            onSubmit={(e) => e.preventDefault()}
        >
            <div className='flex flex-col gap-2'>
                <label 
                    htmlFor="bank"
                    className='text-2xl font-medium font-serif'
                >
                    Enter your bank name
                </label>
                <input 
                    type="text" 
                    id="bank" 
                    name="bank"
                    required
                    placeholder='State Bank Of India'
                    className='px-3 rounded-xl w-[50%] h-10 outline-none'
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label 
                    htmlFor="mail"
                    className='text-2xl font-medium font-serif'
                >
                    Enter your email:
                </label>
                <input 
                    type="email" 
                    name="mail" 
                    id="mail" 
                    placeholder='abc@gmail.com'
                    required
                    className='px-3 rounded-xl w-[50%] h-10 outline-none'
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label 
                    htmlFor="pass"
                    className='text-2xl font-medium font-serif'
                >
                    Enter your password:
                </label>
                <input 
                    type="password" 
                    name="pass" 
                    id="pass" 
                    placeholder='************'
                    autoComplete='true'
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

export default Netbanking
