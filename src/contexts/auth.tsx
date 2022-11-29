import { createContext,useState,useEffect, ReactNode } from "react"

export const AuthContext  = createContext<AuthContextData>({} as AuthContextData)


 
interface AuthContextData {
    user: User |undefined,
    saveAuth:(user:User) => void,
    signed:boolean
}

interface AuthProps {
    children:ReactNode
}
interface User {
    token: string,
    tipo: number
}


export function AuthProvider( {children}: AuthProps){
    const [user,setUser] =  useState<User>()
    const [signed,setSigned] = useState(false)
 
    useEffect(() => {
        loadUserInfo()
    },[signed])


      function saveAuth(user : User){
        localStorage.removeItem('@userInfo')
        localStorage.setItem("@userInfo",JSON.stringify(user))  
        setUser(user)
        setSigned(true) 
    }

      function loadUserInfo() {
        
        let userInfo = localStorage.getItem('@userInfo')

        if(userInfo){
            setUser(JSON.parse(userInfo))
            setSigned(true)
        }else{
            setSigned(false)
            console.log('nao tem dados')
            setUser({
                token: "",
                tipo:0
            })
           
        }
        
    }
 
    return(
        <AuthContext.Provider value={{user,saveAuth,signed:signed}}>
            {children}
        </AuthContext.Provider>  
    )
}

 