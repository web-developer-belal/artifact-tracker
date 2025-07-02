import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 mt-10">
      <aside>
        <Link to="/" className="nav-brand font-extrabold text-2xl">
          Artifact <span className="text-secondary">Tracker</span>
        </Link>

        <p>
          Historical Artifacts Tracker
          <br />
          Track, discover, and share historical artifacts.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Explore</h6>
        <Link className="link link-hover" to="/">
          Home
        </Link>
        <Link className="link link-hover" to="/all-artifacts">
          All Artifacts
        </Link>
        <Link className="link link-hover" to="/add-artifacts">
          Add Artifact
        </Link>
        <Link className="link link-hover" to="/liked-artifacts">
          Liked Artifacts
        </Link>
        <Link className="link link-hover" to="/my-artifacts">
          My Artifacts
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Account</h6>
        <Link className="link link-hover" to="/login">
          Login
        </Link>
        <Link className="link link-hover" to="/register">
          Register
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">About</h6>
        <Link
          className="link link-hover"
          to="/about"
          rel="noopener noreferrer"
        >
          About
        </Link>
        <Link
          className="link link-hover"
          to="/contact"
        >
          Contact Support
        </Link>
        <span className="text-xs text-gray-400 mt-2 block">
          &copy; {new Date().getFullYear()} Artifact Tracker
        </span>
      </nav>
    </footer>
  );
};

export default Footer;
