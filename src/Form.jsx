//import { useState } from 'react'

import './Form.css'

function Form({label,inputs}) {

  return (
    <>
      {inputs.map((input, index) => (
        <div key={index}>
          <label>{label}</label>
          <input type={input.type} placeholder={input.placeholder} />
        </div>
      ))}
    </>
  )
}

export default Form
