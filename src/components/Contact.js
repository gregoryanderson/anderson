import React, { useState } from "react";
import "./Contact.css";

const Contact = props => {
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState(false);

  const handleClick = name => {
    if (name === "email") {
      setEmail(true);
      setPhone(false);
    }
    if (name === "phone") {
      setEmail(false);
      setPhone(true);
    }
  };

  const determineText = () => {
    if (phone) {
      return (
        <>
          <section className="projects--story">
            <p>508-902-8048</p>
          </section>
        </>
      );
    } else if (email) {
      return (
        <>
          <section className="projects--story">
            <p>anderson.gregory.mail@gmail.com</p>
          </section>
        </>
      );
    } else {
      return (
        <section>
          <img
            src={require("./GREG-01.png")}
            alt="Gregory Anderson"
            className="projects--img"
          />
        </section>
      );
    }
  };

  return (
    <section className="main--content">
      {/* <section className="contact--buttons">
        <section className="projects--btns">
          <button
            className={email ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("email")}
          >
            Email
          </button>
        </section>
        <section className="projects--btns">
          <button
            className={phone ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("phone")}
          >
            Phone
          </button>
        </section>
      </section> */}
      <section className="contact--text">
        <section className="projects--story">
          Greg can be reached via email at: anderson.gregory.mail@gmail.com and
          by phone at 508-902-8048
        </section>
      </section>
    </section>
  );
};

export default Contact;
