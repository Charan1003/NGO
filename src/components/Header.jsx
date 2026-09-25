import { useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About us" },
  { id: "work", label: "Our work" },
  { id: "partners", label: "Partners" },
  { id: "volunteer", label: "Volunteer" },
];

export default function Header({ page, onNavigate, headerRef }) {
  const [menuPage, setMenuPage] = useState(null);
  const menuOpen = menuPage === page;

  function navigate(nextPage) {
    setMenuPage(null);
    onNavigate(nextPage);
  }

  return (
    <header ref={headerRef} className="site-header">
      <button className="brand" onClick={() => navigate("home")}>
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
      <button
        className="nav-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuPage(menuOpen ? null : page)}
      >
        <span className="nav-toggle-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <nav
        id="primary-navigation"
        className={`nav${menuOpen ? " open" : ""}`}
        aria-label="Primary"
      >
        {links.map((link) => (
          <button
            key={link.id}
            className={page === link.id ? "active" : ""}
            aria-current={page === link.id ? "page" : undefined}
            onClick={() => navigate(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
