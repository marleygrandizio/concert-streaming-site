import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PricingContent from './components/PricingContent'
import TicketPet from './components/TicketPet'
import './index.css'

function App() {
  return (
    <div id="top" className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <PricingContent />
      <TicketPet />
    </div>
  )
}

export default App
