import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/careerDetails/hero";
import Content from "../../components/careerDetails/content";
import Connected from "../../components/career/connected";
// import axios from "axios";

const CareerDetails = (props) => {
  return (
    <>
      <Hero careerContent={props} />
      <Content careerContent={props} />
      <Connected />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const id = query.id;
  // const data = await axios.get(`/careers/detail/${id}`);
  const res = await fetch(`https://api.cloudfift.com/career/details/${id}`);
  const data = await res.json();
  console.log(data);
  console.log(id);
  return {
    props: { careerProp: data.message },
  };
}

export default CareerDetails;

CareerDetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
