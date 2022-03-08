import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Select from "../../ui/customSelect";
import Pagination from "../../ui/pagination";
import VacancyCard from "../../ui/cards/vacancyCard";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import countries from "./countries.json";

const Vacancies = () => {
  const [pageNum, setPageNum] = useState(0);
  const [pageNum2, setPageNum2] = useState(0);

  const [field, setField] = useState({
    country: "",
  });
  const dispatch = useDispatch();
  console.log(actions);

  const { allCareers, pageNumber, loading, error, searchResult } = useSelector(
    (state) => {
      console.log(state);

      console.log(error, loading, pageNumber);
      return {
        allCareers: state.career.allCareers,
        searchResult: state.career.searchResult,
        // pageNumber: state.career.pageNumber,
        loading: state.career.loading,
        error: state.career.error,
      };
    },
  );

  const careersPerPage = 2;
  const pagesVisited = pageNum * careersPerPage;

  // Handles the allCareers UI
  const displayCareers =
    allCareers.length === 0 || allCareers === [] || undefined ? (
      <div className={styles.noVacancy}>
        <h3>NO VACANCIES AVAILABLE</h3>
      </div>
    ) : (
      <div className={styles.grid}>
        {allCareers
          .slice(pagesVisited, pagesVisited + careersPerPage)
          .map((career) => {
            console.log(career);
            return (
              <VacancyCard
                key={career.id}
                id={career.id}
                tag="New"
                title={career.title}
                state={career.city}
                country={career.country}
                type={career.type}
                category={career.category}
              />
            );
          })}
      </div>
    );

  // Handles the search UI
  const displaySearch =
    searchResult.length === 0 || searchResult === [] || undefined ? (
      <div className={styles.noVacancy}>
        <h3>NO VACANCIES AVAILABLE</h3>
      </div>
    ) : (
      <div className={styles.grid}>
        {searchResult
          .slice(pagesVisited, pagesVisited + careersPerPage)
          .map((career) => {
            // console.log(career);

            return (
              <VacancyCard
                key={career.id}
                id={career.id}
                tag="New"
                title={career.title}
                state={career.city}
                country={career.country}
                type={career.type}
                category={career.category}
              />
            );
          })}
      </div>
    );

  console.log(allCareers);
  console.log(searchResult);
  console.log(displaySearch);
  console.log(displayCareers);

  // Handles page count numbers
  const pageCount = Math.ceil(allCareers.length / careersPerPage);
  const pageCount2 = Math.ceil(searchResult.length / careersPerPage);

  //Handle page click
  const changePageHandler = ({ selected }) => {
    return setPageNum(selected);
  };

  //Handle page click
  const changePageHandler2 = ({ selected2 }) => {
    return setPageNum2(selected2);
  };

  // Handles Form Value
  const handleSearchInput = (e) => {
    e.preventDefault();
    // const value = e.target.value;
    const { name, value } = e.target;
    console.log(value, name);

    setField({
      ...field,
      [name]: value,
    });
  };

  // For Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(actions.searchValiu(...field));
    dispatch(actions.searchCareersLocation({ ...field }));
  };

  useEffect(() => {
    dispatch(actions.careers());
  }, []);

  return (
    <>
      <ToastContainer />

      <section className={styles.vacancies}>
        <h2>VACANCIES</h2>

        <form onSubmit={handleSubmit} className={styles.filters}>
          {/* <div className={styles.filterGroup}>
          <Select
            wrapClass={styles.sortBox}
            labelText="Vacancies"
            id="vacancies"
          >
            <option>{"Choose Vacancies"}</option>
            <option>{"Software Engineering"}</option>
            <option>{"Marketing"}</option>
            <option>{"Senior UI/UX"}</option>
            <option>{"Data Scientist"}</option>
            <option>{"Accounting"}</option>
          </Select>
        </div> */}
          <div className={styles.filterGroup}>
            <Select
              wrapClass={styles.sortBox}
              labelText="All Location"
              id="all-location"
              name="country"
              onChange={handleSearchInput}
            >
              <option>Choose Country</option>
              {countries.map((country, key) => (
                <option>{country.name}</option>
              ))}
            </Select>
          </div>
          <div className={styles.filterGroup}>
            <button className="btn-small" type="submit" disabled={loading}>
              {loading && "Loading..."}
              {!loading && "Search"}
            </button>
          </div>
        </form>

        {searchResult && field.country !== "" ? displaySearch : displayCareers}

        <div className={styles.gridPaginate}>
          {searchResult && field.country !== "" ? (
            <Pagination
              // pageCount={7}
              pageCount={pageCount2}
              onPageChange={changePageHandler2}
              containerClassName="pagination"
              activeClassName="paginate-active"
              disabledClassName="paginate-disabled"
              previousClassName="paginate-previous"
              nextClassName="paginate-next"
              breakLabel=""
              pageRangeDisplayed={7}
            />
          ) : (
            <Pagination
              // pageCount={7}
              pageCount={pageCount}
              onPageChange={changePageHandler}
              containerClassName="pagination"
              activeClassName="paginate-active"
              disabledClassName="paginate-disabled"
              previousClassName="paginate-previous"
              nextClassName="paginate-next"
              breakLabel=""
              pageRangeDisplayed={7}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Vacancies;
