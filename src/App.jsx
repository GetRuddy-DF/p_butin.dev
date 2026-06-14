import './index.css'
import { LanguageProvider } from './LanguageContext'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Services from './components/Services'

export default function App() {
  return (

    <LanguageProvider>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </LanguageProvider>
  )
}