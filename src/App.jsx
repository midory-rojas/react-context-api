import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ChiSiamo from './pages/ChiSiamo'
import Homepage from './pages/Homepage'
import Prodotti from './pages/Prodotti'
import DefaultLayout from './layout/DefaultLayout'
import SingoloProdotto from './pages/SingoloProdotto'
import NotFound from './pages/NotFound'
import { BudgetForProvider } from './context/BudgetContext'


function App() {

  return (
    <> 
    {/* Impostazione del app jsx, cosi tutti i componenti hanno acceso */}
      <BudgetForProvider> 
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
      </BudgetForProvider>
    </>
  )
}

export default App
