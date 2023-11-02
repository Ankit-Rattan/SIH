import React, { useState } from "react";
import about from "../images/about-us.png";
//<a href="https://www.freepik.com/free-vector/positive-tiny-people-sitting-walking-near-huge-target-with-arrow-isolated-flat-vector-illustration-cartoon-business-team-achieving-goal-aim-marketing-strategy-achievement-concept_10613439.htm#query=our%20goal&position=5&from_view=search&track=ais">Image by pch.vector</a> on Freepik
import goals from "../images/our-goals.png";
import benefits from "../images/benefits.png";

export default function About() {
  return (
    <div className="about-page">
      <section className="about-us" id="about_us">
        <img src={about} />
        <div>
          <h3 className="about--heading">
            ABOUT
            <br /> US
          </h3>
          <hr />
          <p>
            We, the Little Rangers, are very proud to represent with the problem
            statement 1280:{" "}
            <strong>
              <em>
                Development of e-portal for facilitating Case Management Hearing
                of various types of cases
              </em>
            </strong>
            . Our vision is to bridge the gap between the case filing and the
            judgement and the advancement of digital age, making justice
            accessible for all, with
            <strong>
              <em>
                high transparency, equitability in Justice system & to create
                the improvement in outcomes of legal proceedings
              </em>
            </strong>
            .
          </p>
        </div>
      </section>
      <section className="our-goals">
        <h3 className="goals--heading">
          Our <br />
          Goals
        </h3>
        <span className="vertical-line"></span>
        <p>
          <ul>
            <li>Digitalization of Legal Realm</li>
            <li>Streamlining Case Management</li>
            <li>Nurturing Transparency</li>
            <li>Al Assistant</li>
            <li>User Friendly Interface</li>
          </ul>
        </p>
        <img src={goals}/>
      </section>
      <section className="benefits">
        <img src={benefits} />
        <span className="vertical-line"></span>
        <h3 className="benefits--heading">Benefits</h3>
      </section>
    </div>
  );
}
