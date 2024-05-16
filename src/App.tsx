import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/home'
import Dashboard from './page/dashboard'
import MyProvider from './component/provider'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MyProvider><Home /></MyProvider >} />
          <Route path='/dash' element={<MyProvider> <Dashboard /> </MyProvider>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
