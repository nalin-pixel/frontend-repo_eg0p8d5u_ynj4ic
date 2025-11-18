import Hero from './components/Hero'
import SystemLog from './components/SystemLog'
import ViralEngine from './components/ViralEngine'
import Origin from './components/Origin'
import Manifesto from './components/Manifesto'
import Footer from './components/Footer'

function App() {
  const scrollToPrompts = () => {
    const el = document.getElementById('prompts')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Hero onInitiate={scrollToPrompts} onAcquire={() => {}} />
      <SystemLog />
      <ViralEngine />
      <Origin />
      <Manifesto />
      <Footer />
    </div>
  )
}

export default App
