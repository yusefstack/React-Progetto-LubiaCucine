import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./components/SharedLayout"
import Home from "./components/Home"
import Products from "./components/Products"
import SingleProduct from "./components/SingleProduct"
import Cart from "./components/Cart"
import About from "./components/About"
import data from './assets/data'
import { addProductsList } from './features/storeSlices/productsSlice'
import { useDispatch } from "react-redux"
import { useEffect } from "react"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addProductsList(data))
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path='products/:productId' element={<SingleProduct />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
