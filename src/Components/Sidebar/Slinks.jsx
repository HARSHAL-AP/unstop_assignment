import React from 'react'
import Styles from "./Slinks.module.css"
import {MdOutlineDashboard} from "react-icons/md"

const Slinks = () => {
  return (
    <div className={Styles.slinks}>
      <MdOutlineDashboard/>
      <h6>Dashboard</h6>
    </div>
  )
}

export default Slinks
