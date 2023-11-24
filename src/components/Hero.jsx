export default function Hero() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h2 className="hero-heading">More than just shorter links</h2>
          <p className="hero-description">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="hero-cta-btn">Get Started</button>
        </div>
        <div className="hero-img-box">
          <img
            src="/illustration-working.svg"
            alt="person working on computer"
          />
        </div>
      </div>
    </section>
  );
}
