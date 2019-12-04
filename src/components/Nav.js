import React from "react";
import {
  AiOutlineLineChart,
  AiOutlineHome,
  AiOutlineLaptop,
  AiOutlineMessage,
  AiOutlineSound,
  AiOutlineForm,
  AiOutlineRocket
} from "react-icons/ai";
import "./Nav.css";

const Nav = () => {
  return (
    <section className="Nav">
      {/* <section className="nav__section--links nav--header">
        <AiOutlineRocket size={64} color="#EB6D4A" />
      </section> */}
      <section id="nav--links">
        <section className="nav__section--links">
          <AiOutlineHome size={32} color="#EB6D4A" />
          <p className="nav__p--links">Home</p>
        </section>
        <section className="nav__section--links">
          <AiOutlineLineChart size={32} color="#EB6D4A" />
          <p className="nav__p--links">Experience</p>
        </section>{" "}
        <section className="nav__section--links">
          <AiOutlineLaptop size={32} color="#EB6D4A" />
          <p className="nav__p--links">Projects</p>
        </section>{" "}
        <section className="nav__section--links">
          <AiOutlineForm size={32} color="#EB6D4A" />
          <p className="nav__p--links">Journal</p>
        </section>{" "}
        <section className="nav__section--links">
          <AiOutlineSound size={32} color="#EB6D4A" />
          <p className="nav__p--links">Contact</p>
        </section>
      </section>
      <section className="nav__section--links nav--header">
        <AiOutlineRocket size={300} color="#EB6D4A" />
      </section>
    </section>
  );
};

export default Nav;
