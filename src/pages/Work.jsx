import PageHero from "../components/PageHero";

const workAreas = [
  {
    number: "01",
    category: "Learning",
    title: "Learning circles",
    place: "Palghar, Maharashtra",
    text: "After-school rooms, libraries, and teacher fellowships keep first-generation students in class and give communities a place to learn together.",
    outcome: "86,000",
    outcomeLabel: "children supported in 2024",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1100&q=85",
    alt: "Children learning together in a classroom",
  },
  {
    number: "02",
    category: "Livelihoods",
    title: "Livelihood labs",
    place: "Barmer, Rajasthan",
    text: "Seed grants and market access help women-led farms, kitchens, and craft collectives build businesses that belong to the people who run them.",
    outcome: "1,240",
    outcomeLabel: "grants in the last year",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1100&q=85",
    alt: "Hands caring for a green crop in a field",
  },
  {
    number: "03",
    category: "Rapid care",
    title: "Rapid response",
    place: "Assam riverine belt",
    text: "Flood kits, mobile clinics, and community kitchens move quickly when water rises, then stay long enough to help families recover with dignity.",
    outcome: "48 hrs",
    outcomeLabel: "to activate a local response",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1100&q=85",
    alt: "Community members working together outdoors",
  },
  {
    number: "04",
    category: "Health",
    title: "River clinics",
    place: "Brahmaputra chars",
    text: "Boat-led health camps bring primary care, maternal support, and trusted local health workers to families living on shifting river islands.",
    outcome: "19,400",
    outcomeLabel: "care visits delivered",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1100&q=85",
    alt: "Children gathered together outside a school",
  },
  {
    number: "05",
    category: "Relief",
    title: "Hearth kitchens",
    place: "Coastal belt",
    text: "Neighbourhood kitchens turn local ingredients and neighbourly effort into warm meals that can scale within 48 hours of a warning.",
    outcome: "32",
    outcomeLabel: "kitchens active this season",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=85",
    alt: "Fresh food prepared for a community meal",
  },
  {
    number: "06",
    category: "Youth",
    title: "Youth theatre",
    place: "Nagpur, Maharashtra",
    text: "School fellowships give young people the tools, space, and confidence to write and stage the stories of their own streets.",
    outcome: "640",
    outcomeLabel: "young storytellers supported",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1100&q=85",
    alt: "A theatre stage ready for a performance",
  },
];

const workMetrics = [
  { value: "42", label: "districts with local partners" },
  { value: "84%", label: "of spending goes to programmes" },
  { value: "15 yrs", label: "of staying with communities" },
  { value: "19", label: "partner organisations" },
];

const workStories = [
  {
    type: "Field story",
    place: "Palghar",
    title: "A library that became a living room",
    text: "A repaired school library now hosts reading circles, evening classes, and a place for parents to share what their children need next.",
    result: "4,800",
    resultLabel: "weekly visitors",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1100&q=85",
    alt: "Students learning together in a bright classroom",
  },
  {
    type: "Field story",
    place: "Barmer",
    title: "The mill is back on the market shelf",
    text: "Women-led producer groups used a shared grant to improve storage, packaging, and the route from field to market without giving up their independence.",
    result: "2.4×",
    resultLabel: "more household income",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1100&q=85",
    alt: "Hands tending a green crop in a field",
  },
  {
    type: "Field story",
    place: "Assam",
    title: "Care that moves with the river",
    text: "Local health workers and boat crews built a clinic schedule around the seasons, so care reaches families before a crisis becomes a crisis.",
    result: "11",
    resultLabel: "villages connected",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1100&q=85",
    alt: "Community members working together outdoors",
  },
];

export default function Work({ onNavigate }) {
  return (
    <>
      <PageHero
        title="Our work"
        subtitle="The work is local. The change travels."
        intro="HopeHarbor works alongside people who know their communities best — funding the classrooms, kitchens, clinics, and small businesses that make a future feel possible."
        image="/yannis-h-uaPaEM7MiQQ-unsplash.jpg"
      />

      <section className="section work-section">
        <div className="work-intro-layout">
          <div className="work-intro-copy">
            <p className="kicker">The shape of our work</p>
            <h2>Support that starts close to home.</h2>
            <p>
              We do not arrive with a finished answer. We listen for what is
              already working, put resources behind local leaders, and stay long
              enough for a good idea to become a community practice.
            </p>
            <p>
              Every programme is shaped by the same question: what will families
              be able to carry forward after we leave?
            </p>
          </div>
          <div className="work-principles">
            <div>
              <span>01</span>
              <div>
                <h3>Start with what is strong.</h3>
                <p>Local knowledge is the first resource we bring to the table.</p>
              </div>
            </div>
            <div>
              <span>02</span>
              <div>
                <h3>Make room to adapt.</h3>
                <p>Plans change when communities show us a better way forward.</p>
              </div>
            </div>
            <div>
              <span>03</span>
              <div>
                <h3>Measure what lasts.</h3>
                <p>We track trust, capability, and belonging alongside numbers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt work-areas-section">
        <div className="section-head work-areas-head">
          <div>
            <p className="kicker">Where we work</p>
            <h2>Six ways to keep a neighbourhood moving.</h2>
          </div>
          <p>
            Different challenges need different tools. Our shared approach is to
            back the people closest to the problem and give their work the time
            and resources to grow.
          </p>
        </div>
        <div className="work-areas-grid">
          {workAreas.map((area) => (
            <article className="work-area-card" key={area.number}>
              <div className="work-area-media">
                <img src={area.image} alt={area.alt} loading="lazy" />
                <span className="work-area-number">{area.number}</span>
              </div>
              <div className="work-area-body">
                <div className="work-area-meta">
                  <span>{area.category}</span>
                  <span>{area.place}</span>
                </div>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
                <div className="work-area-outcome">
                  <strong>{area.outcome}</strong>
                  <span>{area.outcomeLabel}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-metrics-section">
        <div className="work-metrics-inner">
          <div className="work-metrics-heading">
            <p className="kicker">The long view</p>
            <h2>Small commitments. Wide circles.</h2>
            <p>
              Our ambition is not to be everywhere. It is to be useful where
              communities ask us to stay.
            </p>
          </div>
          <div className="work-metrics-grid">
            {workMetrics.map((metric) => (
              <div className="work-metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section work-stories-section">
        <div className="section-head work-stories-head">
          <div>
            <p className="kicker">Stories from the field</p>
            <h2>The detail matters.</h2>
          </div>
          <p>
            Progress is not always a headline. Sometimes it is a clinic that
            reaches one more family, a market that keeps a stall open, or a
            young person finding a voice.
          </p>
        </div>
        <div className="work-stories-grid">
          {workStories.map((story) => (
            <article className="work-story-card" key={story.title}>
              <div className="work-story-image">
                <img src={story.image} alt={story.alt} loading="lazy" />
                <span>{story.place}</span>
              </div>
              <div className="work-story-body">
                <p className="kicker">{story.type}</p>
                <h3>{story.title}</h3>
                <p>{story.text}</p>
                <div className="work-story-result">
                  <strong>{story.result}</strong>
                  <span>{story.resultLabel}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-cta-section">
        <div className="work-cta-card">
          <p className="kicker">Work with us</p>
          <h2>Good work grows when more people bring their piece.</h2>
          <p>
            Share a skill, a weekend, or a question. We will help you find the
            nearest place to begin.
          </p>
          <div className="work-cta-actions">
            <button
              className="btn light"
              onClick={() => onNavigate("volunteer")}
              type="button"
            >
              Volunteer with us <span aria-hidden="true">→</span>
            </button>
            <button
              className="btn ghost"
              onClick={() => onNavigate("partners")}
              type="button"
            >
              Meet our partners
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
