import './Form.css'

function Form({sectionKey, label, inputs, data, onInput}) {
  return (
    <>
      <h2>{label}</h2>
      {inputs.map((input) => (
        <div key={input.field}>
          <label htmlFor={input.field}>{input.label}</label>
          <input 
            id={input.field} 
            type={input.type} 
            placeholder={input.placeholder} 
            value={data[input.field]} 
            onChange={(e) => onInput(sectionKey, input.key, e.target.value)} 
          />
        </div>
      ))}
    </>
  )
}

export default Form