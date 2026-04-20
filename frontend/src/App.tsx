import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import ActualitesPage from './pages/ActualitesPage'
import ArticlePage from './pages/ArticlePage'
import { useHashScroll } from './hooks/useHashScroll'
import WhatsAppButton from './components/ui/WhatsAppButton'
import Preloader from './components/ui/Preloader'
import CustomCursor from './components/ui/CustomCursor'
import PageTransition from './components/ui/PageTransition'

function AppRoutes() {
  useHashScroll()
  const location = useLocation()

  return (
    <>
      <Navbar />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/actualites" element={<PageTransition><ActualitesPage /></PageTransition>} />
          <Route path="/actualites/:slug" element={<PageTransition><ArticlePage /></PageTransition>} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default function App() {
  // Jouer le preloader une seule fois par session
  const [ready, setReady] = useState(() => sessionStorage.getItem('preloader_done') === '1')

  const handleDone = () => {
    sessionStorage.setItem('preloader_done', '1')
    setReady(true)
  }

  return (
    <BrowserRouter>
      <CustomCursor />
      {!ready && <Preloader onDone={handleDone} />}
      <div style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.4s ease' }}>
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}
