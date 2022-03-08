import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/clients/hero";
import OurClients from "../../components/clients/ourClients";
import Reviews from "../../components/clients/reviews";

const Clients = () => {
  return (
    <>
      <Hero />
      <OurClients />
      <Reviews />
    </>
  );
};

export default Clients;

Clients.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
