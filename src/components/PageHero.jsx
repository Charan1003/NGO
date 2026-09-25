export default function PageHero({
  label = "HopeHarbor",
  title,
  subtitle,
  intro,
  image,
}) {
  return (
    <section className="page-banner">
      {image && (
        <div
          className="page-banner-image"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden="true"
        />
      )}
      <div className="page-banner-overlay" aria-hidden="true" />
      <div className="page-banner-content">
        <p className="kicker">{label}</p>
        <h1>{title}</h1>
        {subtitle && <p className="page-banner-subtitle">{subtitle}</p>}
        {intro && <p className="page-intro">{intro}</p>}
      </div>
    </section>
  );
}