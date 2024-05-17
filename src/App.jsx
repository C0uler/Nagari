import Maps from './Maps.jsx'
import Explore from './Explore.jsx'
import SearchContent from "./Search-Content"
import Home from "./Home.jsx"
import SumbarSlide from "./Sumbar_Slide.jsx"
import L from 'leaflet';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Footer from "./footer.jsx"
import About_Us from "./About-Us.jsx"


const App = () =>{
  return(
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Search' element={<SearchContent/>}></Route>
          <Route path='/weather' element={<Maps/>}></Route>
          <Route path='/explore' element={<Navigate to="/explore/1" replace/>}></Route>
          <Route path='/explore/:id' element={<Explore/>}></Route>
          <Route path='/AboutUs' element={<About_Us/>}></Route>
        </Routes>
    </Router>
  )
}



export default App



