import { motion } from 'framer-motion'

const benefits = [
  {
    number: '01',
    title: 'Make distance feel smaller',
    description: 'A remote way to experience a concert when travel or location makes attending in person difficult.',
  },
  {
    number: '02',
    title: 'A more affordable option',
    description: 'A single-event pass is designed to make live music more accessible at a lower price point.',
  },
  {
    number: '03',
    title: 'One concert at a time',
    description: 'Choose access for an individual concert instead of committing to an ongoing subscription.',
  },
]

export default function PricingContent() {
  return (
    <main className="pricing-content">
      <section id="why-stream" className="why-stream section-shell">
        <div className="section-intro">
          <p className="eyebrow section-eyebrow">Live music can travel</p>
          <h2>For the nights you can’t be in the room.</h2>
          <p className="section-lede">
            Concerts can be hard to reach because of distance or ticket cost. This concert-streaming concept is built around a simple idea: make remote access more convenient and affordable for music fans.
          </p>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.number}
              className="benefit-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <span className="benefit-number">{benefit.number}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="pricing" className="pricing-section">
        <div className="section-shell pricing-layout">
          <div className="pricing-copy">
            <p className="eyebrow section-eyebrow">Straightforward, single-event access</p>
            <h2>Pick a concert.<br /><span>Make it yours.</span></h2>
            <p className="section-lede">
              One pass is for one concert stream. The offer is designed for music fans looking for a convenient way to take part from wherever they are.
            </p>
            <a className="text-link" href="#pass-details">See what the pass covers <span aria-hidden="true">↓</span></a>
          </div>

          <motion.article
            className="price-card"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            aria-labelledby="pass-title"
          >
            <div className="price-card__topline"><span>ONE CONCERT</span><span>ONE-TIME PASS</span></div>
            <div className="price-card__symbol" aria-hidden="true">♫</div>
            <h3 id="pass-title">Single-concert streaming pass</h3>
            <p className="price-card__description">Access to one concert stream.</p>
            <p className="price"><span>$9</span><sup>99</sup><small> / event</small></p>
            <a className="price-card__cta" href="#pass-details">Explore pass details <span aria-hidden="true">↘</span></a>
            <p className="price-card__note">Stream quality and availability are subject to event rights.</p>
          </motion.article>
        </div>
      </section>

      <section id="pass-details" className="details-section section-shell">
        <div className="details-heading">
          <p className="eyebrow section-eyebrow">The pass, clearly explained</p>
          <h2>One pass. One concert.</h2>
        </div>
        <div className="details-grid">
          <article>
            <span className="detail-icon" aria-hidden="true">01</span>
            <h3>What’s included</h3>
            <p>Access to one concert stream for the selected event.</p>
          </article>
          <article>
            <span className="detail-icon" aria-hidden="true">02</span>
            <h3>Price</h3>
            <p>$9.99 USD per event.</p>
          </article>
          <article>
            <span className="detail-icon" aria-hidden="true">03</span>
            <h3>Availability</h3>
            <p>Stream quality and availability depend on the rights for each event.</p>
          </article>
        </div>
        <p className="availability-note">Replay access, fan chat, and other add-ons are not confirmed as part of this pass.</p>
      </section>

      <section className="closing-section">
        <div className="closing-orbit closing-orbit--one" aria-hidden="true" />
        <div className="closing-orbit closing-orbit--two" aria-hidden="true" />
        <p className="eyebrow">Live music, a little closer</p>
        <h2>Wherever you are,<br /><span>feel part of the moment.</span></h2>
        <a href="#pricing" className="pill-button">View the $9.99 concert pass <span aria-hidden="true">↑</span></a>
      </section>

      <footer className="site-footer">
        <a className="site-brand" href="#top"><span className="brand-mark" aria-hidden="true">♫</span><span>LIVE MUSIC <span className="site-brand__soft">/ ANYWHERE</span></span></a>
        <p>Single-concert streaming pass · $9.99 USD per event</p>
        <a href="#top" className="footer-top">Back to top ↑</a>
      </footer>
    </main>
  )
}
