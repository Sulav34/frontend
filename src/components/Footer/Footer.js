import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-white">
      {/* <!-- Grid container --> */}
      <div className="container p-4 pb-0">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          {/* <!-- Facebook --> */}

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="https://www.facebook.com/"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* <!-- Twitter --> */}
          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="https://twitter.com/"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* <!-- Google --> */}
          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="https://www.google.com/"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>

          {/* <!-- Instagram --> */}
          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="https://www.instagram.com/"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright: Shop
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
};

export default Footer;
