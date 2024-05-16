import { useContext, useMemo, useState } from "react"
import { initialState } from "../component/initialstate"
import MyContext from "../component/context"

const Home = () => {
  const [count, setCount] = useState(0)
  const [items] = useState(initialState)
const context = useContext(MyContext)
  //with useMeme
  const SelectItem = useMemo(() =>
    (items.find((item) => item.isSelect)), [items])

  //without useMemo
  // const SelectItem = items.find((item) => item.isSelect)
  
  if(!context) {
    throw new Error('component must be used within a provider') 
}
  const {value, setValue} = context
  return (
    <div>
      <div>count: {count}</div>
      <div>name: {value}</div>
      <span>selected items: {SelectItem?.id} </span><br />
      <button onClick={() => setCount(count + 2)}>increment</button>
      <button onClick={() => setValue('this is ola dev usecontext code')}>change value</button>
    </div>
  )
}

export default Home
