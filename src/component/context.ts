import { createContext, } from 'react'

interface myContextType {
    value: string;
    setValue: (value: string) => void;
}
const MyContext = createContext<myContextType | undefined>(undefined)

export default MyContext
