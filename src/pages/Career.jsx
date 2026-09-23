const jobs = [
  {
    title: 'District organiser — Barmer',
    meta: 'Full-time · Rajasthan · On-ground',
    text: 'Build village learning circles, coach local facilitators, and keep the grant pipeline honest.',
  },
  {
    title: 'Mobile clinic nurse',
    meta: 'Contract · Assam riverine belt',
    text: 'Six-month flood-season clinics with a community health team. GNM or B.Sc. Nursing required.',
  },
  {
    title: 'Partnerships writer',
    meta: 'Full-time · Mumbai or remote India',
    text: 'Turn field notes into funding briefs without flattening people into statistics.',
  },
]

export default function Career() {
  return (
    <>
      <section className="page-hero">
        <p className="kicker">Career</p>
        <h1>Come work where the work actually happens.</h1>
        <p className="page-intro">
          We hire organisers, nurses, teachers, and writers who already know
          how to listen. Most roles live in the districts we serve — not behind
          a glass wall in a metro office.
        </p>
      </section>

      <section className="section">
        <div className="jobs">
          {jobs.map((job) => (
            <article className="job" key={job.title}>
              <div>
                <h3>{job.title}</h3>
                <small>{job.meta}</small>
                <p>{job.text}</p>
              </div>
              <a className="btn primary" href="mailto:careers@hopeharbor.org">
                Apply
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
