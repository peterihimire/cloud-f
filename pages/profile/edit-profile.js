import React from "react";
import Layout from "../../layouts/landing";
import ProfileSubLayout from "../../layouts/profile";
import Index from "../../components/profile/editProfile";

const EditProfile = () => {
  return (
    <>
      <Index />
    </>
  );
};

export default EditProfile;

EditProfile.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ProfileSubLayout>{page}</ProfileSubLayout>
    </Layout>
  );
};
