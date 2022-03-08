import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import VacancyCard from "../../ui/cards/vacancyCard";
import Modal from "../../ui/modal";
import Input from "../../ui/customInput";
import Textarea from "../../ui/customTextarea";
// import PinSvg from "../../../public/images/office-pin.svg";
import PlaneSvg from "../../../public/images/plane.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions";
import Parser from "html-react-parser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../../utils/axios";
// import { Router } from "next/dist/client/router";
import ScrollAnimation from 'react-animate-on-scroll';

const Content = (props) => {
  const dispatch = useDispatch();

  console.log(props);
  const content = props.careerContent.careerProp;
  console.log(content);
  console.log(content.id);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState([]);
  const [file, setSelectedFile] = React.useState({
    file: undefined,
    previewURI: undefined,
  });


  const { loading, error, careerInterest } = useSelector((state) => {
    console.log(state, loading, error);
    return {
      careerInterest: state.career.careerInterest,
      searchResult: state.career.searchResult,
      // pageNumber: state.career.pageNumber,
      loading: state.career.loading,
      error: state.career.error,
    };
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      message: "",
      cv: null,
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(10, "Characters must not be less than 10")
        .matches(/^[A-Za-z ]*$/, "Please enter a valid name")
        .required("Required *"),
      phoneNumber: Yup.number().required("Required *"),
      email: Yup.string().email("Invalid email address").required("Required *"),
      message: Yup.string().required("Required *"),

      cv: Yup.mixed()
        .required("A file is required")
        .test(
          "fileSize",
          "File size too large, max file size is 1 Mb",
          (file) => (file ? file.size <= 1100000 : true),
        )
        .test("fileType", "Incorrect file type", (file) =>
          file ? ["application/pdf"].includes(file.type) : true,
        ),
    }),
    // onSubmit: (values, { resetForm }) => {
    //   const id = content.id;
    //   console.log(values, id);
    //   dispatch(actions.careerApplication({ ...values, id }));
    //   resetForm({ values: "" });
    // },

    onSubmit: async (values, { resetForm }) => {
      const id = content.id;
      console.log(values, id);
      let fullName = values.fullName;
      let phoneNumber = values.phoneNumber;
      let email = values.email;
      let message = values.message;
      let cv = values.cv;

      const formData = new FormData();

      formData.append("fullName", fullName);
      formData.append("phoneNumber", phoneNumber);
      formData.append("email", email);
      formData.append("message", message);
      formData.append("cv", cv);
      console.log(formData, fullName, phoneNumber, email, message, cv, id);
      setIsLoading(true);
      try {
        const response = await axios.post(`/career/apply/${id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(response.data.message);

        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        resetForm({ values: "" });
        setShowModal(false);
        setIsLoading(false);
      } catch (err) {
        if (err.response && err.response.status === 400) {
          toast.error(err.response.data.error[0], {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error(err.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } finally {
      }
    },
  });
  // console.log(formik.values);
  // console.log(formik.errors);

  const applyHandler = () => {
    setShowModal(true);

    document.documentElement.classList.add("_fixed");
    document.body.classList.add("_fixed");
  };

  useEffect(() => {
    let interest = content.category;
    dispatch(actions.careerInteresting({ interest }));
  }, []);
  console.log(category);
  return (
    <>
      <ToastContainer />
      <section id="career-content" className={styles.content}>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <div className={styles.contentWrapper}>
            <div className={styles.side}>
              <div className={styles.avatar}>
                <img alt="" loading="lazy" src="/images/career-details1.png" />
              </div>
              <div className={styles.managerInfo}>
                <p>Fisayo Clement</p>
                <p>HR Manager</p>
              </div>
              <div className={styles.actions}>
                <button className={styles.applyBtn} onClick={applyHandler}>
                  Apply
                </button>
                {/* <button className={styles.saveBtn}>Save Job</button> */}
              </div>
            </div>

            <div className={styles.about}>
              <h2>About Cloudfift</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At id
                consequat pellentesque volutpat dolor lorem maecenas nullam
                lectus. Quis a eu, amet, adipiscing et at erat aliquet. <br />{" "}
                <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                id consequat pellentesque volutpat dolor lorem maecenas nullam
                lectus. Quis a eu, amet, adipiscing et at erat aliquet. <br />{" "}
                <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                id consequat pellentesque volutpat dolor lorem maecenas nullam
                lectus. Quis a eu, amet, adipiscing et at erat aliquet. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. At id consequat
                pellentesque volutpat dolor lorem maecenas nullam lectus. Quis a
                eu, amet, adipiscing et at erat aliquet.
              </p>
            </div>

            <div className={styles.requirements}>
              <h2>REQUIREMENTS</h2>
              {Parser(content.requirements)}
            </div>

            <div className={styles.responsibility}>
              <h2>RESPONSIBILITIES</h2>
              {Parser(content.responsibilities)}
            </div>

            <div className={styles.fullCycle}>
              <h2>Full recruitment lifecycle:</h2>
              <ul>
                <li>
                  <p>Vacancy requirements elicitation</p>
                </li>
                <li>
                  <p>Active search</p>
                </li>
                <li>
                  <p>Passive search</p>
                </li>
                <li>
                  <p>Interview scheduling and hosting</p>
                </li>
                <li>
                  <p>Negotiations and offering</p>
                </li>
                <li>
                  <p>Placement</p>
                </li>
              </ul>
            </div>

            <div className={styles.what}>
              <h2>WHAT WILL YOU GET WITH CLOUDFIFT</h2>
              {Parser(content.benefits)}
            </div>

            <div className={styles.recommended}>
              <h2>YOU MAY FIND INTERESTING</h2>

              <div className={styles.grid}>
                {careerInterest.slice(0, 3).map((catInterest) => {
                  return (
                    <VacancyCard
                      key={catInterest.id}
                      id={catInterest.id}
                      tag="New"
                      title={catInterest.title}
                      state={catInterest.city}
                      country={catInterest.country}
                      type={catInterest.type}
                      category={catInterest.category}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {showModal && (
        <Modal
          // header={`APPPLYING FOR  ${RESEARCH AND DEVELOPMENT ENGINEER}`}
          header={`APPPLYING FOR  ${content.title}`}
          bodyClass={styles.modalContent}
          click={() => {
            setShowModal(false);

            document.documentElement.classList.remove("_fixed");
            document.body.classList.remove("_fixed");
          }}
        >
          <form
            className={styles.form}
            onSubmit={formik.handleSubmit}
            id="applyform"
          >
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.fullName && formik.errors.fullName ? (
                  <p className={styles.errorStyle}>{formik.errors.fullName}</p>
                ) : null}
              </div>
              <div className={styles.formGroup}>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className={styles.errorStyle}>{formik.errors.email}</p>
                ) : null}
              </div>
              <div className={styles.formGroup}>
                <Input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <p className={styles.errorStyle}>
                    {formik.errors.phoneNumber}
                  </p>
                ) : null}
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.msg}>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.message && formik.errors.message ? (
                  <p className={styles.errorStyle}>{formik.errors.message}</p>
                ) : null}

                <label htmlFor="message">{/* <PinSvg /> */}</label>
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.fileUpload}>
                <input
                  // type="file"
                  // id="cv"
                  // name="cv"
                  // className={styles.formFile}
                  // accept="pdf/*"
                  // onChange={(event) => {
                  //   setFieldValue("cv", event.currentTarget.files[0]);
                  // }}
                  // onChange={formik.handleChange}
                  // ref={this.fileInputRef}

                  name="cv"
                  onBlur={formik.handleBlur}
                  onChange={({ currentTarget }) => {
                    const file = currentTarget.files[0];
                    const reader = new FileReader();

                    if (file) {
                      reader.onloadend = () => {
                        setSelectedFile({
                          file,
                          previewURI: reader.result,
                        });
                      };
                      reader.readAsDataURL(file);
                      formik.setFieldValue("cv", file);
                    }
                  }}
                  // ref={inputFile}
                  type="file"
                  style={{ paddingTop: 10 }}
                  accept=".pdf,.doc, .docx"
                />
                {/* <button
                  className="property-upload-btn"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   this.fileInputRef.current.click();
                  // }}
                >
                  Browse
                </button> */}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="updates" className={styles.updates}>
                <input id="updates" type="checkbox" />
                <span>Get update about new vacancies at CLOUDFIFT</span>
              </label>
            </div>

            <div className={styles.formFooter}>
              <p>
                We will add your contact details provided in this form to our
                system for contacting you regarding your request. For more info
                please consult our <a href="/">privacy policy</a>
              </p>
              <button type="submit" disabled={isLoading}>
                {isLoading && "Loading..."}
                {!isLoading && (
                  <div>
                    <PlaneSvg />
                    <span>SEND</span>
                  </div>
                )}
              </button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default Content;
