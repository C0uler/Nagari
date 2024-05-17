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
        <Route path='/SumbarSerenity/' element={<Home/>}></Route>
        <Route path='/SumbarSerenity/Search' element={<SearchContent/>}></Route>
        <Route path='/SumbarSerenity/weather' element={<Maps/>}></Route>
        <Route path='/SumbarSerenity/explore' element={<Navigate to="/explore/1" replace/>}></Route>
        <Route path='/SumbarSerenity/explore/:id' element={<Explore/>}></Route>
        <Route path='/SumbarSerenity/Pic' element={<SumbarSlide/>}></Route>
      </Routes>
    </Router>
  )
}



export default App



