const Contact = () => {
  return (
    <div className="container-fluid">
      <div id="contact" className="reveal">
        <p id="section-text" className="pt-2">
          <b>CONTACT</b>
        </p>
        <h1 className="main-text" id="bottom-gap">
          Contact Me
        </h1>
        <p style={{ textAlign: "justify" }}>
          I'd Love To Hear From You.
          {/* <br />Any valuable information between us
          must be safe. */}
        </p>
        <form
          role="form"
          className="php-email-form p-3 p-md-4 rounded"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="form-group">
                <input
                  type="hidden"
                  name="access_key"
                  value="f4bb19c5-ac64-42ee-8775-b94fa4c265ed"
                />
                <input
                  type="hidden"
                  name="redirect"
                  value="https://web3forms.com/success"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />
                <label className="form-label">Enter First Name</label>
                <input
                  type="text"
                  name="First Name"
                  id="fname"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="form-group">
                <label className="form-label">Enter Last Name</label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="form-group">
              <label className="form-label">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="form-group">
              <label className="form-label">Your Message</label>
              <textarea
                name="message"
                rows="5"
                className="form-control"
                required
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="main-button">
              Send Message
            </button>
          </div>
        </form>
        <div className="row gy-4 pt-5">
          <div className="col-md-6">
            <div className="info-item d-flex align-items-center bg-light p-3 rounded">
              <i
                className="fa-solid fa-location-dot fa-2x me-3"
                style={{ color: "#00a2ed" }}
              ></i>
              <div>
                <h5 className="fw-bold mb-1">Address</h5>
                <p className="mb-0">
                  Radha Krishna Marga, Pokhara, Street No: 13
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center bg-light p-3 rounded">
              <i
                className="fa-solid fa-envelope fa-2x me-3"
                style={{ color: "#00a2ed" }}
              ></i>
              <div>
                <h5 className="fw-bold mb-1">Email</h5>
                <p className="mb-0">
                  <a
                    href="mailto:sulavparajuli82@gmail.com"
                    className="text-decoration-none text-dark"
                  >
                    sulavparajuli82@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center bg-light p-3 rounded">
              <i
                className="fa-solid fa-phone fa-2x me-3"
                style={{ color: "#00a2ed" }}
              ></i>
              <div>
                <h5 className="fw-bold mb-1">Phone</h5>
                <p className="mb-0">
                  <a
                    href="tel:+9779816106956"
                    className="text-decoration-none text-dark"
                  >
                    +9779816106956
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center bg-light p-3 rounded">
              <i
                className="fa-solid fa-comment-dots fa-2x me-3"
                style={{ color: "#00a2ed" }}
              ></i>
              <div>
                <h5 className="fw-bold mb-1">Social</h5>
                <div className="social-links d-flex">
                  <a
                    href="https://github.com/sulav-parajuli"
                    class="github"
                    alt="github"
                    title="github"
                  >
                    <i class="fa-brands fa-github-alt"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sulavparajuli/"
                    class="linkedin"
                    alt="linkedin"
                    title="linkedin"
                  >
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/sulav.parajuli.5/"
                    class="facebook"
                    alt="facebook"
                    title="facebook"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/_sulav_parajuli/"
                    class="instagram"
                    alt="instagram"
                    title="instagram"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
