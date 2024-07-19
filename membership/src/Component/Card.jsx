import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { Link } from 'react-router-dom'

const Card = ({content}) => {
  const cat = "th, the,"
  const cats = cat.replace(",", "")

    useEffect(() => {
        Aos.init({duration:2000})
    }, [])
  return (
    

<div data-aos="fade-up" data-aos-duration="3000" class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-black/20 shadow-md sm:p-8 dark:bg-gray-900 dark:border-gray-700">
<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{content.plan}</h5>
<div class="flex items-baseline text-gray-900 dark:text-white">
<span class="text-3xl md:text-5xl font-semibold">$</span>
<span class="text-3xl font-extrabold tracking-tight">{content.price}</span>
<span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
</div>
<ul role="list" class="space-y-5 my-7">
{content.benefits.map((e) => {
    return (
        <li class="flex items-center">
<svg class="flex-shrink-0 w-4 h-4 text-gray-900 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{e}</span>
</li>
    )
})}
</ul>
<Link to={`/membership/${content.plan}`}><button type="button" class="text-white bg-gray-900 hover:dark:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">SignUp</button>
</Link>
</div>

  )
}

export default Card
