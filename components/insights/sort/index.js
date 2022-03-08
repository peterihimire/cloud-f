import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Select from "../../ui/customSelect";
import Pagination from "../../ui/pagination";
import InsightCard from "../../ui/cards/insightCard";
import instance from "../../../utils/axios";
import isEmpty from "is-empty";
import ScrollAnimation from 'react-animate-on-scroll';

const SortBlog = () => {
  // const [posts, setPosts] = useState([]);
  const [display, setDisplay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState(0);

  const countPerPage = 9; // set number of posts per page
  const noOfPages =
    Math.floor(display.length / countPerPage) +
    (display.length / countPerPage - Math.floor(display.length / countPerPage) >
    0
      ? 1
      : 0);
  const onPagination = (e) => {
    setActivePage(e.selected);
  };

  useEffect(() => {
    setLoading(true);
    instance
      .get("/insights")
      .then((response) => {
        // setPosts(response.data.insights);
        setLoading(false);
        setDisplay(response.data.insights);
      })
      .catch((error) => {});
  }, []);

  return (
    <section className={styles.sort}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className={`${styles.wrapper} wrapper`}>
          {loading ? (
            <>
              <h4 style={{ textAlign: "center" }}>Loading...</h4>
            </>
          ) : (
            <>
              <div className={styles.filters}>
                <h3>Sort Blog By:</h3>
                <div className={styles.filterGroup}>
                  <Select
                    wrapClass={styles.sortBox}
                    labelText="Categories"
                    id="categories"
                  >
                    <option></option>
                  </Select>
                </div>
                <div className={styles.filterGroup}>
                  <Select wrapClass={styles.sortBox} labelText="Month" id="month">
                    <option></option>
                  </Select>
                </div>
                <div className={styles.filterGroup}>
                  <button className="btn-small">Show All</button>
                </div>
              </div>

              <div className={styles.grid}>
                {display
                  .slice(
                    activePage * countPerPage,
                    activePage * countPerPage + countPerPage
                  )
                  .map((post, i) => (
                    <InsightCard
                      key={i}
                      alt=""
                      src={post.galleryId}
                      url={`/blogs/${post.id}`}
                      heading={post.title}
                      desc=""
                      date={post.createdAt}
                      author={
                        !isEmpty(post.createdBy)
                          ? `${post.createdBy.lastName} ${post.createdBy.firstName}`
                          : null
                      }
                    />
                  ))}
              </div>

              <div className={styles.gridPaginate}>
                <Pagination
                  pageCount={noOfPages}
                  containerClassName="pagination"
                  activeClassName="paginate-active"
                  disabledClassName="paginate-disabled"
                  previousClassName="paginate-previous"
                  nextClassName="paginate-next"
                  breakLabel=""
                  pageRangeDisplayed={0}
                  onPageChange={onPagination}
                />
              </div>
            </>
          )}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default SortBlog;
