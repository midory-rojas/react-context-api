import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ChiSiamo from './pages/ChiSiamo'
import Homepage from './pages/Homepage'
import Prodotti from './pages/Prodotti'
import DefaultLayout from './layout/DefaultLayout'
import SingoloProdotto from './pages/SingoloProdotto'
import NotFound from './pages/NotFound'

function App() {

  // http://localhost:5174/prodotti/ciO => /prodotti/ciO

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/prodotti">
              <Route path="" element={<Prodotti />} />
              <Route path=":id" element={<SingoloProdotto />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
