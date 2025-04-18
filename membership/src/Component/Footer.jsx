import React,{useEffect} from 'react'
import Aos from "aos"
import "aos/dist/aos.css" 

const Footer = () => {
useEffect(() => {
        Aos.init({duration:2000})
    }, [])
  return (
<footer data-aos="fade-up" className="bg-white mb-5 rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 hidden" alt="Flowbite Logo" />
                <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">Sabaton</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://slaughter-to-prevail.onrender.com" className="hover:underline">Sabaton™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer