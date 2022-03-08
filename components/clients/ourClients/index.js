import React from "react";
import styles from "./styles.module.scss";
import Select from "../../ui/customSelect";
import Pagination from "../../ui/pagination";
import ScrollAnimation from 'react-animate-on-scroll';

const OurClients = () => {
  return (
    <section className={styles.ourClients}>
      <div className={`${styles.wrapper} wrapper`}>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <h2>Our Clients</h2>
          <div className={styles.filters}>
            <h3>Sort Clients By:</h3>
            <div className={styles.filterGroup}>
              <Select
                wrapClass={styles.sortBox}
                labelText="Industry"
                id="industry"
              >
                <option></option>
              </Select>
            </div>
            <div className={styles.filterGroup}>
              <Select wrapClass={styles.sortBox} labelText="Technology" id="tech">
                <option></option>
              </Select>
            </div>
            <div className={styles.filterGroup}>
              <button className="btn-small">Show All</button>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>
                  <i className="fas fa-arrow-left"></i>
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.image}>
                  <img loading="lazy" alt="" src="/images/logistics.png" />
                </div>
                <p>Insurance</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>
                  <i className="fas fa-arrow-left"></i>
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.image}>
                  <img loading="lazy" alt="" src="/images/aramex2.png" />
                </div>
                <p>Health Care</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>
                  <i className="fas fa-arrow-left"></i>
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.image}>
                  <img loading="lazy" alt="" src="/images/igt.png" />
                </div>
                <p>Media</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>
                  <i className="fas fa-arrow-left"></i>
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.image}>
                  <img loading="lazy" alt="" src="/images/igt.png" />
                </div>
                <p>Oil & Gas</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>
                  <i className="fas fa-arrow-left"></i>
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.image}>
                  <img loading="lazy" alt="" src="/images/igt.png" />
                </div>
                <p>Tech</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>
                  <i className="fas fa-arrow-left"></i>
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.image}>
                  <img loading="lazy" alt="" src="/images/bongiovi.png" />
                </div>
                <p>Insurance</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>
                  <i className="fas fa-arrow-left"></i>
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.image}>
                  <img loading="lazy" alt="" src="/images/brookstone.png" />
                </div>
                <p>Oil & Gas</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>
                  <i className="fas fa-arrow-left"></i>
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.image}>
                  <img loading="lazy" alt="" src="/images/aramex2.png" />
                </div>
                <p>Health Care</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>
                  <i className="fas fa-arrow-left"></i>
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.image}>
                  <img loading="lazy" alt="" src="/images/igt.png" />
                </div>
                <p>Tech</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>
                  <i className="fas fa-arrow-left"></i>
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.image}>
                  <img loading="lazy" alt="" src="/images/bongiovi.png" />
                </div>
                <p>Insurance</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>
                  <i className="fas fa-arrow-left"></i>
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.image}>
                  <img loading="lazy" alt="" src="/images/brookstone.png" />
                </div>
                <p>Oil & Gas</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span>
                  <i className="fas fa-arrow-left"></i>
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.image}>
                  <img loading="lazy" alt="" src="/images/aramex2.png" />
                </div>
                <p>Health Care</p>
              </div>
            </div>
          </div>
          <div className={styles.gridPaginate}>
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
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default OurClients;
