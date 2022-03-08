import * as actionTypes from "./actionTypes";

import axios from "../../utils/axios";

export const careerStart = (payload) => {
  return {
    type: actionTypes.CAREERS_START,
    payload,
  };
};

export const careerError = (payload) => {
  return {
    type: actionTypes.CAREERS_ERROR,
    payload,
  };
};

export const getAllCareers = (payload) => {
  return {
    type: actionTypes.GET_ALL_CAREERS,
    payload,
  };
};

export const getCareerInterest = (payload) => {
  return {
    type: actionTypes.CAREER_INTERESTNG,
    payload,
  };
};

export const careersPageNumber = (payload) => {
  return {
    type: actionTypes.CAREERS_PAGE_NUMBER,
    payload,
  };
};

// Get all careers

export const careers = () => {
  return async (dispatch) => {
    dispatch(careerStart(true));

    try {
      const response = await axios.get(`career`);
      // console.log(response);
      // console.log(response.data.message.allCareers);
      dispatch(getAllCareers(response.data.message.allCareers));
    } catch (err) {
      // console.log(err);
      dispatch(careerError(err.data));
    } finally {
      dispatch(careerStart(false));
    }
  };
};

// Apply career-----below careerApplication function is not utilized in this application as the function is moved to the  career content component. Kept for reference purpose.

export const careerApplication = ({
  fullName,
  phoneNumber,
  email,
  message,
  cv,
  id,
}) => {
  return async (dispatch) => {
    dispatch(careerStart(true));

    // const formData = new FormData(document.getElementById("applyform"));
    const formData = new FormData();

    formData.append("fullName", fullName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("cv", cv);
    console.log(formData, fullName, phoneNumber, email, message, cv, id);

    try {
      const response = await axios.post(`/career/apply/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data.message);
      // dispatch(setCurrentUser(response.data.accessToken));
    } catch (err) {
      console.log(err);
      // dispatch(careerError(err.response.data.error.message));
    } finally {
      dispatch(careerStart(false));
    }
  };
};

export const searchCareersLocation = ({ country }) => {
  console.log(country);
  return async (dispatch) => {
    dispatch(careerStart(true));

    try {
      const response = await axios.post(`career/filter-by-location`, {
        country,
      });
      console.log(response);
      // console.log(response.data.message.allCareers);
      dispatch(searchResult(response.data.message.allCareers));
    } catch (err) {
      // console.log(err);
      dispatch(careerError(err.data));
    } finally {
      dispatch(careerStart(false));
    }
  };
};

export const searchValiu = (value) => {
  return {
    type: actionTypes.SEARCH_VALIU,
    payload: value,
  };
};

export const searchResult = (payload) => {
  return {
    type: actionTypes.SEARCH_RESULT,
    payload,
  };
};

// Get careers category

export const careerInteresting = ({ interest }) => {
  console.log(interest);
  return async (dispatch) => {
    dispatch(careerStart(true));

    try {
      // const response = await axios.get(`career`);
      const response = await axios.get(`/career/category?category=${interest}`);
      console.log(response);
      console.log(response.data.message.allCareers);
      dispatch(getCareerInterest(response.data.message.allCareers));
    } catch (err) {
      // console.log(err);
      dispatch(careerError(err.data));
    } finally {
      dispatch(careerStart(false));
    }
  };
};
