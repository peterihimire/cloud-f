import Templates from "../../components/templates";
import ErrorOccured from "../../components/ui/error";
import LandingLayout from "../../layouts/landing";
import instance from "../../utils/axios";
import Head from "next/head";

const DynamicPage = ({ data, error }) => {
  if (error) {
    return <ErrorOccured />;
  } else {
    return (
      <>
        <Head>
          <title>{data.title} - Cloudfift</title>
        </Head>
        <Templates data={data} />
      </>
    );
  }
};

export async function getServerSideProps({ params }) {
  try {
    const { data } = await instance.get(`/page/single_page/${params.pageSlug}`);

    if (data) {
      return { props: { data: data.data, error: false } };
    } else {
      return { props: { error: true } };
    }
  } catch (err) {
    return { props: { error: true } };
  }
}

export default DynamicPage;

DynamicPage.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
