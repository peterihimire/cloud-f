import React from "react";
import Layout from "../../layouts/landing";
import ProfileSubLayout from "../../layouts/profile";
import Index from "../../components/profile/savedJobs";

const SavedJobs = () => {
  return (
    <>
      <Index />
    </>
  );
};

export default SavedJobs;

SavedJobs.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ProfileSubLayout>{page}</ProfileSubLayout>
    </Layout>
  );
};
