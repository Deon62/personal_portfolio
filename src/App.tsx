import { DarkModeProvider } from "./components/DarkModeContext"
import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import Skills from "./pages/Skills"

const App = () => {
  return (
    <DarkModeProvider>
      <Navbar />
      <Hero />
      <Skills />
    </DarkModeProvider>
  )
}

export default App
