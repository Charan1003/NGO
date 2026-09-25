import { useLayoutEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Partners from "./pages/Partners";
import Volunteer from "./pages/Volunteer";

const pages = {
  home: Home,
  about: About,
  work: Work,
  partners: Partners,
  volunteer: Volunteer,
};

export default function App() {
  const [page, setPage] = useState("home");
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  const Page = pages[page];

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return undefined;

    const updateHeaderHeight = () => {
      setHeaderHeight(header.getBoundingClientRect().height);
    };

    updateHeaderHeight();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateHeaderHeight);
      return () => window.removeEventListener("resize", updateHeaderHeight);
    }

    const observer = new ResizeObserver(updateHeaderHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  function handleNavigate(nextPage) {
    setPage(nextPage);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

  return (
    <div
      className={`app${page === "home" ? " home-app" : ""}`}
      style={{ "--header-height": `${headerHeight}px` }}
    >
      <Header
        page={page}
        onNavigate={handleNavigate}
        headerRef={headerRef}
      />
      <main>
        <Page onNavigate={handleNavigate} />
      </main>
      <div
        className={`contact-floaters ${
          page === "home" ? "home-contact-floaters" : ""
        }`}
        aria-label="Contact HopeHarbor"
      >
        <a
          className="contact-floater whatsapp-floater"
          href="https://wa.me/912240001847"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with HopeHarbor on WhatsApp"
        >
          <span className="contact-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.3ZM12.2 21.5c-1.7 0-3.4-.4-4.9-1.3l-.4-.2-3.8 1 1-3.7-.2-.4a9.7 9.7 0 1 1 8.3 4.6Zm5.3-7.3c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.8-3.2-.3-.5.3-.5.8-1.5.1-.2.1-.4 0-.6s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.5.2.2 2.4 3.7 5.9 5.2 2.2 1 2.2.7 2.6.7.4 0 1.7-.7 2-1.3.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.4Z" />
            </svg>
          </span>
          <strong>WhatsApp</strong>
        </a>
        <a
          className="contact-floater call-floater"
          href="tel:+912240001847"
          aria-label="Call HopeHarbor"
        >
          <span className="contact-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <path d="M6.6 2.5 9 2c.7-.1 1.4.3 1.7 1l1.1 2.7c.2.6.1 1.3-.4 1.7L10 8.8c1 2.1 2.7 3.8 4.8 4.8l1.4-1.4c.4-.4 1.1-.6 1.7-.4l2.7 1.1c.7.3 1.1 1 .9 1.7l-.5 2.4c-.2.9-1 1.5-1.9 1.5C11.3 18.5 5.5 12.7 5.5 5c0-.9.6-1.7 1.5-1.9Z" />
            </svg>
          </span>
          <strong>Call us</strong>
        </a>
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
