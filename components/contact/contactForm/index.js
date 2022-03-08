import React, { useState } from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Select from "../../ui/customSelect";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../../utils/axios";
import countries from "./countries.json";
import ScrollAnimation from 'react-animate-on-scroll';

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      message: "",
      country: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(10, "Characters must not be less than 10")
        .matches(/^[A-Za-z ]*$/, "Please enter a valid name")
        .required("Required *"),
      phoneNumber: Yup.number().required("Required *"),
      email: Yup.string().email("Invalid email address").required("Required *"),
      message: Yup.string().required("Required *"),
      country: Yup.string().required("Required *"),
    }),

    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      setIsLoading(true);
      try {
        const response = await axios.post(`/contact-us`, values);
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
        // setShowModal(false);
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

  return (
    <>
      <ToastContainer />
      
      <section className={styles.contactForm}>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <h2>GET IN TOUCH</h2>
              <p className={styles.lead}>
                Let's talk about your next big project.
              </p>

              <div className={styles.leadLink}>
                <p>
                  Looking for a new career? <br />{" "}
                  <a href="/">View Job Opening</a>
                </p>
              </div>
            </div>

            <div className={styles.right}>
              <form onSubmit={formik.handleSubmit}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <Input
                      labelText="Full Name"
                      name="fullName"
                      id="fullName"
                      placeholder="Add your name"
                      required
                      type="text"
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.fullName && formik.errors.fullName ? (
                      <p className={styles.errorStyle}>
                        {formik.errors.fullName}
                      </p>
                    ) : null}
                  </div>
                  <div className={styles.formGroup}>
                    <Select
                      labelText="Country"
                      id="country"
                      name="country"
                      required
                      wrapClass={styles.selectWrap}
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option>Select country</option>
                      {countries.map((country, key) => (
                        <option key={key}> {country.name}</option>
                      ))}
                    </Select>
                    {formik.touched.country && formik.errorscountryl ? (
                      <p className={styles.errorStyle}>{formik.errors.country}</p>
                    ) : null}
                  </div>
                  <div className={styles.formGroup}>
                    <Input
                      labelText="Email"
                      name="email"
                      id="email"
                      placeholder="Add your email"
                      required
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <p className={styles.errorStyle}>{formik.errors.email}</p>
                    ) : null}
                  </div>

                  <div className={styles.formGroup}>
                    <Input
                      labelText="Phone"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Add your phone number"
                      required
                      type="text"
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
                  <div className={styles.formGroup}>
                    <Input
                      labelText="Message"
                      name="message"
                      id="message"
                      placeholder="example@text.com"
                      required
                      type="text"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.message && formik.errors.message ? (
                      <p className={styles.errorStyle}>{formik.errors.message}</p>
                    ) : null}
                  </div>

                  <div className={styles.formGroup}>
                    {/* <button type="submit" className="btn-small">
                      Submit
                    </button> */}

                    <button
                      className="btn-small"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading && "Loading..."}
                      {!isLoading && "Submit"}
                    </button>
                  </div>
                </div>

                <div className={styles.extraInfo}>
                  <p>
                    By submitting, you consent to Slalom processing your
                    information in accordance with our{" "}
                    <a href="/">Privacy Policy</a>. We take your privacy
                    seriously; opt out of <span>email updates</span> at any time.{" "}
                    <br /> This site is protected by reCAPTCHA and the Google{" "}
                    <span>Privacy Policy</span> and <span>Terms of Service</span>{" "}
                    apply.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
};

export default ContactForm;
