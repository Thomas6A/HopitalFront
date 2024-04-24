import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Vue/Components/Header'
import GetAllPatientsController from './Controller/GetAllPatientsController'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<GetAllPatientsController />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
