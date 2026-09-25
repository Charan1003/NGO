import PageHero from "../components/PageHero";

const jobs = [
  {
    title: "District organiser — Barmer",
    meta: "Full-time · Rajasthan · On-ground",
    text: "Build village learning circles, coach local facilitators, and keep the grant pipeline honest.",
  },
  {
    title: "Mobile clinic nurse",
    meta: "Contract · Assam riverine belt",
    text: "Six-month flood-season clinics with a community health team. GNM or B.Sc. Nursing required.",
  },
  {
    title: "Partnerships writer",
    meta: "Full-time · Mumbai or remote India",
    text: "Turn field notes into funding briefs without flattening people into statistics.",
  },
];

export default function Career() {
  return (
    <>
      <PageHero
        title="Career"
        subtitle="Come work where the work actually happens."
        intro="We hire organisers, nurses, teachers, and writers who already know how to listen. Most roles live in the districts we serve — not behind a glass wall in a metro office."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="section career-section">
        <div className="section-head career-head">
          <div>
            <p className="kicker">Open roles</p>
            <h2>Bring your craft to the field.</h2>
          </div>
          <p>
            We look for people who pair professional skill with patience,
            curiosity, and the ability to make good decisions close to the
            ground.
          </p>
        </div>

        <div className="career-layout">
          <aside className="career-aside">
            <p className="kicker">What to expect</p>
            <h3>Useful work, done with care.</h3>
            <p>
              Your best work here will be collaborative, practical, and shaped
              by the communities we serve.
            </p>
            <ul className="career-values">
              <li>Listen before you design.</li>
              <li>Take responsibility for the details.</li>
              <li>Leave local teams stronger.</li>
            </ul>
          </aside>

          <div className="jobs-panel">
            <div className="jobs-panel-head">
              <span>Current openings</span>
              <strong>{jobs.length} roles</strong>
            </div>
            <div className="jobs">
              {jobs.map((job, index) => (
                <article className="job" key={job.title}>
                  <div className="job-number">0{index + 1}</div>
                  <div className="job-content">
                    <h3>{job.title}</h3>
                    <small>{job.meta}</small>
                    <p>{job.text}</p>
                  </div>
                  <a
                    className="btn primary"
                    href="mailto:careers@hopeharbor.org"
                  >
                    Apply
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
