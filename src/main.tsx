import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './lib/ThemeProvider.tsx'
import { Provider } from 'react-redux'
import { store } from '@/store/store.ts' 
import library from "@/library/i18n.ts"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)