import { ArrowIcon, Stars } from '../common/icons.jsx'
import { BadgeCheck } from 'lucide-react'
import { avatars } from '../../data.js'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__dots" />
      <div className="hero__inner">
        {/* Left — message */}
        <div className="hero__content">
          <h1 className="hero__title">Business Visa <em>Interview Preparation</em> for Global <em>Entrepreneurs</em></h1>
          <p className="hero__tagline">Years of hard work brought you here.<br /><em>Don&rsquo;t let one interview hold you back.</em></p>
          <p className="hero__lead">At Phoenix Interview Academy (PIA), we help established business owners, directors, and investors get ready to pass their business visa interview easily.</p>
          <p className="hero__lead">As global business expansions require a special type of visa to enter and operate in foreign markets, we ensure you&rsquo;re fully prepared for the interview before stepping into the embassy.</p>
          <p className="hero__lead">We help you acknowledge the specific requirements and benefits of business immigration visas in your target country</p>
          <p className="hero__note">Built by the experts behind Phoenix Business Advisory.</p>
          <div className="hero__actions">
            <a href="#contact" className="btn-dark">Request a Consultation <ArrowIcon /></a>
            <a href="#programs" className="btn-outline">View Programs</a>
          </div>
          <div className="hero__trust">
            <div className="avatars">
              {avatars.map((av, i) => (
                <div key={i} className="avatar" style={{ background: av.bg }}>{av.i}</div>
              ))}
            </div>
            <div className="hero__trust-text">
              <div className="hero__trust-stars"><Stars /> <span>4.9/5</span></div>
              <div className="hero__trust-meta">Trusted by <strong>1000+</strong> business owners</div>
            </div>
          </div>
        </div>

        {/* Right — layered showcase */}
        <div className="hero__showcase">
          <div className="hero__accent" />
          <div className="hero__media">
            <img src="/images/hero-showcase.jpg" alt="A composed business owner prepared for their migration visa interview" />
          </div>
          <div className="hero__card">
            <div className="hero__card-icon"><BadgeCheck size={20} color="#0A1420" strokeWidth={2.4} /></div>
            <div>
              <div className="hero__card-num">98%</div>
              <div className="hero__card-label">Visa interview success rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
