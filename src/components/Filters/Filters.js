import React from 'react'
import styles from "./Filters.module.css"
import Gender from "../Filters/Category/Gender"
import Species from "../Filters/Category/Species"
import Status from "../Filters/Category/Status"

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  
  function clear(){
    setStatus("")
    setPageNumber("") 
    setGender("") 
    setSpecies("")
    window.location.reload(false);
  }
  
  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className='text-center fw-bold fs-4 mb-2'> 
        Filters
        <div 
          className={`${styles.a} text-center text-decoration-underline text-primary mb-4`}
          onClick={clear}>
          Clear Filters
        </div>
      </div>

      <div className="accordion" id="accordionExample">
        <Gender setPageNumber={setPageNumber} setGender={setGender}/>
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies}/>
        <Status setPageNumber={setPageNumber} setStatus={setStatus}/>
      </div>
    </div>
  )
}

export default Filters
