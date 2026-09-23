import { useEffect, useState } from "react";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1800&q=85",
    alt: "Children learning together outdoors",
    kicker: "A community NGO since 2009",
    title: "When a neighbourhood is held, a future holds.",
    lede: "HopeHarbor funds classrooms, kitchens, and local organisers so families can stay rooted — not just survive the next crisis.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1800&q=85",
    alt: "Hands caring for a green crop in a field",
    kicker: "Rooted in local leadership",
    title: "The strongest solutions grow from the ground up.",
    lede: "We back the people closest to each challenge with the resources, trust, and time to shape lasting change.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1800&q=85",
    alt: "Community members working together outdoors",
    kicker: "Showing up when it matters",
    title: "Small acts become a shared way forward.",
    lede: "From rapid care to everyday learning, our partners make sure support reaches families with dignity and speed.",
  },
];

const programs = [
  {
    icon: "📚",
    title: "Learning circles",
    place: "Palghar",
    text: "After-school rooms, libraries, and teacher fellowships that keep first-generation students in class.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85",
    alt: "Children reading together in a classroom",
  },
  {
    icon: "🌾",
    title: "Livelihood labs",
    place: "Barmer",
    text: "Seed grants and market access for women-led farms, kitchens, and craft collectives.",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=85",
    alt: "Hands tending a green crop in a field",
  },
  {
    icon: "🛟",
    title: "Rapid care",
    place: "Assam chars",
    text: "Flood kits, mobile clinics, and community kitchens that arrive while the water is still receding.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=85",
    alt: "Community members working together outdoors",
  },
  {
    icon: "🍲",
    title: "Hearth kitchens",
    place: "Coastal belt",
    text: "Neighbourhood kitchens that scale within 48 hours of a cyclone warning.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    alt: "Fresh food prepared for a community meal",
  },
  {
    icon: "🎭",
    title: "Youth theatre",
    place: "Nagpur",
    text: "School fellowships where students write and stage the stories of their own streets.",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=85",
    alt: "A theatre stage ready for a performance",
  },
  {
    icon: "🩺",
    title: "River clinics",
    place: "Brahmaputra",
    text: "Boat-led health camps for families living on shifting river islands.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=85",
    alt: "Children gathered together outside a school",
  },
];

const fieldStories = [
  {
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=85",
    alt: "Students learning together in a bright classroom",
    label: "Learning circles",
    text: "A library becomes a place to stay, ask questions, and imagine further.",
    feature: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=85",
    alt: "Community members working together outdoors",
    label: "Local leadership",
    text: "The people closest to a problem lead the way through it.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=85",
    alt: "Children smiling together outdoors",
    label: "A wider future",
    text: "Small, steady support gives families room to build what comes next.",
  },
];

const partnerHighlights = [
  {
    role: "Learning",
    title: "Nalanda Open Library",
    text: "Bilingual readers and mentor training help after-school spaces become places to belong.",
  },
  {
    role: "Health",
    title: "Riverbank Clinics",
    text: "Local medical teams bring flood-season care to families along the Brahmaputra chars.",
  },
  {
    role: "Accountability",
    title: "Public Ledger Lab",
    text: "Independent review helps every partner and community see how resources are used.",
  },
];

export default function Home({ onNavigate }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 2300);

    return () => window.clearInterval(interval);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <>
      <section className="hero" aria-label="HopeHarbor stories">
        <img className="hero-image" src={slide.image} alt={slide.alt} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="kicker">{slide.kicker}</p>
          <h1>{slide.title}</h1>
          <p className="lede">{slide.lede}</p>
          <div className="hero-actions">
            <button
              className="btn primary"
              onClick={() => onNavigate("volunteer")}
            >
              Volunteer with us
            </button>
            <button className="btn ghost" onClick={() => onNavigate("about")}>
              Our story
            </button>
          </div>
        </div>
        <aside className="hero-card">
          <p>
            Field teams in Maharashtra, Assam, and Rajasthan — always led by
            people who live there.
          </p>
          <div className="hero-stats">
            <div>
              <strong>86k</strong>
              children in school
            </div>
            <div>
              <strong>1,240</strong>
              livelihood grants
            </div>
            <div>
              <strong>19</strong>
              partner orgs
            </div>
          </div>
        </aside>
        <div className="hero-controls" aria-label="Hero slider controls">
          <button
            className="hero-arrow"
            type="button"
            aria-label="Previous slide"
            onClick={() =>
              setActiveSlide(
                (activeSlide - 1 + heroSlides.length) % heroSlides.length,
              )
            }
          >
            ←
          </button>
          <div className="hero-dots">
            {heroSlides.map((item, index) => (
              <button
                className={
                  index === activeSlide ? "hero-dot active" : "hero-dot"
                }
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeSlide ? "true" : undefined}
                key={item.title}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
          <button
            className="hero-arrow"
            type="button"
            aria-label="Next slide"
            onClick={() =>
              setActiveSlide((activeSlide + 1) % heroSlides.length)
            }
          >
            →
          </button>
        </div>
      </section>

      <section className="section field-section">
        <div className="section-head">
          <div>
            <p className="kicker">In the field</p>
            <h2>Change looks like people showing up.</h2>
          </div>
          <p>
            We invest in the everyday places where trust grows: a classroom, a
            kitchen, a market, or a clinic on the river.
          </p>
        </div>
        <div className="photo-grid">
          {fieldStories.map((story) => (
            <figure
              className={
                story.feature ? "photo-story photo-feature" : "photo-story"
              }
              key={story.label}
            >
              <img src={story.image} alt={story.alt} loading="lazy" />
              <figcaption>
                <span>{story.label}</span>
                <strong>{story.text}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="programs-section">
          <div className="section-head">
            <div>
              <p className="kicker">What we do</p>
              <h2>Three promises, one hearth</h2>
            </div>
            <p>
              We do not fly in with a template. We resource the people already
              holding the line, then stay long enough for local solutions to
              become strong and self-sustaining.
            </p>
          </div>
          <div className="marquee" aria-label="Moving program cards">
            <div className="marquee-track">
              {[...programs, ...programs].map((item, index) => (
                <article
                  className="card moving-card"
                  key={`${item.title}-${index}`}
                >
                  <img
                    className="program-image"
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                  />
                  <div className="program-content">
                    <div className="icon">{item.icon}</div>
                    <small>{item.place}</small>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <p className="programs-note">
            Six programmes, one principle: communities should have the tools and
            trust to shape their own next chapter.
          </p>
        </div>
      </section>

      <section className="home-partners">
        <div className="home-partners-head">
          <div>
            <p className="kicker">Our partners</p>
            <h2>We never try to be the whole village.</h2>
          </div>
          <p>
            The people closest to a challenge lead the work. We fund, connect,
            and stay accountable alongside them.
          </p>
        </div>
        <div className="home-partner-grid">
          {partnerHighlights.map((partner) => (
            <article className="home-partner-item" key={partner.title}>
              <small>{partner.role}</small>
              <h3>{partner.title}</h3>
              <p>{partner.text}</p>
            </article>
          ))}
        </div>
        <button
          className="btn partner-link"
          onClick={() => onNavigate("partners")}
        >
          Meet all our partners <span aria-hidden="true">→</span>
        </button>
      </section>

      <section className="home-about">
        <div className="home-about-photos">
          <img
            className="home-about-photo-main"
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=85"
            alt="Community members working together outdoors"
            loading="lazy"
          />
          <img
            className="home-about-photo-small"
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=85"
            alt="Children learning together in a community space"
            loading="lazy"
          />
        </div>
        <div className="home-about-copy">
          <p className="kicker">About us</p>
          <h2>Trust is how good work becomes lasting change.</h2>
          <p>
            HopeHarbor began with neighbours sharing a meal after the 2009
            floods. Today, we work alongside local leaders to build schools,
            livelihoods, and care that communities can carry forward.
          </p>
          <button className="btn light" onClick={() => onNavigate("about")}>
            Read our story <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>
    </>
  );
}
