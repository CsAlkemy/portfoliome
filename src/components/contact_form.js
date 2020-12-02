import React from "react";

import "./style.scss";

const contact_form = (props) => (
  <div className="box card_Style has-text-white">
    <p className="title is-4 has-text-white is-uppercase">Send Quries</p>
    <form  method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" action="/">
      <div className="control">
        <input className="input" type="text" name="name" placeholder="Name" />
      </div>
      <div className="control py-4">
        <input className="input" type="email" required name="email" placeholder="Email" />
      </div>
      <div className="control py-3">
        <input
          className="textarea"
          type="text"
          name="message"
          placeholder="Message"
          required
        />
      </div>
      <div className='control'>
        <input type="submit" className='button is-link is-light has-text-black' value="Send Message" />

      </div>
      
    </form>
  </div>
);

export default contact_form;
