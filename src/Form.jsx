import "./Form.css";

function Form({ sectionKey, inputs, data, onInput }) {
  if (!data) return null;

  return (
    <div className="inputs-container">
      <div className="inputs">
        {inputs.map((input) => (
          <div key={input.key} className="input-group">
            <label htmlFor={`${data.id}`}>
              {input.label}
            </label>

            {(
              <input
                type={input.type}
                id={`${data.id}`}
                value={data[input.key]}
                onChange={(e) =>
                  onInput(sectionKey, input.key, e.target.value, data.id)
                }
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;
