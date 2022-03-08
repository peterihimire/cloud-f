import * as actionTypes from "../actions/actionTypes";

const initialState = {
  allCareers: [],
  loading: false,
  error: null,
  pageNumber: 0,
  careerApply: "",
  searchValue: "",
  searchResult: [],
  careerInterest: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CAREERS:
      return {
        ...state,
        allCareers: action.payload,
      };
    case actionTypes.CAREERS_START:
      return {
        ...state,
        loading: action.payload,
      };
    case actionTypes.CAREERS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.CAREERS_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.payload,
      };

    case actionTypes.CAREER_APPLICATION:
      return {
        ...state,
        careerApply: action.payload,
      };

    case actionTypes.SEARCH_VALIU:
      console.log(state);
      return { ...state, searchValue: action.payload };

    case actionTypes.SEARCH_RESULT:
      console.log(state);
      return { ...state, searchResult: action.payload };

    case actionTypes.CAREER_INTERESTNG:
      console.log(state);
      return { ...state, careerInterest: action.payload };

    default:
      return state;
  }
};

export default reducer;
