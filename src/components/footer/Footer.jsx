import "./footer.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

export const Footer = () => {
  return (
    <footer className="bg-dark bg-opacity-25 text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-2">
          <a
            className="btn btn-outline-light rounded-circle m-2 p-2"
            href="https://www.facebook.com/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebook}
              alt="Facebook"
              className="social-icon"
            />
          </a>

          <a
            className="btn btn-outline-light rounded-circle m-2 p-2"
            href="https://www.instagram.com/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagram}
              alt="Instagram"
              className="social-icon"
            />
          </a>
        </section>
      </div>

      <div
        className="text-center p-3 text-dark"
        style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
      >
        © 2026 Copyright:
        <a
          className="text-dark text-decoration-none ms-1"
          href="https://github.com/YessicaRomero"
          target="_blank"
          rel="noopener noreferrer"
        >
          YesDev
        </a>
      </div>
    </footer>
  );
};