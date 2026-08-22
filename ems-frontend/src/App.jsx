
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListComponent from './components/ListComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>

<Route path='/' element={<ListComponent/>}></Route>
<Route path='/employees' element={<ListComponent/>}></Route>
    </Routes>
    
    <FooterComponent/>
    </BrowserRouter>
    
    </>
  )
}

export default App
