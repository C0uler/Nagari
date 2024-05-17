import Maps from './Maps.jsx'
import Explore from './Explore.jsx'
import SearchContent from "./Search-Content"
import Home from "./Home.jsx"
import SumbarSlide from "./Sumbar_Slide.jsx"
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import footer from "./footer.jsx"

const App = () =>{
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Search' element={<SearchContent/>}></Route>
        <Route path='/weather' element={<Maps/>}></Route>
        <Route path='/explore' element={<Navigate to="/explore/1" replace/>}></Route>
        <Route path='/explore/:id' element={<Explore/>}></Route>
        <Route path='/Pic' element={<SumbarSlide/>}></Route>
      </Routes>
    </Router>
  )
}



export default App



