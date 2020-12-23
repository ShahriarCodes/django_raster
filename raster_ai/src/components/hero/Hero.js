import React, { Component } from "react";
import { setupScrollReveal } from "../../assets/js/main.js";

import NewsletterForm from "../forms/NewsletterForm";
import "./Hero.css";

class Hero extends Component {
  componentDidMount() {
    setupScrollReveal();
  }

  render() {
    const { title, content, illustration: Illustration } = this.props;

    return (
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="container-sm">
                <NewsletterForm
                  className="hero-form"
                  submit="Get early access"
                />
                <h1 className="hero-title">{title}</h1>
                <p className="hero-paragraph ">{content}</p>
              </div>
              <a href="/app" class="rw-btn" type="button">
                Try Raster AI (beta)!
              </a>
            </div>

            <div className="hero-illustration">
              <Illustration />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
