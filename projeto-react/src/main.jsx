import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Podemos mudar o nome de Variáveis importadas com o "as";
import { PI as numeroPi, GTM_BRASIL } from './teste'
import nome from './nomes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
