import { useEffect, useRef, useState } from "react";

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

export default function Home({ onNavigate }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(true);
  const [mediaCanAutoplay, setMediaCanAutoplay] = useState(false);
  const [programsHovered, setProgramsHovered] = useState(false);
  const [programsFocused, setProgramsFocused] = useState(false);
  const ngoVideoRef = useRef(null);
  const programSliderRef = useRef(null);
  const programsPaused = programsHovered || programsFocused;

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    );
    const syncPlaybackPreference = () => {
      const canAutoplay = mediaQuery.matches;
      setMediaCanAutoplay(canAutoplay);
      setCarouselPaused(!canAutoplay);
    };

    syncPlaybackPreference();
    mediaQuery.addEventListener("change", syncPlaybackPreference);

    return () => mediaQuery.removeEventListener("change", syncPlaybackPreference);
  }, []);

  useEffect(() => {
    const video = ngoVideoRef.current;
    if (!video) return undefined;

    if (!mediaCanAutoplay) {
      video.pause();
      return undefined;
    }

    video.muted = true;
    video.defaultMuted = true;

    const playVideo = () => {
      const playRequest = video.play();
      if (playRequest) {
        playRequest.catch(() => undefined);
      }
    };

    playVideo();
    video.addEventListener("canplay", playVideo);

    return () => video.removeEventListener("canplay", playVideo);
  }, [mediaCanAutoplay]);

  useEffect(() => {
    const slider = programSliderRef.current;
    if (
      programsPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const track = slider?.querySelector(".marquee-track");
    const cards = track?.querySelectorAll(".moving-card");
    const firstCard = cards?.[0];
    const repeatedCard = cards?.[programs.length];
    if (!slider || !firstCard || !repeatedCard) return undefined;

    const loopStart = repeatedCard.offsetLeft - firstCard.offsetLeft;
    let frameId;
    let previousTime = null;

    const move = (time) => {
      if (previousTime === null) previousTime = time;
      const elapsed = Math.min(time - previousTime, 64);
      previousTime = time;
      slider.scrollLeft += elapsed * 0.04;
      if (slider.scrollLeft >= loopStart) slider.scrollLeft -= loopStart;
      frameId = window.requestAnimationFrame(move);
    };

    frameId = window.requestAnimationFrame(move);

    return () => window.cancelAnimationFrame(frameId);
  }, [programsPaused]);

  useEffect(() => {
    if (carouselPaused) return undefined;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 2300);

    return () => window.clearInterval(interval);
  }, [carouselPaused]);

  const slide = heroSlides[activeSlide];

  function movePrograms(direction) {
    const slider = programSliderRef.current;
    const track = slider?.querySelector(".marquee-track");
    const card = track?.querySelector(".moving-card");
    if (!slider || !track || !card) return;

    const trackStyles = window.getComputedStyle(track);
    const gap =
      Number.parseFloat(trackStyles.columnGap || trackStyles.gap) || 14;
    const step = card.getBoundingClientRect().width + gap;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    slider.scrollBy({
      left: direction * step,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

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
        <div
          className="hero-controls"
          role="group"
          aria-label="Hero slider controls"
        >
          <button
            className="hero-arrow"
            type="button"
            aria-label="Previous slide"
            onClick={() =>
              setActiveSlide(
                (current) =>
                  (current - 1 + heroSlides.length) % heroSlides.length,
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
            className="hero-arrow hero-pause"
            type="button"
            aria-label={
              carouselPaused ? "Play hero slides" : "Pause hero slides"
            }
            aria-pressed={carouselPaused}
            onClick={() => setCarouselPaused((current) => !current)}
          >
            <span aria-hidden="true">{carouselPaused ? "▶" : "Ⅱ"}</span>
          </button>
          <button
            className="hero-arrow"
            type="button"
            aria-label="Next slide"
            onClick={() =>
              setActiveSlide((current) => (current + 1) % heroSlides.length)
            }
          >
            →
          </button>
        </div>
      </section>

      <section className="section field-section">
        <div className="field-collage-layout">
          <div className="field-copy">
            <p className="kicker">In the field</p>
            <h2>Change looks like people showing up.</h2>
            <p>
              We invest in the everyday places where trust grows: a classroom, a
              kitchen, a market, or a clinic on the river.
            </p>
            <span className="field-copy-rule" aria-hidden="true" />
            <p className="field-copy-note">
              Local teams lead the work. We bring the patience, resources, and
              relationships that help it last.
            </p>
          </div>
          <div className="field-collage-frame">
            <div className="photo-grid">
              {fieldStories
                .filter((story) => story.feature)
                .map((story) => (
                  <figure
                    className={
                      story.feature
                        ? "photo-story photo-feature"
                        : "photo-story"
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
            <aside className="field-quote-card">
              <span>Our field note</span>
              <p>
                “The people closest to a challenge lead the way through it.”
              </p>
              <strong>HopeHarbor field teams</strong>
            </aside>
          </div>
        </div>
      </section>

      <section className="home-about">
        <div className="home-about-media">
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
          <button
            className="btn light home-about-cta"
            onClick={() => onNavigate("about")}
          >
            Read our story <span aria-hidden="true">→</span>
          </button>
        </div>
        <div className="home-about-copy">
          <p className="kicker">About us</p>
          <h2>Trust is how good work becomes lasting change.</h2>
          <p>
            HopeHarbor began with neighbours sharing a meal after the 2009
            floods. Today, we work alongside local leaders to build schools,
            livelihoods, and care that communities can carry forward.
          </p>
          <p>
            The people closest to a challenge shape the answer. Our field teams
            in Maharashtra, Assam, and Rajasthan are drawn from — and answerable
            to — the families they serve. We stay for years, publish how every
            rupee is spent, and treat each community as the author of its own
            next chapter.
          </p>
          <ul className="about-points">
            <li>
              <span className="about-point-icon" aria-hidden="true">
                01
              </span>
              <p>
                <strong>Fund the ground, not the office.</strong> Over 84% of
                our spending goes directly to programs and the people who run
                them.
              </p>
            </li>
            <li>
              <span className="about-point-icon" aria-hidden="true">
                02
              </span>
              <p>
                <strong>Listen before we plan.</strong> Every project begins
                with priorities set by local leaders, not by a distant head
                office.
              </p>
            </li>
            <li>
              <span className="about-point-icon" aria-hidden="true">
                03
              </span>
              <p>
                <strong>Stay for the long road.</strong> Relief is a door;
                belonging is the house we build together over years.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="ngo-children-section">
        <div className="ngo-children-layout">
          <div className="ngo-children-copy">
            <p className="kicker">For every child</p>
            <h2>Every child deserves a safe place to grow.</h2>
            <p>
              HopeHarbor partners with local leaders to keep children in classrooms,
              healthy at home, and close to the people who know them best.
            </p>
            <div className="ngo-children-promise">
              <span>Our promise</span>
              <strong>Child-led change, supported for the long haul.</strong>
            </div>
          </div>
          <div className="ngo-video-frame">
            <video
              ref={ngoVideoRef}
              autoPlay={mediaCanAutoplay}
              loop
              muted
              playsInline
              preload={mediaCanAutoplay ? "metadata" : "none"}
              aria-label="HopeHarbor video supporting children and communities"
            >
              <source src="/ngovid.mp4" type="video/mp4" />
              Your browser does not support embedded videos.
            </video>
            <span className="ngo-video-label">Children first. Always.</span>
          </div>
        </div>
      </section>

      <section className="section accreditation-section">
        <div className="section-head accreditation-head">
          <div>
            <p className="kicker">Empanelment &amp; accreditations</p>
            <h2>Accountability you can see.</h2>
          </div>
          <p>
            Our commitments are backed by independent networks and clear
            standards for how we serve communities and steward every rupee.
          </p>
        </div>
        <div className="accreditation-grid">
          <article className="accreditation-card">
            <img
              className="accreditation-image"
              src="/2017-2.png.webp"
              alt="Global Compact membership certificate"
              loading="lazy"
            />
            <div className="accreditation-content">
              <h3>Global Compact membership</h3>
              <p>
                Our work aligns with shared principles for responsible and
                sustainable community development.
              </p>
            </div>
          </article>
          <article className="accreditation-card">
            <img
              className="accreditation-image"
              src="/Guide-star.jpg.webp"
              alt="GuideStar accreditation badge"
              loading="lazy"
            />
            <div className="accreditation-content">
              <h3>Platinum transparency</h3>
              <p>
                Independent review recognises the openness of our reporting and
                public accountability.
              </p>
            </div>
          </article>
          <article className="accreditation-card">
            <img
              className="accreditation-image"
              src="/caf.png.webp"
              alt="CAF International validation badge"
              loading="lazy"
            />
            <div className="accreditation-content">
              <h3>Due diligence validated</h3>
              <p>
                Our systems are assessed against rigorous standards for trust,
                governance, and responsible giving.
              </p>
            </div>
          </article>
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
          <div
            className="program-slider-shell"
            onPointerEnter={() => setProgramsHovered(true)}
            onPointerLeave={() => setProgramsHovered(false)}
            onFocus={() => setProgramsFocused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setProgramsFocused(false);
              }
            }}
          >
            <button
              className="program-slider-button program-slider-previous"
              type="button"
              aria-label="Show previous programs"
              aria-controls="program-slider"
              onClick={() => movePrograms(-1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <div
              ref={programSliderRef}
              id="program-slider"
              className="marquee program-slider"
              role="region"
              aria-label="Program cards"
              tabIndex={0}
            >
              <div className="marquee-track">
                {[...programs, ...programs].map((item, index) => (
                  <article
                    className="card moving-card"
                    aria-hidden={index >= programs.length ? "true" : undefined}
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
            <button
              className="program-slider-button program-slider-next"
              type="button"
              aria-label="Show next programs"
              aria-controls="program-slider"
              onClick={() => movePrograms(1)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
          <p className="programs-note">
            Six programmes, one principle: communities should have the tools and
            trust to shape their own next chapter.
          </p>
        </div>
      </section>
    </>
  );
}
