import React, { useState } from 'react'
import {Navigate} from "react-router-dom"

const Auth = () => {
const [showpass, setShowPass] = useState(false)
const [logging, setLogging] = useState(false)
const [login, setLogin] = useState(true)
const [data, setData] = useState({email:"", password:""})
const [navigate, setNavigate] = useState(false)

const Login_Signin = async (e) => {
  e.preventDefault()
  console.log("this is the time to login", data)
  try{

    const res = await fetch(`https://membership-backend-5qrm.onrender.com/auth/${login ? "login" : "signin"}`, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        ...data
      }),
      credentials:"include"
    })
    
    if(res.ok){
      const data = await res.json()
      console.log("this is the loggedIn user", data.loggedUser)
      localStorage.setItem("loggedUser", JSON.stringify(data))
      setNavigate(true)
    }

  }catch (error) {
    console.log("this is the error that occured in Auth component", error)
  }
}

if(navigate){
  return <Navigate to={"/"} />
}
  return (
    <section className="bg-gray-50 w-full  h-screen dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex flex-col items-center gap-3 mb-6 text-xl font-semibold text-gray-900 dark:text-white">
          <img className="w-24 h-24 object-cover object-center rounded-full mr-2" src="https://i.imgur.com/SgniKuu.jpeg" alt="logo" />
          Burning witches    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl mb-10 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  {login ? "Login to your account" : "Sign up to slaughter to prevail"}
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={Login_Signin}>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" required value={data.email} onChange={(e) => setData({...data, email:e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type={showpass ?  "text" : "password"} value={data.password} onChange={(e) => setData({...data, password:e.target.value})} required placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" onClick={() => setShowPass(prev => !prev)}/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 dark:text-gray-300">{!showpass ? "show password" : "hide password"}</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm text-gray-900 font-medium text-primary-600 hover:underline dark:text-gray-200">Forgot password?</a>
                  </div>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      {login ? "Don’t have an account yet?" : "Already have an account"} <span onClick={() => {setLogin(prev => !prev); setLogging(false)}} className="font-medium cursor-pointer text-primary-600 hover:underline dark:text-primary-500">{login ? "Sign up" : 'Log in'}</span>
                  </p>
                  <button type="submit" onClick={() => setLogging(true)} className="py-2.5 cursor-pointer outline-none w-full flex justify-center mx-auto text-white h-10 px-5 me-2 text-sm font-medium bg-gray-900 rounded-lg border border-gray-200 hover:bg-gray-800 focus:z-10 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 items-center">
<svg aria-hidden="true" role="status" className={`inline ${logging ? "block" : "hidden"} w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
</svg>
{login && logging ? "Logging..." : login && !logging ? "Log In" : !login && !logging ? "Sign In" : !login && logging ? "Signing..." : ""}
</button>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Auth
