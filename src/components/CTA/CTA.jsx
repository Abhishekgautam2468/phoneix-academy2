import { CalendarIcon, PhoneIcon } from '../common/icons.jsx'
import './CTA.css'

export default function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="cta__circle--tr" />
      <div className="cta__circle--bl" />
      <div className="cta__inner">
        <div className="cta__eyebrow">Begin your interview preparation</div>
        <h2 className="cta__title">Your business earned the opportunity. <em>Now earn the approval.</em></h2>
        <p className="cta__lead">One interview may make or break the future of your international business expansion plans. With Phoenix Interview Academy, prepare yourself for a visa interview with confidence and complete readiness.</p>
        <div className="cta__actions">
          <a href="#" className="cta-btn cta-btn--white"><CalendarIcon /> Request a Consultation</a>
          <a href="#programs" className="cta-btn cta-btn--outline">View Programs</a>
          <a href="tel:+18001234567" className="cta-btn cta-btn--outline-dim"><PhoneIcon /> Call us: +1 (800) 123-4567</a>
        </div>
      </div>
    </section>
  )
}
