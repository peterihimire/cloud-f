import React from "react";
import Layout from "../../layouts/landing";
import Hero from "../../components/insightsDetails/hero";
// import Post from "../../components/insightsDetails/post";
import instance from "../../utils/axios";
import PostTemplate from "../../components/insightsDetails/post/index_template";
import { useRouter } from "next/router";
import InsightLoading from "../../components/insightsDetails/loading";
import ErrorOccured from "../../components/ui/error";

const InsightDetails = ({ post, error }) => {
  if (error) {
    return <ErrorOccured />;
  } else {
    return (
      <>
        <Hero data={post} />
        <PostTemplate data={post} />
      </>
    );
  }
};

// export async function getStaticPaths() {
//   const res = await instance.get("/insights");
//   const posts = res.data.insights;

//   const paths = posts.map((post) => ({
//     params: { id: `/blogs/${post.id}` },
//   }));

//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   const { data } = await instance.get(`/insights/${params.id}`);
//   const post = data.message.data;

//   return { props: { post }, revalidate: 1 };
// }

export async function getServerSideProps({ params }) {
  try {
    const { data } = await instance.get(`/insights/${params.id}`);
    const {
      data: { message },
    } = await instance.get(`/gallery/${data.message.data.galleryId}`);

    if (!!data) {
      return {
        props: {
          post: { ...data.message.data, imageUrl: message.data.imageName },
          error: false,
        },
      };
    } else {
      return { props: { error: true } };
    }
  } catch (e) {
    return { props: { error: true } };
  }
}

export default InsightDetails;

InsightDetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
