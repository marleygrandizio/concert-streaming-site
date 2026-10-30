import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="product" className="product-hero concert-hero">
      <div className="concert-hero__orb concert-hero__orb--one" />
      <div className="concert-hero__orb concert-hero__orb--two" />
      <div className="concert-hero__stage" aria-hidden="true">
        <div className="concert-hero__halo" />
        <div className="concert-hero__bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="concert-hero__floor" />
      </div>

      <div className="product-hero__content">
        <motion.p className="eyebrow hero-eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}>
          A closer seat, wherever you are
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.22, ease: 'easeOut' }}>
          <span>Feel the music.</span>
          <span className="hero-title-light">Meet us live.</span>
        </motion.h1>
        <motion.p className="product-hero__description" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}>
          Explore a more convenient, affordable way to experience concerts when distance, price, or plans make being there difficult.
        </motion.p>
        <motion.a className="pill-button hero-button" href="#pricing" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          Explore the concert pass <span aria-hidden="true">↓</span>
        </motion.a>
      </div>

      <motion.div className="hero-footer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.75, ease: 'easeOut' }}>
        <span>Concert streaming · Single-event access</span>
        <a href="#why-stream">Scroll to explore <span aria-hidden="true">↓</span></a>
      </motion.div>
    </section>
  )
}
