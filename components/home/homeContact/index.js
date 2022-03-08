import React, { useState } from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Textarea from "../../ui/customTextarea";

import Select from "../../ui/customSelect";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../../utils/axios";
import countries from "./countries.json";
import ScrollAnimation from 'react-animate-on-scroll';

const HomeContact = () => {
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
      <section className={styles.contact}>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <div className={`${styles.wrapper} wrapper`}>
          <div className={styles.left}>
            <h2>DO YOU HAVE SOMETHING IN MIND</h2>
            <p>
              You might already know what you’re looking for, we can make it come
              to live. Even you don’t know yet we’re great detectives. <br /> All
              your idea are protected by NDA
            </p>
          </div>

            <div className={styles.right}>
              <form className={styles.contactForm} onSubmit={formik.handleSubmit}>
                <div className={styles.grid}>
                  <div className={styles.formGroup}>
                    <Input
                      labelText="Full Name"
                      id="fullName"
                      placeholder="Add your name"
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
                    <Input
                      labelText="Email Address"
                      id="email"
                      placeholder="example@text.com"
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
                      labelText="Phone Number"
                      id="phoneNumber"
                      placeholder="Add your number"
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
                    <Select
                      labelText="Country"
                      id="country"
                      name="country"
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
                </div>
                <div className={styles.textarea}>
                  <Textarea
                    labelText="Message"
                    id="message"
                    type="text"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <p className={styles.errorStyle}>{formik.errors.message}</p>
                  ) : null}
                </div>
                <div className={styles.submitBtn}>
                  <button className="btn-dark btn-medium" type="submit">
                    {isLoading && "Loading..."}
                    {!isLoading && (
                      <div>
                        <span>Contact Us</span>
                        <i className="fas fa-chevron-right"></i>
                      </div>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
};

export default HomeContact;
