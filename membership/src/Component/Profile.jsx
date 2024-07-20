import React, { useRef, useState, useEffect } from 'react'
import { MdPerson, MdLogout } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Profile = () => {
  const [user, setUser] = useState({})

useEffect(() => {
  const setUserProfile = async () => {
try{
  const res = await fetch("https://membership-backend-5qrm.onrender.com/userprof",{
credentials:"include"
})

if(res.ok){
const data = await res.json()
const loggedUser = data.loggedUser
setUser(loggedUser)
}
}catch(error){
console.log(error)
}
}

setUserProfile()

}, [])
  
  return (
    <div className='w-full h-screen'>
      <div className='mt-[6rem] relative w-full h-full flex flex-col items-center'>
        <span className={`${!user?.profilepic ? "p-2" : "p-0"} flex justify-center cursor-pointer w-24 shadow-black/30 shadow-md  rounded-full h-24 bg-gray-300`}>
         {!user?.profilepic && <MdPerson className='text-[4.5rem] text-gray-400'/>}
         {user?.profilepic && (<img src={loggedUser?.profilepic} className='w-full h-full object-center object-cover rounded-full'/>)}
          </span>
        <p className='text-gray-700 mt-5 font-bold text-2xl tracking-widest dark:text-gray-300'>{loggedUser?.firstname || loggedUser?.lastname ? `${user?.firstname} ${user?.lastname}` : "user has no name yet"}</p>
        <p className='text-gray-600 mt-2 font-semibold text-md dark:text-gray-400'>{user?.email}</p>
        <p className='text-gray-600 mt-5 font-semibold text-md dark:text-gray-400'>{user?.bio ? user?.bio : "user has no bio yet"}</p>
        <div className='h-60 w-60 mt-5 flex gap-5 rounded-lg shadow-black/30 shadow-md'></div>
        <div className='w-full flex gap-5 justify-center mt-10'>
          <Link to={"/auth"} className=' shadow-black/30 shadow-md w-32 h-10 bg-gray-900 text-gray-100 rounded-lg bottom-5 flex items-center gap-1 justify-center'><MdLogout /> logout</Link>
      <Link to={"/edit"} className=' shadow-black/30 shadow-md w-32 h-10 bg-gray-900 text-gray-100 rounded-lg bottom-15 flex items-center gap-1 justify-center'><MdPerson /> edit</Link>
      
      </div>
          
      </div>
    </div>
  )
}

export default Profile
