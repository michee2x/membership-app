import React, {useEffect, useRef} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { useParams } from 'react-router-dom'

const Membership = () => {
    const {cat} = useParams()
    const ref = useRef(null)
    useEffect(() => {
    Aos.init({duration:2000})
    if(ref.current){
        ref.current.scrollIntoView({behavior:"smooth"})
    }
}, [])
  return (
    <div data-aos="fade-down" className='w-full pt-20 min-h-screen bg-white/200 dark:bg-gray-800'>
      <div ref={ref} className='flex w-full flex-col items-center'>
        <p data-aos="fade" className='text-gray-500 py-4  font-medium tracking-wider dark:text-white/70'>Signup for {cat}</p>
        <div className='text-gray-800 font-medium tracking-wider dark:text-white/70'>
        <span className='font-bold text-2xl dark:text-white/90'>$72.00</span> per month
      </div>
      </div>
    <form className='w-full flex flex-col justify-center items-center lg:w-[40%] lg:mx-auto mt-5 h-auto'>
        <input type="email" required placeholder='Email' className='w-[90%]  px-5 py-1 text-gray-700 dark:text-gray-400
         rounded-lg h-10 bg-gray-200 dark:bg-gray-900 outline-none border-2 border-[#afafaf] dark:border-gray-700'/>
         <label className='w-[90%] mx-auto h-auto'>
           <p className='py-2 mt-3 text-gray-700 dark:text-gray-400'> Card information</p>
          <input type="text" required placeholder='1234 1234 1234 1234' className=' px-5 py-1 text-gray-700 dark:text-gray-400
         rounded-lg h-10 w-full bg-gray-200 dark:bg-gray-900 outline-none border-[1.2px] border-[#afafaf] dark:border-gray-700'/>
         </label>
         <label className='w-full flex justify-center h-auto'>
            <input type="text" required placeholder='MM / YY' className='w-[45%] px-5 py-1 text-gray-700 dark:text-gray-400
         rounded-lg h-10 bg-gray-200 dark:bg-gray-900 outline-none border-[1.2px] border-[#afafaf] dark:border-gray-700'/>
         <input type="text" placeholder='CVC' className='w-[45%] px-5 py-1 text-gray-700 dark:text-gray-400
         rounded-lg h-10 bg-gray-200 dark:bg-gray-900 outline-none border-[1.5px] border-[#afafaf] dark:border-gray-700'/>
         </label>
         <label className='w-[90%] mx-auto h-auto'>
           <p className='py-2 mt-3 text-gray-700 dark:text-gray-400'> Cardholder name</p>
          <input type="text" required placeholder='Full name on card' className='w-full px-5 py-1 text-gray-700 dark:text-gray-400
         rounded-lg h-10 bg-gray-200 dark:bg-gray-900 outline-none border-[1.2px] border-[#afafaf] dark:border-gray-700'/>
         </label>
         <label className='w-[90%] mx-auto h-auto'>
           <p className='py-2 mt-3 text-gray-700 dark:text-gray-400'> Country or region</p>
          <input type="text" required placeholder='Nigera' className='w-full px-5 py-1 text-gray-700 dark:text-gray-400
         rounded-lg h-10 bg-gray-200 dark:bg-gray-900 outline-none border-[1.2px] border-[#afafaf] dark:border-gray-700'/>
         </label>

         <button type='submit' className='w-[90%] mt-10 rounded-lg h-10 bg-black grid place-items-center text-white/70 dark:bg-blue-900'>Sign Up</button>
        <div className='text-gray-700 w-[90%] text-center dark:text-gray-400 mt-10 text-xs md:text-sm lg:text-md'>
            By confirming your membership signup, you allow <span className='text-gray-900 font-sans dark:text-gray-400 font-semibold ml-1'>slaughter to prevail</span> to charge you for future payments in accordance 
            with their terms. You can always cancel your subscription. By placing your order, you agree to our <span className='underline mr-1'>Terms of service</span> 
             and <span className='underline'>Privacy Policy</span>
        </div>
        <p className='text-gray-700 dark:text-gray-400 text-center mt-14 w-[90%]'>Powered by <span className='text-gray-800 dark:text-gray-400 font-semibold'>stripe</span></p>
    </form>
      
    </div>
  )
}

export default Membership
