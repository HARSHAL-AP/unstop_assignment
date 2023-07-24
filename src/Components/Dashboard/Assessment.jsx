import React from 'react'
import styles from "./Assessment.module.css"
import {PiBagBold} from "react-icons/pi"
import {HiDotsVertical} from "react-icons/hi"
import {SlCalender} from "react-icons/sl"
import {PiLinkSimpleBold} from "react-icons/pi"
const Assessment = () => {
    return (
        <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
        <div className={styles.frameDiv}>
       
        <PiBagBold className={styles.frameChild}/>
        <div className={styles.mathAssessmentParent}>
        <div className={styles.mathAssessment}>Math Assessment</div>
        <div className={styles.jobParent}>
        <div className={styles.job}>Job</div>
        |
        <div className={styles.calendarTodayParent}>
      
        <SlCalender className={styles.calendarTodayIcon1}/>
        <div className={styles.apr2023}>20 Apr 2023</div>
        </div>
        </div>
        </div>
        </div>
        <div className={styles.dotWrapper}>
       <HiDotsVertical className={styles.dotIcon1}/>
        </div>
        </div>
        <img className={styles.frameInner} alt="" src="Vector 332.svg" />
        <div className={styles.frameParent1}>
        <div className={styles.frameParent2}>
        <div className={styles.parent}>
        <div className={styles.div}>00</div>
        <div className={styles.duration}>Duration</div>
        </div>
        <div className={styles.parent}>
        <div className={styles.div}>00</div>
        <div className={styles.duration}>Questions</div>
        </div>
        </div>
        <div className={styles.frameParent3}>
        <div className={styles.linkParent}>
       <PiLinkSimpleBold className={styles.linkIcon1 }/>
        <div className={styles.mathAssessment}>Share</div>
        </div>
        <div className={styles.frameWrapper}>
        <div className={styles.lpWrapper}>
        <b className={styles.lp}>LP</b>
        </div>
        </div>
        </div>
        </div>
        <div className={styles.frameChild1} />
        </div>);
}

export default Assessment
