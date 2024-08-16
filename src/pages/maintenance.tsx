function Maintenance() {
  return (
    <div>
      <div className="error-image">
        <h1>👨‍🔧</h1>
      </div>
      <div className="error-msg-container">
        <h1>We're working on this account now!</h1>
        <p>
          We are currently addressing the issue and working to resolve it as
          quickly as possible
        </p>
        <p>
          We apologize for any inconvenience caused and appreciate your support.
        </p>
        <p>
          For further assistance, feel free to reach out through the options
          below:
        </p>
        <div className="contact-options">
          <a
            href="mailto:hello@Papertape.io"
            className="contact-button email-button"
          >
            Email Us
          </a>
          <a
            href="https://www.instagram.com/papertape_pictures/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button instagram-button"
          >
            Follow us on Instagram
          </a>
          <a href="tel:+91 8113864689" className="contact-button call-button">
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
