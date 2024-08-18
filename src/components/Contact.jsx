const Contact = () => {
  return (
    <div className="container-fluid">
      <div id="contact" className="reveal">
        <p id="section-text">
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
        <form role="form" className="php-email-form p-3 p-md-4 rounded">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="form-group">
                <label className="form-label">Enter First Name</label>
                <input
                  type="text"
                  name="fname"
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
      </div>
    </div>
  );
};

export default Contact;
