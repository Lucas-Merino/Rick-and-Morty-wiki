import React from 'react'

const InputGroup = ({ total, setId, name }) => {
  
    return (
    <div className="input-group mb-3">
    <label className="input-group-text" forhtml="inputGroupSelect01">Options</label>
    <select 
      className="form-select" 
      id="episode" 
      onChange={e=>setId(e.target.value)}
    >
        <option value={1} defaultValue>Choose...</option>
        {[...Array(total).keys()].map((eachNum)=>{
          return(
            <option key={eachNum} value={eachNum + 1}>
              {name} - {eachNum + 1}
            </option>
          )
        })}
    </select>
  </div>
  )
}

export default InputGroup
