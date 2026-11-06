import { useEffect, useRef, useState } from 'react'

const base = import.meta.env.BASE_URL

export default function TicketPet() {
  const stageRef = useRef<HTMLDivElement>(null)
  const [failed, setFailed] = useState(false)
  const [hello, setHello] = useState(true)

  useEffect(() => {
    let disposed = false
    let viewer: HTMLElement | undefined
    const stage = stageRef.current
    if (!stage) return

    const setup = async () => {
      if (!customElements.get('model-viewer')) {
        await Promise.race([
          customElements.whenDefined('model-viewer'),
          new Promise((resolve) => window.setTimeout(resolve, 6000)),
        ])
      }
      if (disposed) return
      if (!customElements.get('model-viewer')) {
        setFailed(true)
        return
      }

      viewer = document.createElement('model-viewer')
      viewer.setAttribute('src', `${base}models/lilac-ticket-mascot.glb`)
      viewer.setAttribute('alt', 'Lilac ticket mascot, a smiling purple concert ticket')
      viewer.setAttribute('poster', `${base}lilac-ticket-mascot-preview.png`)
      viewer.setAttribute('camera-controls', '')
      viewer.setAttribute('disable-pan', '')
      viewer.setAttribute('interaction-prompt', 'auto')
      viewer.setAttribute('camera-orbit', '0deg 75deg 4.2m')
      viewer.setAttribute('min-camera-orbit', 'auto auto 2.8m')
      viewer.setAttribute('max-camera-orbit', 'auto auto 7m')
      viewer.setAttribute('field-of-view', '30deg')
      viewer.setAttribute('shadow-intensity', '0.85')
      viewer.setAttribute('environment-image', 'neutral')
      viewer.setAttribute('exposure', '1')
      viewer.setAttribute('loading', 'eager')
      viewer.addEventListener('error', () => setFailed(true), { once: true })
      viewer.addEventListener('load', () => setFailed(false), { once: true })

      const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
      if (!motion.matches) {
        viewer.setAttribute('auto-rotate', '')
        viewer.setAttribute('rotation-per-second', '12deg')
        viewer.setAttribute('auto-rotate-delay', '1800')
      }
      stage.replaceChildren(viewer)
    }
    void setup()
    const greetingTimer = window.setTimeout(() => setHello(false), 7000)
    return () => {
      disposed = true
      window.clearTimeout(greetingTimer)
      viewer?.remove()
    }
  }, [])

  const resetView = () => {
    const viewer = stageRef.current?.querySelector('model-viewer') as (HTMLElement & { cameraOrbit?: string; jumpCameraToGoal?: () => void }) | null
    if (!viewer) return
    viewer.cameraOrbit = '0deg 75deg 4.2m'
    viewer.jumpCameraToGoal?.()
  }

  return (
    <aside className="ticket-pet" aria-label="Interactive Lilac Ticket mascot">
      <div className="ticket-pet__topline">
        <span className="ticket-pet__status"><i /> YOUR TICKET BUDDY</span>
        <button className="ticket-pet__reset" type="button" onClick={resetView} aria-label="Reset mascot view" title="Reset view">↺</button>
      </div>
      <div className="ticket-pet__stage-wrap">
        <div className="ticket-pet__stage" ref={stageRef} />
        {failed && <img className="ticket-pet__fallback" src={`${base}lilac-ticket-mascot-preview.png`} alt="Lilac ticket mascot preview" />}
        {hello && <div className="ticket-pet__bubble" role="status">Psst… the show goes everywhere ✨</div>}
      </div>
      <p className="ticket-pet__hint">Drag me around · scroll together</p>
    </aside>
  )
}
