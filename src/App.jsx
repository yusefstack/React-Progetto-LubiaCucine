import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./components/SharedLayout"
import Home from "./components/Home"
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
