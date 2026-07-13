import { ArrowIcon } from '../common/icons.jsx'
import { aboutPoints } from '../../data.js'
import './Practice.css'

export default function Practice() {
  return (
    <section id="about" className="practice">
      <div className="practice__inner">
        <div className="practice__photo">
          <img className="practice__img" src="/images/about-mentorship.jpg" alt="A Phoenix Academy mentor preparing a business owner for their visa interview" />
        </div>
        <div>
          <div className="eyebrow--gold">About Us</div>
          <h2 className="practice__title">Beyond documents.<br /><em>Built for interview success.</em></h2>
          <p className="practice__text">Phoenix Interview Academy is the dedicated interview-preparation division of Phoenix Business Advisory, created exclusively for entrepreneurs applying for business migration visas.</p>
          <p className="practice__text">Many successful business owners miss great opportunities not because of their ineligibility, but because of their inability to prove themselves in embassy interviews.</p>
          <p className="practice__text">Our coaching turns business owners into confident applicants through well-structured preparation, personalized interview strategy, and realistic practice sessions.</p>
          <p className="practice__text practice__text--last">All our coaching programs are tailored specifically to your application, business profile, and interview process in your destination country.</p>
          <ul className="practice__points">
            {aboutPoints.map((pt) => (
              <li key={pt} className="practice__point"><span className="dot-gold" />{pt}</li>
            ))}
          </ul>
          <a href="#contact" className="link-gold-underline">Request a Consultation <ArrowIcon size={13} /></a>
        </div>
      </div>
    </section>
  )
}
