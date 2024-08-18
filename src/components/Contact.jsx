const Contact = () => {
  return (
    <div className="container-fluid">
      <div id="contact" className="reveal">
        <p id="section-text" style={{ textAlign: "center" }}>
          <b>CONTACT</b>
        </p>
        <h1
          className="main-text"
          id="bottom-gap"
          style={{ textAlign: "center" }}
        >
          Contact Me
        </h1>
        <p style={{ textAlign: "center" }}>
          I'd Love To Hear From You.
          {/* <br />Any valuable information between us
          must be safe. */}
        </p>
        <form role="form" className="php-email-form p-3 p-md-4">
          <div className="form-controller">
            <div className="input-field fname form-group">
              <input type="text" name="fname" id="name" required />
              <label>Enter First Name</label>
            </div>
            <div className="input-field lname form-group">
              <input type="text" name="lname" id="name" required />
              <label>Enter Last Name</label>
            </div>
            <div className="input-field email form-group">
              <input type="email" name="email" id="email" required />
              <label>Your Email</label>
            </div>
            <div className="input-field sub form-group">
              <input type="text" name="subject" id="subject" required />
              <label>Subject</label>
            </div>
            <div className="input-field message form-group">
              <textarea name="message" rows="5" required></textarea>
              <label>Your Message</label>
            </div>
          </div>
          <button type="submit" className="main-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
