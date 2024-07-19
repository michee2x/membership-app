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
        "All Basic Fan Card Benefits", "Early access to contert tickets", "Signed CD or Vinyl", "Personalized thank-you video from Alex"
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
<div style={{backgroundImage:"url(https://media.istockphoto.com/id/1317441636/photo/portrait-of-young-beautiful-girl-in-headphones-isolated-over-dark-background.jpg?s=612x612&w=0&k=20&c=SgJMZnqE1pXVUxnzbmiwm5LA72qOLGIp-aU2cvV2crs=)"}} className="text-center mt-12 mb-8 relative w-[90%] mx-auto h-[20rem] bg-gradient-to-tr from-gray-900 to-blue-900 rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
<div className='w-full relative h-full '>
      <h2 data-aos="fade-up" className="mb-3 text-xl mx-auto bg-gradient-to-tl from-blue-600 to-white text-transparent bg-clip-text max-w-md md:text-2xl font-extrabold tracking-normal pt-7 text-gray-700">Welcome to Alex Terrible's VIP fan membership Card Signup</h2>
            <p data-aos="fade-down" className="mb-3 w-full font-bold translate-x-[50%] bg-gradient-to-l from-blue-800 to-white text-transparent bg-clip-text text-xs bottom-0 absolute">
              sign up for membership plans and enjoy its benefit
            </p>
</div>
            
</div>
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
