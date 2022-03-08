import React from "react";
import Layout from "../../layouts/landing";
import ProfileSubLayout from "../../layouts/profile";
import Team from "../../components/profile/ourTeam";

const OurTeam = () => {
  return (
    <>
      <Team />
    </>
  );
};

export default OurTeam;

OurTeam.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ProfileSubLayout>{page}</ProfileSubLayout>
    </Layout>
  );
};
