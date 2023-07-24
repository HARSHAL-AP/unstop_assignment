import React from 'react'
import styles from "../styles/Sidebar.module.css"
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import {LuLayoutDashboard} from "react-icons/lu"
import {TfiWrite} from "react-icons/tfi"
import {MdOutlineLibraryBooks} from "react-icons/md"
import {GoProjectSymlink} from "react-icons/go"
const Sidebar = () => {
  return (
  <div className={styles.frameParent}>
  <div className={styles.frameGroup}>
  <div className={styles.frameDiv}>
  <div className={styles.dashboardParent}>
  <LuLayoutDashboard className={styles.dashboardIcon1}  />
  <div className={styles.dashboard}>Dashboard</div>
  <div className={styles.frameChild} />
  </div>
  <div className={styles.noteAltParent}>
  <TfiWrite className={styles.noteAltIcon1}  />
  <div className={styles.dashboard}>Assessment</div>
  <div className={styles.frameChild} />
  </div>
  <div className={styles.quizParent}>
   <MdOutlineLibraryBooks className={styles.quizIcon1}  />
  <div className={styles.myLibrary}>My Library</div>
  </div>
  <div className={styles.frameInner} />
  <div className={styles.frameInner} />
  <div className={styles.frameInner} />
  <div className={styles.billAndPlanLineWrapper}>
  <div className={styles.billAndPlanLine1} />
  </div>
  </div>
  <div className={styles.vectorParent}>
  <img className={styles.vectorIcon} alt="" src="Vector 267.svg" />
  <div className={styles.frameParent1}>
  <div className={styles.adminWrapper}>
  <div className={styles.admin}>Admin</div>
  </div>
  <div className={styles.adminMedsParent}>
  <GoProjectSymlink className={styles.quizIcon1} />
  <div className={styles.myLibrary}>
  <p className={styles.round}>Round</p>
  <p className={styles.round}>Status</p>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>)
}

export default Sidebar
