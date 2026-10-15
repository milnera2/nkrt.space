import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Projects from './pages/Projects'
import StarCatcher from './pages/StarCatcher'
import LiquidEngine from './pages/LiquidEngine'
import Teams from './pages/Teams'
import Contact from './pages/Contact'
import Sponsors from './pages/Sponsors'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="font-body bg-background-light text-text-light antialiased selection:bg-primary selection:text-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/star-catcher" element={<StarCatcher />} />
        <Route path="/projects/liquid-engine" element={<LiquidEngine />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sponsors" element={<Sponsors />} />
        {/* legacy anchor compat: old single-page links */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
