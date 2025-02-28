import { createContext, useState } from "react";

export const ContextApi = createContext();

const AuthContex = ({children}) => {


    const [user, setUser] = useState(null);

    const authInfo = {
        user, 
        setUser,
    }

    return (
       <ContextApi.Provider value={authInfo}>{children}</ContextApi.Provider>
    );
};

export default AuthContex;