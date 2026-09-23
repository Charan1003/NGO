const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About us" },
  { id: "career", label: "Career" },
  { id: "partners", label: "Partners" },
  { id: "volunteer", label: "Volunteer" },
];

export default function Header({ page, onNavigate }) {
  return (
    <header className="site-header">
      <button className="brand" onClick={() => onNavigate("home")}>
        <img
          className="brand-logo"
          src="/hopeharbor-logo.svg"
          alt="HopeHarbor logo"
        />
        <span>
          <strong>HopeHarbor</strong>
          <span>People first, always</span>
        </span>
      </button>
      <nav className="nav" aria-label="Primary">
        {links.map((link) => (
          <button
            key={link.id}
            className={page === link.id ? "active" : ""}
            onClick={() => onNavigate(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
