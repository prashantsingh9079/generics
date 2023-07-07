import React, { useState } from 'react'
import AuthContext from './Auth-context'


export default function AuthContextProvider(props) {
  const initailToken = localStorage.getItem("token")
    const [token,setToken] = useState(initailToken)
    const [emailReg,setEmailReg] = useState('')

    function emailRegFn(email)
    {
      var em = email.split('.')
      var ef=em[0]+em[1];
      var e = ef.split('@')[0]
      setEmailReg(e)
    }

    function loginHandler(token)
    {
        setToken(token);
        console.log(token)
    } 

    function logoutHandler()
    {
        setToken(null)
        
    }

    const valueToBeGiven = {
        token:token,
        isLogin:token?true:false,
        login:loginHandler,
        logout:logoutHandler,
        email:emailReg,
        setEmail:emailRegFn
    }

    console.log(emailReg)
  return (
    <AuthContext.Provider value={valueToBeGiven}>
      {props.children}
    </AuthContext.Provider>
  )
}
