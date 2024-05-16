import { useContext } from "react"
import MyContext from "../component/context"

const Dashboard = () => {
    const context = useContext(MyContext)

    if(!context) {
        throw new Error('component must be used within a provider') 
    }

    const {value, setValue} = context
  return (
    <div>
      <p> {value} </p>
      <button onClick={() => setValue('my name is oladev')}>change value</button>
    </div>
  )
}

export default Dashboard
