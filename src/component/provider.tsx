import { ReactNode, useState } from "react"
import MyContext from "./context"

interface myProviderProps {
    children: ReactNode
}


const MyProvider: React.FC<myProviderProps> = ({children}) => {
    const [value, setValue] = useState('ola is a good boy.')

    return(
        <MyContext.Provider value={{value, setValue}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider