import React, { useState } from 'react'
import Styles from "../styles/Dashboard.module.css"
import Assessment from '../Components/Dashboard/Assessment'
import Addassessment from '../Components/Dashboard/Addassessment'
import Reports from '../Components/Dashboard/Reports'
import {AiOutlineSearch} from "react-icons/ai"
import {FaFilter} from "react-icons/fa"
import {MdOutlineBarChart} from "react-icons/md"
const Dashboard = () => {
  const [isopen,setisopen]=useState(true)
  const handleOpen=()=>{
    setisopen(!isopen)
  }
  return (
    <div className={Styles.dashboard}>
     <div className={Styles.assessmentsOverviewParent}>
      
      { isopen&&"Assessment Overview"}
     { isopen&&<Reports/>}
     </div>
     <div>
     <div className={Styles.assecomp}>
      <h1>My Assesssment</h1>
      <div className={Styles.filicosns}>
      <AiOutlineSearch className={Styles.filicosnss}/>
      <FaFilter className={Styles.filicosnss}/>
      <MdOutlineBarChart className={Styles.filicosnss} onClick={handleOpen}/>
      </div>
     </div>
     <div className={Styles.asicon}>
      <Addassessment/>
      <Assessment/><Assessment/><Assessment/>
     </div>
     </div>
    </div>
  )
}

export default Dashboard
