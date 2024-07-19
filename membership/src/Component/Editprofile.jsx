import React, {useRef, useState} from 'react'
import {MdPerson} from "react-icons/md"
import { Navigate } from 'react-router-dom'

const Editprofile = () => {

  const fileRef = useRef(null)
  const [file, setFile] = useState("")
  const [img, setImg] = useState("")
  const [data, setData] = useState({
    email:"", password:"", confirmpassword:"", firstname:"", lastname:"", bio:""
  })
  const [navigate, setNavigate] = useState(false)

  const setFiles = (e) => {
    const File = e.target.files[0]
    setFile(File)
    if(File){
      const image = URL.createObjectURL(File)
      setImg(image)
    }
  }
  const clicker = () => {
    fileRef.current.click()
  }

  const submitForm = async (e) => {
    e.preventDefault()
    try{
        const form = new FormData()
        form.append("email", data.email)
        form.append("password", data.password)
        form.append("confirmpassword", data.confirmpassword)
        form.append("firstname", data.firstname)
        form.append("lastname", data.lastname)
        form.append("bio", data.bio)
        form.append("img", file)

        console.log(data,form)
        const res = await fetch("https://membership-backend-5qrm.onrender.com/editprofile", {
            method:"POST",
            body:form,
            credentials:"include"
        })

        if(res.ok){
        const data = await res.json()
        const newUser = data.newUserInfo
              localStorage.setItem("loggedUser", JSON.stringify(newUser))
        setNavigate(true)
        }

    } catch (error){
        console.log("there is an error in editprofile component", error)
    }
  }

  if(navigate){
    return <Navigate to={"/profile"} />
  }
  return (
    <div className='min-h-screen w-full bg-gray-200 dark:bg-gray-800'>


<form className="max-w-md px-10 mx-auto lg:p-0" onSubmit={submitForm}>
    <div className={`${!img ? "p-2" : "p-0"} flex mt-16 mx-auto mb-10 justify-center cursor-pointer w-24 shadow-black/30 shadow-md  rounded-full h-24 bg-gray-300`} onClick={clicker}>
         {!img && <MdPerson className='text-[4.5rem] text-gray-400'/>}
         {img && (<img src={img} className='w-full h-full object-center object-cover rounded-full'/>)}
        <input ref={fileRef} type="file" className='hidden' onChange={setFiles}/>
          </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={data.email} onChange={(e) => setData({...data, email:e.target.value})} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="password" value={data.password} onChange={(e) => setData({...data, password:e.target.value})} name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="password" value={data.confirmpassword} onChange={(e) => setData({...data, confirmpassword:e.target.value})} name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" value={data.firstname} onChange={(e) => setData({...data, firstname:e.target.value})} name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" value={data.lastname} onChange={(e) => setData({...data, lastname:e.target.value})} name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>

<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your bio</label>
<textarea id="message" value={data.bio} onChange={(e) => setData({...data, bio:e.target.value})} rows="4" class="block mb-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

  
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit profile</button>
</form>

    </div>
  )
}

export default Editprofile