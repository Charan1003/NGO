import { useState } from "react";
import PageHero from "../components/PageHero";

const volunteerStats = [
  { value: "640", label: "active volunteers" },
  { value: "42", label: "districts supported" },
  { value: "3 days", label: "to hear from our team" },
  { value: "48 hrs", label: "to activate a drive" },
];

const volunteerRoles = [
  {
    number: "01",
    type: "Learning",
    title: "Tutor a learning circle",
    text: "Spend an hour with a young reader, practise a language, or help a local teacher keep a classroom moving forward.",
    availability: "2–4 hours / month",
  },
  {
    number: "02",
    type: "Community",
    title: "Run a community kitchen",
    text: "Prepare, serve, and care for the spaces where a warm meal becomes a reason to gather.",
    availability: "Weekend shifts",
  },
  {
    number: "03",
    type: "Relief",
    title: "Join a relief crew",
    text: "Pack kits, move supplies, or bring practical support to families when a flood or cyclone changes the ground.",
    availability: "When called",
  },
  {
    number: "04",
    type: "Skills",
    title: "Share your craft",
    text: "Offer design, data, transport, translation, or another skill that helps local teams do more with less.",
    availability: "Project-based",
  },
];

const volunteerDrives = [
  {
    day: "12",
    month: "Oct",
    title: "Palghar library repair weekend",
    location: "Palghar, Maharashtra",
    type: "Hands-on",
    spots: "12 spots",
  },
  {
    day: "26",
    month: "Oct",
    title: "Guwahati flood-kit packing",
    location: "Guwahati, Assam",
    type: "Warehouse",
    spots: "30 spots",
  },
  {
    day: "09",
    month: "Nov",
    title: "Barmer millet market stall",
    location: "Barmer, Rajasthan",
    type: "Community",
    spots: "18 spots",
  },
];

const volunteerSteps = [
  {
    number: "01",
    title: "Tell us what you can do",
    text: "A few details help us match your time and skills to a real need.",
  },
  {
    number: "02",
    title: "Meet your local lead",
    text: "A district coordinator will reply within three days with the next best way in.",
  },
  {
    number: "03",
    title: "Make it count",
    text: "You bring the time. Local teams bring the context and the relationships.",
  },
];

function DonationQr() {
  return (
    <img className="donation-qr-image" src="/qr.png" alt="Donation QR code" />
  );
}

export default function Volunteer() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        title="Volunteer"
        subtitle="Give a weekend. Keep the hearth lit."
        intro="We need tutors, kitchen hands, translators, and people who can drive a van through a flooded lane. Sign up and a district lead will write back within three days."
        image="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="volunteer-impact-section">
        <div className="volunteer-impact-layout">
          <div className="volunteer-impact-copy">
            <p className="kicker">Make an hour matter</p>
            <h2>Your time becomes someone’s next chapter.</h2>
            <p>
              There is no single way to show up. Bring what you know, stay for
              what you learn, and help a local team carry the work further.
            </p>
          </div>
          <div className="volunteer-stats-grid" aria-label="Volunteer impact highlights">
            {volunteerStats.map((stat) => (
              <div className="volunteer-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section volunteer-section">
        <div className="volunteer-layout grid-2">
          <article className="form-card volunteer-form-card">
            <div className="volunteer-form-intro">
              <p className="kicker">Start here</p>
              <h2>Let’s find your place in the work.</h2>
              <p>
                Tell us a little about yourself. We will connect you with a
                district lead and a place to start that fits your availability.
              </p>
            </div>
            {sent ? (
              <div className="success volunteer-success">
                <strong>Thank you for showing up.</strong>
                <p>
                  A field coordinator will email you with the next open drive in
                  your city.
                </p>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <label>
                  Full name
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
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
                  <textarea
                    name="note"
                    placeholder="City, languages, availability"
                  />
                </label>
                <div className="volunteer-form-footer">
                  <p>We reply within three days — no perfect pitch required.</p>
                  <button className="btn primary" type="submit">
                    Send my interest
                  </button>
                </div>
              </form>
            )}
          </article>

          <div className="side-stack">
            <div className="card volunteer-side-card volunteer-drives-card">
              <div className="volunteer-side-head">
                <div>
                  <p className="kicker">Upcoming</p>
                  <h3>Next field drives</h3>
                </div>
                <span className="volunteer-drive-count">03</span>
              </div>
              <ul className="drive-list">
                {volunteerDrives.map((drive) => (
                  <li key={drive.title}>
                    <div className="drive-date">
                      <strong>{drive.day}</strong>
                      <span>{drive.month}</span>
                    </div>
                    <div className="drive-details">
                      <strong>{drive.title}</strong>
                      <span>{drive.location}</span>
                      <small>
                        {drive.type} · {drive.spots}
                      </small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card donation-card volunteer-side-card volunteer-donation-card">
              <p className="kicker">Donate</p>
              <h3>Support a field drive</h3>
              <div className="donation-qr">
                <DonationQr />
              </div>
              <p className="donation-id">UPI ID: hopeharbor@upi</p>
              <p className="donation-note">
                Scan to donate food, medicine, or cash support for the next
                community response.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section volunteer-roles-section">
        <div className="section-head volunteer-roles-head">
          <div>
            <p className="kicker">Find your way in</p>
            <h2>There is a place for your kind of help.</h2>
          </div>
          <p>
            Start with one of these paths, or bring something we have not thought
            of yet. The most useful thing you can share is often simply your
            attention.
          </p>
        </div>
        <div className="volunteer-role-grid">
          {volunteerRoles.map((role) => (
            <article className="volunteer-role-card" key={role.number}>
              <span className="volunteer-role-number">{role.number}</span>
              <p className="kicker">{role.type}</p>
              <h3>{role.title}</h3>
              <p>{role.text}</p>
              <span className="volunteer-role-meta">{role.availability}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section volunteer-process-section">
        <div className="volunteer-process-layout">
          <div className="volunteer-process-intro">
            <p className="kicker">What happens next</p>
            <h2>Small beginning. Real momentum.</h2>
            <p>
              You do not need to have the whole answer. We will help you find
              the first useful step, then stay alongside you as the work grows.
            </p>
          </div>
          <ol className="volunteer-steps">
            {volunteerSteps.map((step) => (
              <li key={step.number}>
                <span className="volunteer-step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
