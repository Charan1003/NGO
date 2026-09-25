import { useState } from "react";
import PageHero from "../components/PageHero";

const partnerFilters = [
  "All",
  "Care",
  "Learning",
  "Planet",
  "Livelihoods",
  "Technology",
  "Community",
];

const partners = [
  {
    name: "Medicare Plus",
    sector: "Hospital",
    category: "Care",
    logoPosition: "0% 0%",
    description: "Healing that reaches every doorstep.",
    focus: "Flood-season clinics",
    location: "Assam chars",
    outcome: "19,400 care visits",
  },
  {
    name: "BrightPath",
    sector: "Education",
    category: "Learning",
    logoPosition: "25% 0%",
    description: "A bright future for every child.",
    focus: "Teacher fellowships",
    location: "Palghar",
    outcome: "86,000 children in school",
  },
  {
    name: "GreenEarth",
    sector: "Environment Solutions",
    category: "Planet",
    logoPosition: "50% 0%",
    description: "Rooted in the earth we share.",
    focus: "Regenerative livelihoods",
    location: "Barmer",
    outcome: "42 partner districts",
  },
  {
    name: "FlavorNest",
    sector: "Food & Beverage",
    category: "Livelihoods",
    logoPosition: "75% 0%",
    description: "Every meal serves a community.",
    focus: "Women-led kitchens",
    location: "Coastal belt",
    outcome: "1,240 livelihood grants",
  },
  {
    name: "SkyRoute",
    sector: "Travel & Tours",
    category: "Community",
    logoPosition: "100% 0%",
    description: "Journeys that bring people together.",
    focus: "Last-mile access",
    location: "Northeast India",
    outcome: "11 river villages connected",
  },
  {
    name: "NexoraTech",
    sector: "IT Solutions",
    category: "Technology",
    logoPosition: "0% 100%",
    description: "Technology builds bridges, not walls.",
    focus: "Public service tools",
    location: "Across our network",
    outcome: "9 open-source tools",
  },
  {
    name: "FinTrust",
    sector: "Banking & Finance",
    category: "Community",
    logoPosition: "25% 100%",
    description: "Trust grows when we invest in people.",
    focus: "Transparent funding",
    location: "Mumbai + districts",
    outcome: "84% direct programme spend",
  },
  {
    name: "HavenBuild",
    sector: "Real Estate",
    category: "Community",
    logoPosition: "50% 100%",
    description: "Shelter is where belonging begins.",
    focus: "Community housing",
    location: "Mumbai",
    outcome: "640 homes supported",
  },
  {
    name: "VitaFit",
    sector: "Fitness & Wellness",
    category: "Care",
    logoPosition: "75% 100%",
    description: "Strength is found together.",
    focus: "Community wellbeing",
    location: "Palghar",
    outcome: "32 active kitchens",
  },
  {
    name: "QuickMove",
    sector: "Logistics",
    category: "Community",
    logoPosition: "100% 100%",
    description: "Hope moves fast when neighbours care.",
    focus: "Relief supply lines",
    location: "Pan-India",
    outcome: "48-hour response time",
  },
];

function PartnerLogo({ partner }) {
  return (
    <span
      className="partner-logo-image"
      style={{
        backgroundPosition: partner.logoPosition,
        backgroundImage: 'url("/partners.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "500% 200%",
      }}
      role="img"
      aria-label={`${partner.name} logo`}
    />
  );
}

const partnerStats = [
  { value: "10", label: "specialist organisations" },
  { value: "42", label: "districts in the network" },
  { value: "84%", label: "spend directed to programmes" },
  { value: "19", label: "active partner relationships" },
];

export default function Partners() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredPartners =
    activeFilter === "All"
      ? partners
      : partners.filter((partner) => partner.category === activeFilter);

  return (
    <>
      <PageHero
        title="Partners"
        subtitle="We never try to be the whole village."
        intro="HopeHarbor is a backbone, not a brand takeover. These organisations own the work on the ground; we fund, connect, and stay out of the way."
        image="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="section partner-stats-section">
        <div className="partner-stats-intro">
          <p className="kicker">One network, many strengths</p>
          <h2>Different strengths. Shared direction.</h2>
        </div>
        <div className="partner-stats-grid" aria-label="Partner network highlights">
          {partnerStats.map((stat) => (
            <div className="partner-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section field-section partner-page-section">
        <div className="section-head partner-directory-head">
          <div>
            <p className="kicker">Who we work with</p>
            <h2>Small teams, big reach.</h2>
          </div>
          <p>
            These ten organisations turn funding into action in the places it
            matters most. Each one owns its expertise; we bring the network that
            helps it go further.
          </p>
        </div>

        <div className="partner-principles" aria-label="How we partner">
          <div>
            <span>01</span>
            <h3>Local leadership</h3>
            <p>Decisions stay close to the people the work is for.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Shared capability</h3>
            <p>Funding, tools, and relationships move where they help most.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Earned trust</h3>
            <p>Progress is measured by lasting community confidence.</p>
          </div>
        </div>

        <div className="partner-directory-toolbar">
          <div>
            <p className="kicker">The directory</p>
            <h3>Find a partner by focus.</h3>
          </div>
          <div
            className="partner-filter-list"
            role="group"
            aria-label="Filter partners by focus"
          >
            {partnerFilters.map((filter) => (
              <button
                className={activeFilter === filter ? "active" : ""}
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="partner-directory-grid" aria-live="polite">
          {filteredPartners.map((partner) => (
            <article className="partner-directory-card" key={partner.name}>
              <div className="partner-card-top">
                <div className="partner-card-logo">
                  <PartnerLogo partner={partner} />
                </div>
                <span className="partner-card-category">{partner.category}</span>
              </div>
              <div className="partner-card-body">
                <span className="partner-card-sector">{partner.sector}</span>
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </div>
              <div className="partner-card-meta">
                <span>
                  <small>Focus</small>
                  {partner.focus}
                </span>
                <span>
                  <small>Outcome</small>
                  {partner.outcome}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="marquee partner-marquee" aria-label="Partner companies">
          <div className="marquee-track partner-track">
            {[...partners, ...partners].map((partner, index) => (
              <div className="partner-lockup" key={`${partner.name}-${index}`}>
                <PartnerLogo partner={partner} />
              </div>
            ))}
          </div>
        </div>

        <div className="partner-reflection">
          <p className="partner-quote">
            “Partnership makes good work travel further.”
          </p>
          <p className="programs-note">
            Partnership is a promise, not a poster. Whether it is a clinic on
            the river or a classroom in the hills, we measure success by the
            trust each partner earns in its own community — and we stay out of
            the way while they do it.
          </p>
        </div>
      </section>

      <section className="section partner-cta-section">
        <div className="partner-cta-card">
          <p className="kicker">Partner with HopeHarbor</p>
          <h2>Bring your expertise to the places that need it.</h2>
          <p>
            We are always looking for thoughtful organisations who believe the
            strongest partnerships share power, stay accountable, and keep
            listening.
          </p>
          <a
            className="btn primary"
            href="mailto:hello@hopeharbor.org?subject=Partner%20with%20HopeHarbor"
          >
            Start a conversation <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
