import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Countdown from './Countdown'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Countdown />
  </StrictMode>,
)
