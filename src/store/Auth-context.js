import React from "react";

const AuthContext = React.createContext(
    {
        isLogin:false,
        token:null,
        login:(token) =>{},
        logut:()=>{}
    }
)

export default AuthContext