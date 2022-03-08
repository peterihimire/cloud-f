import React from "react";
import Layout from "../../layouts/landing";
import ProfileSubLayout from "../../layouts/profile";

const Profile = () => {
  return <></>;
};

export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "/profile/edit-profile",
    },
  };

  //   return {
  //     props: {},
  //   };
}

export default Profile;

Profile.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ProfileSubLayout>{page}</ProfileSubLayout>
    </Layout>
  );
};
