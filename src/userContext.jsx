import { createContext,useState,useContext } from "react";



const userContext = createContext();


export function GetUserInfo(){
    const value = useContext(userContext);
    return value;
};



export const UserProvider = ({children}) => {
    const [user,setUser] = useState({});

    
    return (
        <userContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </userContext.Provider>
    )
}



