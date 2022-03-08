import React from "react";
import Layout from "../../layouts/landing";
import ProfileSubLayout from "../../layouts/profile";
import Recommended from "../../components/profile/recommended";

const RecommendedJobs = () => {
  return (
    <>
      <Recommended />
    </>
  );
};

export default RecommendedJobs;

RecommendedJobs.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ProfileSubLayout>{page}</ProfileSubLayout>
    </Layout>
  );
};
