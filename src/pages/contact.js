import React from "react";
import Layout from "../components/layout";
import ContactInfo from "../components/contact_info";
import ContactForm from "../components/contact_form";



const contactPage = () => {
  return (
    <Layout>
      <section className="hero is-large primaryColor">
        <div className="hero-body py-7">
          <div className="container mt-6">
            <div className="columns">
                <div className='column is-mobile'><ContactInfo /></div>
                <div className='column is-1'></div>
                <div className='column is-mobile'><ContactForm /></div>
                <div className='column is-2'></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default contactPage;
