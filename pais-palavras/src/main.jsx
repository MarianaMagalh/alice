import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import CardBusca from './components/CardBusca.jsx'
import Capitulos from './components/TelaCapitulo/Capitulos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Capitulos />
  </StrictMode>,
)
