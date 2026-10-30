import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PricingContent from './components/PricingContent'
import './index.css'

function App() {
  return (
    <div id="top" className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <PricingContent />
    </div>
  )
}

export default App
