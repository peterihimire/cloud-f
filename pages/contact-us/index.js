import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/contact/hero";
import Global from "../../components/contact/global";
import ContactForm from "../../components/contact/contactForm";

const ContactUs = () => {
  return (
    <>
      <Hero />
      <Global />
      <ContactForm />
    </>
  );
};

export default ContactUs;

ContactUs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
