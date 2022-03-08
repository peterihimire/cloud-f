import React from "react";
import styles from "./styles.module.scss";
// import Pagination from "../../ui/pagination";
// import CBBankLogo from "../../../public/images/CBBank+-+logo 1.svg";
// import DatacateLogo from "../../../public/images/datacate4-logo 1.svg";
import { useSelector, useDispatch } from "react-redux";
import { getPartners } from "./../../../store/reducers/partners";
import * as actionTypes from "../../../store/actions/actionTypes";
import instance from "./../../../utils/axios";
import ScrollAnimation from 'react-animate-on-scroll';

const handleLoading = (dispatch, payload) => {
  dispatch({ type: actionTypes.PARTNERS_LOADING, payload });
};

const handleError = (dispatch, payload) => {
  dispatch({
    type: actionTypes.PARTNERS_ERROR,
    payload,
  });
};

const stateMessages = {
  loading: "Loading Our Partners. Please Wait...",
  noPartners: "Currently Updating Our Partners, Check Back Later.",
  errPartners:
    "Sorry, Our Partners Could'nt Be Displayed At The Moment. Try Again.",
};

const Partners = () => {
  const dispatch = useDispatch();

  const [images, setImages] = React.useState({});

  const {
    partners: { data },
    loading,
    error,
  } = useSelector((state) => state.partnersSlice);

  // const [captureLoading, setCaptureLoading] = React.useState(true);

  React.useEffect(
    () =>
      getPartners(() => {
        handleLoading(dispatch, true);
        handleError(dispatch, false);
      })(async (response) => {
        handleLoading(dispatch, true);
        dispatch({ type: actionTypes.GET_PARTNERS, payload: response });
        handleLoading(dispatch, false);
      })((err) => {
        handleLoading(dispatch, false);
        handleError(dispatch, err);
      }),
    []
  );

  // for (let { galleryId } of response.data?.message) {
  //   galleryId && (await getImage(galleryId));
  // }
  // setCaptureLoading(false);

  // const getImage = async (id) => {
  //   try {
  //     const res = await instance.get(`/gallery/${id}`);
  //     if (res.data) {
  //       setImages((p) => ({
  //         ...p,
  //         [id]:
  //           "http://cloudticians-image-bucket.s3.amazonaws.com/" +
  //           res.data?.message?.data.imageName,
  //       }));
  //     }
  //     return res;
  //   } catch (err) {
  //     setCaptureLoading(false);
  //     handleError(dispatch, err);
  //   }
  // };

  return (
    <section className={styles.partners}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>Cloudfift Strategic Partners</h2>
        {loading ? (
          <div className={styles.message}>{stateMessages.loading}</div>
        ) : Boolean(error) ? (
          <div className={styles.message}>{stateMessages.errPartners}</div>
        ) : data?.message?.length <= 0 ? (
          <div className={styles.message}>{stateMessages.noPartners}</div>
        ) : (
          <div className={styles.grid}>
            {data?.message?.map(
              ({ id, name, description, galleryId, imageUrl }) => {
                return (
                  <div key={id} className={styles.card}>
                    {galleryId ? (
                      <>
                        <img
                          alt={name}
                          height="100px"
                          width="100px"
                          src={
                            imageUrl?.imagePath
                              ? `${imageUrl?.imagePath}${imageUrl?.imageName}`
                              : "http://cloudticians-image-bucket.s3.amazonaws.com/" +
                                imageUrl?.imageName
                          }
                        />
                      </>
                    ) : (
                      <div className={styles.name}>{name}</div>
                    )}
                    <div className={styles.cardBody}>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: description.slice(0, 400) + "...",
                        }}
                      />
                    </div>
                  </div>
                );
              }
            )}
          </div>
        )}

        {/* <div className={styles.card}>
            <div className={styles.image}>
              <DatacateLogo />
            </div>
            <div className={styles.cardBody}>
              <p>
                Lorem ipsum dolor sit amet, main aimtheconsectetur adipiscing
                elit. Seaimthecoaimthecons ctetur adipiscing elit. Sed
              </p>
            </div>
          </div>
         */}

        {/* <div className={styles.gridPaginate}>
          <Pagination
            pageCount={7}
            containerClassName="pagination"
            activeClassName="paginate-active"
            disabledClassName="paginate-disabled"
            previousClassName="paginate-previous"
            nextClassName="paginate-next"
            breakLabel=""
            pageRangeDisplayed={7}
          />
        </div> */}
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default Partners;
