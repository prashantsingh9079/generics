import React from "react";

const AuthContext = React.createContext(
    {
        isLogin:false,
        token:'',
        login:(token) =>{},
        logut:()=>{},
        email:''
    }
)

export default AuthContext