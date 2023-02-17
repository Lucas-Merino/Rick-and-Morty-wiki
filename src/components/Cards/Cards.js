import React from 'react'
import { Link } from "react-router-dom"
import styles from "./Cards.module.css"

const Cards = ({  results, page }) => {
  let display;
  
  if(results){
    display = results.map(character => { 
      let { id, name, image, status, location } = character
      
      function changeColors(){
        if(status === "Dead") {
          return (
            <div className={`${styles.badge} position-absolute badge bg-danger`}>
              {status}
            </div>
          );
        } else if (status === "Alive"){
          return (
            <div className={`${styles.badge} position-absolute badge bg-success`}>
              {status}
            </div>
          );
        } else {
          return (
            <div className={`${styles.badge} position-absolute badge bg-secondary`}>
              {status}
            </div>
          );
        }
      }

      return (
        <Link 
          style={{ textDecoration: "none" }}
          to={`${page} ${id}`} 
          key={id} 
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark">
          
          <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
            <img src={image} alt="Not Found " className={`${styles.img} img-fluid`} />
            <div className={`${styles.padding} content`}>
              <div className='fs-4 fw-bold mb-4'>{name}</div>
              <div className='fs-6'>Last Location: </div>
              <div className='fs-5'>{location.name}</div>
            </div>
          </div>
          {changeColors()}
        </Link>
      );
    });
  } else{
    display = "No Characters Found :C"
  }
  
  return (
    <>
      {display}
    </>
  )
}

export default Cards
