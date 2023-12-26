import { createContext, useState } from "react";

export let UserContext = createContext();

export default function UserContextProvider(props){

    const [userEmail, setUserEmail] = useState(null);
    const [UserName, setUserName] = useState(null);
    const [createdAt, setcreatedAt] = useState(null);

    


    return <UserContext.Provider value={{userEmail,setUserEmail,UserName,setUserName,setcreatedAt,createdAt}}>
        {props.children}
    </UserContext.Provider>
}