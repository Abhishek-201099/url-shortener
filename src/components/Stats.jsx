export default function Stats() {
  return (
    <section className="section-stats">
      <div className="stats-header">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="stats-items">
        <div className="stats-item">
          <div className="stats-item-logo">
            <img
              src="/icon-brand-recognition.svg"
              alt="statistics icon for brand recognition"
            />
          </div>
          <h3 className="stats-item-heading">Brand Recognition</h3>
          <p className="stats-item-description">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div className="stats-bars"></div>

        <div className="stats-item">
          <div className="stats-item-logo">
            <img
              src="/icon-detailed-records.svg"
              alt="statistics icon for brand detailed records"
            />
          </div>
          <h3 className="stats-item-heading">Detailed Records</h3>
          <p className="stats-item-description">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        <div className="stats-bars"></div>

        <div className="stats-item">
          <div className="stats-item-logo">
            <img
              src="/icon-fully-customizable.svg"
              alt="statistics icon for brand customization"
            />
          </div>
          <h3 className="stats-item-heading">Fully Customizable</h3>
          <p className="stats-item-description">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
