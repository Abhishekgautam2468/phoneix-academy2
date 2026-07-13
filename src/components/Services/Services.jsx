import { Mic, FileCheck } from 'lucide-react'
import { focusTags } from '../../data.js'
import './Services.css'

export default function Services() {
  return (
    <section id="services" className="services">
      {/* Card 1 — focus areas */}
      <div className="services__card">
        <div className="eyebrow--gold-bold">What We Offer</div>
        <h2 className="services__title">Everything you need for <em>interview day.</em></h2>
        <p className="services__desc">From language coaching to embassy interview simulations, every stage of your visa interview coaching is handled under one roof.</p>
        <div className="tag-list">
          {focusTags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <div className="services__link-wrap">
          <a href="#programs" className="link-gold">Explore All Programs</a>
        </div>
      </div>

      {/* Card 2 — mock interviews */}
      <div className="panel panel--blue">
        <div className="panel__overlay" />
        <div className="panel__content">
          <div className="panel__badge"><Mic size={20} color="#0A1420" strokeWidth={2} /></div>
          <div className="panel__eyebrow">Real Practice</div>
          <h3 className="panel__title">Embassy-style Mock Interviews</h3>
          <p className="panel__text">Practice with interview questions modeled after real USCIS visa appointments, embassy interviews, and immigration officer interactions. Receive detailed feedback on your communication, confidence, business presentation, and interview strategy.</p>
          <div className="panel__stat">
            <span className="panel__stat-num">98%</span>
            <span className="panel__stat-label">Client Interview Readiness Rate</span>
          </div>
        </div>
      </div>

      {/* Card 3 — documentation & business case */}
      <div className="panel panel--brown">
        <div className="panel__overlay" />
        <div className="panel__content">
          <div className="panel__badge"><FileCheck size={20} color="#0A1420" strokeWidth={2} /></div>
          <div className="panel__eyebrow">Know Your File</div>
          <h3 className="panel__title">Documents &amp; Business Story</h3>
          <p className="panel__text">Your paperwork alone doesn&rsquo;t secure approval. Learn how to confidently explain your company, investment plans, turnover, employees, expansion strategy, and future goals exactly the way immigration officers expect.</p>
          <div className="panel__stat">
            <span className="panel__stat-num">1000+</span>
            <span className="panel__stat-label">Business Owners Coached</span>
          </div>
        </div>
      </div>
    </section>
  )
}
