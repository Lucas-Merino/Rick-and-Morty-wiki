import React from 'react'


const FilterBTN = ({name, index, items, task, setPageNumber}) => {
  return (
    <div>
        <div>
            <style jsx="true">
                {`
                    input[type="radio"]{
                        display: none
                    }

                    .inp:checked + label {
                        background-color: #0b5ed7; 
                        color: white
                    }
                `}
            </style>
        </div>
        <div className="form-check mb-2">
            <input 
                onClick={()=>{
                    setPageNumber(1);
                    task(items)
                }}
                className="form-check-input inp"
                type="radio" 
                name={name} 
                id={`${name}-${index}`} />
           <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
                {items}
            </label>
        </div>
    </div>
  )
}

export default FilterBTN
