import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./components/SharedLayout"
import Home from "./components/Home"
import Products from "./components/Products"
import SingleProduct from "./components/SingleProduct"
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
          <Route path="products" element={<Products />}></Route>
          <Route path='products/:productId' element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
