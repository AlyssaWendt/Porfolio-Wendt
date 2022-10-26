import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="contact">
      <div className="container-contact">
        <div className="map">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=715+n+st+rembrandt+royal+oak&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>
          <div className="container-contact-info">
            <div className="address-container">
              <h2 className="address-header">
                ADDRESS
              </h2>
              <p className="address-info">
              715 N. Rembrandt <br />
               Royal Oak, MI 48067
              </p>
            </div>
            <div className="email-container">
              <h2 className="email-header">
                EMAIL
              </h2>
              <a className="email-info" href="!#">
              
                alyssa95wendt@gmail.com
              </a>
              </div>
              <div>
              <h2 className="phone-header">
                PHONE
              </h2>
              <p className="phone-info">123-456-7890</p>
            </div>
          </div>
       
        <div className="form">
           <h2 className="hire-me-header">
            Hire Me
          </h2>
          <p className="open-to-work-p">
            Contact me here!
          </p> 
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="contact-form">
          
          <div className="container-name-form">
            <label htmlFor="name" className="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input-name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="container-email-form">
            <label htmlFor="email" className="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-name"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="container-message-form">
            <label
              htmlFor="message"
              className="message">
              Message
            </label>
            <textarea
              maxlength="300"
              id="message"
              name="message"
              className="input-message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="submit">
            Submit
          </button>
        </form>
        </div>
      </div>
    </section>
  );
}
