import React, { useState } from 'react'
import AuthContext from './Auth-context'

export default function AuthContextProvider(props) {
    const [token,setToken] = useState(null)

    function loginHandler(token)
    {
        setToken(token);
    } 

    function logoutHandler()
    {
        setToken(null)
    }

    function checkIsLogin()
    {
        if(token=== null)
        {
            return false
        }
        return true
    }

    const valueToBeGiven = {
        token:token,
        isLogin:checkIsLogin,
        login:loginHandler,
        logout:logoutHandler
    }


  return (
    <AuthContext.Provider value={valueToBeGiven}>
      {props.children}
    </AuthContext.Provider>
  )
}
