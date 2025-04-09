import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import {MdDarkMode, MdLightMode, MdPerson} from "react-icons/md"
import Aos from "aos"
import "aos/dist/aos.css"
import Footer from './Component/Footer'

const Layout = () => {
  const [darkMode, setDarkmode] = useState(true)
useEffect(() => {
    Aos.init({duration:2000})
}, [])
useEffect(() => {
      const doc = document.body
      if(darkMode){
        doc.classList.add("dark")
      }else{
        doc.classList.remove('dark')
      }
}, [darkMode])
  return (
    <>
    <div class="w-screen pb-10 min-h-screen  bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <ul class="flex z-30 text-sm font-medium shadow-black/10 shadow-md fixed top-0 right-0 left-0 text-center gap-2 text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">
      
      <div data-aos="slide-left" className='flex w-1/2 gap-3 pl-3 items-center'>
         <Link to={"/"}>
            <button type="button"  class="py-4 pl-2 text-gray-700 text-md rounded-ss-lg dark:bg-gray-800 dark:text-gray-300">Sabaton</button>
        </Link>
      </div>
      <div className='w-1/2 flex gap-3 justify-end pr-6 items-center'>
        <button onClick={() => setDarkmode((prev) => !prev)} type="button" class="p-2 cursor-pointer grid bg-gray-200 place-items-center rounded-full dark:bg-gray-600 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">{darkMode ? <MdLightMode /> : <MdDarkMode />}</button>
        <Link to={"/profile"} class="p-[3px] cursor-pointer grid bg-gray-200 place-items-center text-2xl rounded-full dark:bg-gray-600 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"><MdPerson /></Link>
      </div>
        
    </ul>
     <div className='w-full h-auto'>
      
    <Outlet />
    <Footer />
    </div>
</div>
    </>
  )
}

export default Layout