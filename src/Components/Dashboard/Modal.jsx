import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import { IoMdClose } from "react-icons/io";

const Modal = ({isopen}) => {
  const [skills, setskills] = useState([]);

  return (
    <div className={styles.modalbody}>
      <div className={styles.modal}>
        <div className={styles.createNewAssessmentParent}>
          <div className={styles.createNewAssessment1}>
            Create new assessment
          </div>
          <IoMdClose onClick={isopen}/>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.inpuparant}>
            <p>Name of assesment</p>
            <input type="text" placeholder="Type Here" />
          </div>
          <div className={styles.inpuparant}>
            <p>Purpose of the test is</p>
            <select placeholder="Type Here">
              <option value="">Select</option>
            </select>
          </div>
          <div className={styles.inpuparant}>
            <p>Description</p>
            <select placeholder="Type Here">
              <option value="">Select</option>
            </select>
          </div>
          <div className={styles.inpuparant}>
            <p>Skills</p>
            <div className={styles.skilconteer}></div>
            <input type="text" placeholder="Type Here" />
          </div>
          <div className={styles.inpuparant}>
            <p>Duration of assessment</p>
            <input type="text" placeholder="HH:MM:SS" />
          </div>
        </div>
        <div className={styles.savebuton}>
       <div>Save</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
