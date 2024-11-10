import { DarkModeProvider } from "./components/DarkModeContext"
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"

const App = () => {
  return (
    <DarkModeProvider>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </DarkModeProvider>
  )
}

export default App
