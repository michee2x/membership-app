import React, { useEffect, useState } from 'react'
import Card from './Card'
import {Navigate} from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css" 

const Body = ({children}) => {
const [navigate, setNavigate] = useState(false)
const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))?.loggedUser

const [data, setData] = useState([
    {plan:"Basic Fan Card", price:300, benefits:[
        "Personalized signed photo of Alex Terrible", "Access to exclusive fan Content", "10% discount on merchandise"
    ]},
    {plan:"Silver Membership", price:450, benefits:[
        "All Basic Fan Card Benefits", "Early access to concert tickets", "Signed CD or Vinyl", "Personalized thank-you video from Alex"
    ]},
    {plan:"Gold Membership", price:600, benefits:[
        "All silver Membership benefits", "Meet-and-greet at a concert (one event)", "Signed guitar pick or drumstick", "Exclusive Gold Membership t-shirt"
    ]},
    {plan:"Platinum Membership", price:1000, benefits:[
        "All Gold Membership benefits", "Private Online Q&A session with Alex", "Signed poster or artbook", "Priority access to VIP experience"
    ]},
    {plan:"Ultimate Fan Package", price:1500, benefits:[
        "All Platinum Membership benefits", "Personalized video message from Alex", "Signed Sirenia memorabilia (e.g drumhead, guitar)", "Backstage tour and meet-and-greet at a concert (one event)"
    ]}
])


useEffect(() => {
        Aos.init({duration:2000})
    }, [])

if(!loggedUser){
  return <Navigate to={"/auth"}/>
}
  return (
    
<div className='w-screen h-full'>
<div style={{backgroundImage:"url(https://i.imgur.com/atBPDbj.jpeg)", backgroundPosition:'center', backgroundSize:'cover'}} className="text-center mt-12 mb-8 relative w-full mx-auto h-[20rem] rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
<div className='w-full relative h-full '>
      <h2 data-aos="fade-down" className="mb-3 translate-x-[50%] bottom-0 absolute text-lg mx-auto text-white max-w-md md:text-2xl font-extrabold tracking-normal pt-5 text-gray-700">Alex Terrible's VIP fan membership Card Signup</h2>
            
</div>
            
</div>
<p data-aos="fade-up" className="mb-5 font-bold w-full px-7 text-center mt-3 text-blue-300 text-xs ">
              Here are the different categories of Alex Terrible's VIP fan membership cards, along with their prices and benefits:
            </p>
<div className='grid h-full w-full pt-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center '>
      {data.map((e) => {
        return (
            <Card content={e}/>
        )
      })}

    
    </div>
    <div data-aos="fade-up" className='w-full mt-5 p-3 text-center dark:text-white/80 text-gray-900 h-auto'>
        please note that prices and benefits may vary depending on the country, region or promotion.
    </div>
</div>

  )
}

export default Body
