import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/index.tsx'
import './src/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
