import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Why stream', target: '#why-stream' },
  { label: 'Pass & price', target: '#pricing' },
  { label: 'Details', target: '#pass-details' },
]

export default function Navbar() {
  return (
    <motion.nav className="site-nav" initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} aria-label="Main navigation">
      <a className="site-brand" href="#top" aria-label="Concert streaming home">
        <span className="brand-mark" aria-hidden="true">♫</span>
        <span>LIVE MUSIC <span className="site-brand__soft">/ ANYWHERE</span></span>
      </a>
      <div className="site-nav__links">
        {navLinks.map((link) => <a key={link.target} href={link.target}>{link.label}</a>)}
      </div>
      <motion.a className="nav-cta" href="#pricing" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
        View the pass <span aria-hidden="true">↘</span>
      </motion.a>
    </motion.nav>
  )
}
