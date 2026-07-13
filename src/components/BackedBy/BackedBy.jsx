import { ShieldCheck } from 'lucide-react'
import { parentStats } from '../../data.js'
import './BackedBy.css'

export default function BackedBy() {
  return (
    <section className="backed">
      <div className="backed__inner">
        <div className="backed__text">
          <div className="eyebrow--gold-bold">Backed by Phoenix Business Advisory</div>
          <h2 className="backed__title">The confidence of a global business migration leader <em>behind every interview.</em></h2>
          <p className="backed__desc">Phoenix Interview Academy is the dedicated interview-preparation division of Phoenix Business Advisory, trusted by business owners expanding to the USA, Australia, New Zealand, and the European Union.</p>
          <p className="backed__desc">From immigration documentation preparation to visa interview coaching, the same business migration experts guide you through all critical stages. Our visa interview coaching program takes into account the requirements of a real embassy and helps business owners to speak in front of immigration officers with confidence and credibility.</p>
          <div className="backed__creds">
            <ShieldCheck size={18} color="#c4882f" strokeWidth={2} />
            <span>Registered Migration Agent <strong>MARN 1383279</strong> · MIA Member 6408 · NZ Licence 202506918</span>
          </div>
        </div>
        <div className="backed__stats">
          {parentStats.map((s) => (
            <div key={s.label} className="backed__stat">
              <div className="backed__stat-num">{s.num}</div>
              <div className="backed__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
