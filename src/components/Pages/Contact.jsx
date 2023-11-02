import React from 'react';
import benefits from "../images/contact.png";


export default function Contact() {
  return (
    <div>
      <section className="about-us" id='contact_us'>
        <img src={benefits}  alt='contact'/>
        <div>
          <h3 className="about--heading mt-0">
            CONTACT
            <br /> US
          </h3>
          <hr />
          <p>
            <strong>📞 +91-3782901732</strong>
            <br/>
            <strong>📧 littlerangers@gmail.com</strong>
          </p>
        </div>
      </section>

    </div>
  )
}
