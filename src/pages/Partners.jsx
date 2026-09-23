const partners = [
  {
    name: "Nalanda Open Library",
    role: "Curriculum & books",
    text: "Shares bilingual readers and trains our after-school mentors.",
  },
  {
    name: "Riverbank Clinics",
    role: "Health",
    text: "Staffs flood-season medical camps along the Brahmaputra chars.",
  },
  {
    name: "Seed & Salt Co-op",
    role: "Livelihoods",
    text: "Buys millet, pickles, and textiles from women-led producer groups.",
  },
  {
    name: "Kala Ground",
    role: "Youth arts",
    text: "Runs theatre fellowships in government schools we support.",
  },
  {
    name: "Public Ledger Lab",
    role: "Accountability",
    text: "Independent audit of every rupee that leaves our accounts.",
  },
  {
    name: "Coastal Kitchen Network",
    role: "Relief",
    text: "Community kitchens that scale within 48 hours of a cyclone warning.",
  },
];

export default function Partners() {
  return (
    <>
      <section className="page-hero">
        <p className="kicker">Partners</p>
        <h1>We never try to be the whole village.</h1>
        <p className="page-intro">
          HopeHarbor is a backbone, not a brand takeover. These organisations
          own the work on the ground; we fund, connect, and stay out of the way.
        </p>
      </section>

      <section className="section">
        <div className="partners">
          {partners.map((partner) => (
            <article className="partner" key={partner.name}>
              <small>{partner.role}</small>
              <strong>{partner.name}</strong>
              <p>{partner.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
