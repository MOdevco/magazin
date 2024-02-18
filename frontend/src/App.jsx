import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound/NotFound"
import KeyBoards from "./pages/Category/KeyBoards"
import Aksesuars from "./pages/Category/Aksesuars"
import Laptop from "./pages/Category/Laptop"
import Monitor from "./pages/Category/Monitor"
import Mouses from "./pages/Category/Mouses"
import Producuts from "./pages/Category/Producuts"
import Coments from "./pages/Category/Coments"
import ScrollToTop from "react-scroll-to-top";
import News from "./pages/Category/News"
import ProductPage from "./pages/ProductPage/ProductPage"
import Phones from "./pages/Category/Phones"
import Buyurtma from "./pages/Buyurtma/Buyurtma"
import Profile from "./pages/Profile/Profile"
import ProfileName from "./pages/Profile/ProfileName"
import ProfilePassword from "./pages/Profile/ProfilePassword"
import Test from "./components/Test"

function App() {

  return (
      <Box>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/keyboard' element={<KeyBoards/>}></Route>
          <Route path='/aksesuar' element={<Aksesuars/>}></Route>
          <Route path='/laptop' element={<Laptop/>}></Route>
          <Route path='/monitor' element={<Monitor/>}></Route>
          <Route path='/mouses' element={<Mouses/>}></Route>
          <Route path='/phones' element={<Phones/>}></Route>
          <Route path='/products' element={<Producuts/>}></Route>
          <Route path='/coment' element={<Coments/>}></Route>
          <Route path='/news' element={<News/>}></Route>
          <Route path='/checkout' element={<Buyurtma />}></Route>
          <Route path='/test' element={<Test />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/profileName' element={<ProfileName />}></Route>
          <Route path='/profilePassword' element={<ProfilePassword />}></Route>
          <Route path='/product/:type/:id' element={<ProductPage/>}></Route>

          {/* Not Found  */}
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>

        <ScrollToTop smooth style={{paddingLeft:'6px', opacity:'0.3'}}/>
      </Box>
  )
}

export default App
