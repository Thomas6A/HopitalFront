import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Vue/Components/Header'
import GetAllPatientsController from './Controller/GetAllPatientsController'
import GetPatientByIdController from './Controller/GetPatientByIdController'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<GetAllPatientsController />} />
        <Route path="/detail/:id_patient" element={<GetPatientByIdController />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
