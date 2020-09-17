import React from "react";

import "./style.scss";

const contact_info = (props) => (
  <div className=" has-text-white py-5 ml-2">
    <p className="title is-4 has-text-white is-uppercase">Contact me</p>
    <p className="block has-text-white">
      <strong className="has-text-white">Adddress:</strong> 12/15 D type staff
      colony, Darussalam road, Mirpur 1, Dhaka 1216.
    </p>
    <p className="block has-text-white">
      <strong className="has-text-white">Mobile:</strong>{" "}
      <a href="tel:01521109475" className="has-text-white">
        01521109475
      </a>
    </p>
    <p className="block has-text-white">
      <strong className="has-text-white">Email:</strong>{" "}
      <a href="mailto:alkemy48@gmail.com" className="has-text-white">
        alkemy48@gmail.com
      </a>
    </p>
  </div>
);

export default contact_info;
