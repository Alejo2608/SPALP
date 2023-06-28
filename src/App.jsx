import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Form from './components/Form/Form'
import Reco from './components/Recomendaciones/Recomendaciones'
import Footer from './components/Footer/Footer'
import Cuidados from './components/Cuidados/Cuidados'
function App() {

  return (
    <div className='app'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cita' element={<Form/>}/>
        <Route path='/reco' element={<Reco/>}/>
        <Route path='/consejos' element={<Cuidados/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
