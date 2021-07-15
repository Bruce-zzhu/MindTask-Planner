import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <section class="contact-form">
          <div class="col1">
            <pre>
              <span>Contact</span> Us 🤝
            </pre>
            <h1 class="contact-text">We would love to chat</h1>
            <form onclick="showMessage()" class="contact-input">
              <input type="text" class="form-input" placeholder="Your Email" />
              <input
                type="text"
                style={{ height: "90px" }}
                class="form-about form-input"
                placeholder="What would you like to ask us? We are listening..."
              />
              <button class="contact-button " type="submit">
                Submit
              </button>
            </form>
            <h1 class="contact-message " style={{ display: "none" }}>
              Thanks! We will get in touch with you soon 😊
            </h1>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
