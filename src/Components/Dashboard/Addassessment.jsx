import React, { useState } from 'react'
import style from "./Addassessment.module.css"
import {AiOutlinePlus} from "react-icons/ai"
import Modal from './Modal'
const Addassessment = () => {
  const[openmodal,setopenmodal]=useState(false)
  const modalHandler=()=>{
    setopenmodal(!openmodal)
  }
  return (
    <>
    <div className={style.addbox} onClick={modalHandler}>
      <AiOutlinePlus className={style.adicon}/>
      <h1 className={style.adahead}>New Assessment</h1>
      <p className={style.adadesc}>From heare you can add questions of multiple types like MCQs,ubjective (text or paragraph)!</p>
    </div>
    {openmodal&&  <Modal isopen={modalHandler} con={openmodal}/>}
  
    </>
    
  )
}

export default Addassessment
