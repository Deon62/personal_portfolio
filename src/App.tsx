import { DarkModeProvider } from "./components/DarkModeContext"
import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"

const App = () => {
  return (
    <DarkModeProvider>
      <Navbar />
      <Hero />
    </DarkModeProvider>
  )
}

export default App
