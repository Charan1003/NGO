import { useState } from 'react'

export default function Volunteer() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <p className="kicker">Volunteer</p>
        <h1>Give a weekend. Keep the hearth lit.</h1>
        <p className="page-intro">
          We need tutors, kitchen hands, translators, and people who can drive
          a van through a flooded lane. Sign up and a district lead will write
          back within three days.
        </p>
      </section>

      <section className="section">
        <div className="grid-2">
          <article className="form-card">
            {sent ? (
              <div className="success">
                Thank you. A field coordinator will email you with the next
                open drive in your city.
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <label>
                  Full name
                  <input name="name" required placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input type="email" name="email" required placeholder="you@example.com" />
                </label>
                <label>
                  How can you help?
                  <select name="role" defaultValue="tutoring">
                    <option value="tutoring">Weekend tutoring</option>
                    <option value="kitchen">Community kitchen</option>
                    <option value="relief">Disaster relief</option>
                    <option value="skills">Professional skills</option>
                  </select>
                </label>
                <label>
                  A little about you
                  <textarea name="note" placeholder="City, languages, availability" />
                </label>
                <button className="btn primary" type="submit">
                  Send my interest
                </button>
              </form>
            )}
          </article>
          <div className="card">
            <h3>Upcoming drives</h3>
            <p>12 Oct — Palghar library repair weekend</p>
            <p>26 Oct — Guwahati flood-kit packing</p>
            <p>9 Nov — Barmer millet market stall</p>
          </div>
        </div>
      </section>
    </>
  )
}
