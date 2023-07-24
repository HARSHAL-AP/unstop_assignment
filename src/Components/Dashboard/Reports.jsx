import React from "react";
import styles from "./Reports.module.css";
import { FaEquals } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { IoEarth } from "react-icons/io5";
import { IoLinkSharp } from "react-icons/io5";
const Reports = () => {
  return (
    <div className={styles.repob}>
      <div className={styles.b1}>
        <div className={styles.totalAssessment}>Total Assessment</div>
        <div className={styles.frameParent}>
          <FaEquals className={styles.frameChild} />
          <b className={styles.b}>34</b>
        </div>
      </div>
      <div className={styles.b2}>
        <div className={styles.candidates}>Candidates</div>
        <div className={styles.frameParent}>
          <MdPeopleAlt className={styles.frameChild} />
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <b className={styles.b}>11,145</b>
              <div className={styles.div}>+89</div>
            </div>
            <div className={styles.totalCandidate}>Total Candidate</div>
          </div>
          <img className={styles.frameItem} alt="" src="Vector 250.svg" />
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <b className={styles.b}>1,14</b>
              <div className={styles.div}>+89</div>
            </div>
            <div className={styles.totalCandidate}>Who Attamped</div>
          </div>
        </div>
      </div>
      <div className={styles.b3}>
        <div className={styles.candidates}>Candidates</div>
        <div className={styles.frameParent}>
          <IoEarth className={styles.frameChild} />
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <b className={styles.b}>11,145</b>
              <div className={styles.div}>+89</div>
            </div>
            <div className={styles.totalCandidate}>Total Candidate</div>
          </div>
          <img className={styles.frameItem} alt="" src="Vector 250.svg" />
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <b className={styles.b}>1,14</b>
              <div className={styles.div}>+89</div>
            </div>
            <div className={styles.totalCandidate}>Who Attamped</div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <b className={styles.b}>145</b>
              <div className={styles.div}>+89</div>
            </div>
            <div className={styles.totalCandidate}>Unique Link</div>
          </div>
        </div>
      </div>
      <div className={styles.b4}>
        <div className={styles.totalPurpose4}>Total Purpose</div>
        <div className={styles.frameParent4}>
          <IoLinkSharp className={styles.frameChild4} />
          <b className={styles.b44}>11</b>
        </div>
      </div>
    </div>
  );
};

export default Reports;
