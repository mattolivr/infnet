import './App.css'
import Header from './components/header'
import Biografia from './components/biografia'
import Propostas from './components/propostas'
import Agenda from './components/agenda'
import Footer from './components/footer'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useMemo } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#df3838',
          },
          secondary: {
            main: '#222222',
          },
        },
        transitions: {
          duration: {
            shortest: prefersReducedMotion ? 0 : 150,
            shorter: prefersReducedMotion ? 0 : 200,
            short: prefersReducedMotion ? 0 : 250,
            standard: prefersReducedMotion ? 0 : 300,
            complex: prefersReducedMotion ? 0 : 375,
            enteringScreen: prefersReducedMotion ? 0 : 225,
            leavingScreen: prefersReducedMotion ? 0 : 195,
          },
        },
      }),
    [prefersDarkMode, prefersReducedMotion]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Biografia />
      <Propostas />
      <Agenda />
      <Footer />
    </ThemeProvider>
  )
}

export default App
