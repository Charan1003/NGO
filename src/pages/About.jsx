const values = [
  {
    title: "Local first",
    text: "Budgets, hiring, and program design sit with district teams — not a distant head office.",
  },
  {
    title: "Dignity over charity",
    text: "We pay fairly, publish our books, and never photograph people as props for fundraising.",
  },
  {
    title: "Slow trust",
    text: "We stay in a village for years. Relief is a door; belonging is the house.",
  },
];

const team = [
  {
    name: "Meera Joshi",
    role: "Executive director",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Arun Deka",
    role: "Assam field lead",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Lata Bishnoi",
    role: "Livelihoods",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Imran Qureshi",
    role: "Learning circles",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <p className="kicker">About us</p>
        <h1>We started as a kitchen. We stayed as neighbours.</h1>
        <p className="page-intro">
          After the 2009 floods, a group of teachers in Palghar cooked for
          families sleeping in a school. That kitchen became HopeHarbor — a
          trust that now backs organisers, classrooms, and small businesses
          across 42 districts.
        </p>
      </section>

      <section className="section trust-section">
        <div className="trust-feature">
          <div className="trust-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85"
              alt="Community members sharing ideas around a table"
            />
            <span className="trust-image-label">Trust grows in the open</span>
          </div>
          <div className="trust-copy">
            <p className="kicker">Why trust matters</p>
            <h2>
              People give us their time, stories, and hopes. We treat that as a
              responsibility.
            </h2>
            <p>
              A grant can start a project, but trust is what makes it last. We
              listen before we plan, share decisions with local leaders, and
              stay accountable to the families our work is meant to serve.
            </p>
            <div className="trust-points">
              <div>
                <strong>01</strong>
                <p>
                  <b>Listen first.</b> Every program begins with community-led
                  priorities.
                </p>
              </div>
              <div>
                <strong>02</strong>
                <p>
                  <b>Show the work.</b> Budgets, outcomes, and lessons are
                  shared plainly.
                </p>
              </div>
              <div>
                <strong>03</strong>
                <p>
                  <b>Stay present.</b> We measure relationships over years, not
                  campaign cycles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid-2">
          <blockquote className="quote">
            <p>
              “Aid that leaves when the cameras leave is just weather. We wanted
              climate.”
            </p>
            <cite>— Meera Joshi, founding teacher</cite>
          </blockquote>
          <div className="grid-3" style={{ gridTemplateColumns: "1fr" }}>
            {values.map((value) => (
              <article className="card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div
          className="trust-metrics"
          aria-label="HopeHarbor accountability metrics"
        >
          <div>
            <strong>15 years</strong>
            <span>of staying with communities</span>
          </div>
          <div>
            <strong>42 districts</strong>
            <span>where local partners lead</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>of programs reviewed with communities</span>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-head">
          <div>
            <p className="kicker">People</p>
            <h2>The table we keep</h2>
          </div>
        </div>
        <div className="team">
          {team.map((person) => (
            <article className="person" key={person.name}>
              <div
                className="photo"
                style={{ backgroundImage: `url(${person.photo})` }}
                role="img"
                aria-label={person.name}
              />
              <div>
                <h3>{person.name}</h3>
                <span>{person.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
