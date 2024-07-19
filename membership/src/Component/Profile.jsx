import React, { useRef, useState } from 'react'
import { MdPerson, MdLogout } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Profile = () => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))?.loggedUser
  
  return (
    <div className='w-full h-screen'>
      <div className='mt-[6rem] relative w-full h-full flex flex-col items-center'>
        <span className={`${!loggedUser?.profilepic ? "p-2" : "p-0"} flex justify-center cursor-pointer w-24 shadow-black/30 shadow-md  rounded-full h-24 bg-gray-300`}>
         {!loggedUser?.profilepic && <MdPerson className='text-[4.5rem] text-gray-400'/>}
         {loggedUser?.profilepic && (<img src={loggedUser?.profilepic} className='w-full h-full object-center object-cover rounded-full'/>)}
          </span>
        <p className='text-gray-700 mt-5 font-bold text-2xl tracking-widest dark:text-gray-300'>{loggedUser?.firstname || loggedUser?.lastname ? `${loggedUser?.firstname} ${loggedUser?.lastname}` : "user has no name yet"}</p>
        <p className='text-gray-600 mt-2 font-semibold text-md dark:text-gray-400'>{loggedUser?.email}</p>
        <p className='text-gray-600 mt-5 font-semibold text-md dark:text-gray-400'>{loggedUser?.bio ? loggedUser?.bio : "user has no bio yet"}</p>
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
