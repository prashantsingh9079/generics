import React, { useState } from 'react'
import AuthContext from './Auth-context'


export default function AuthContextProvider(props) {
  const initailToken = localStorage.getItem("token")
    const [token,setToken] = useState(initailToken)
    

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
        logout:logoutHandler
    }


  return (
    <AuthContext.Provider value={valueToBeGiven}>
      {props.children}
    </AuthContext.Provider>
  )
}
