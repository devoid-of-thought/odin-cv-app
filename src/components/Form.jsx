import "../styles/Form.css";

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

            {input.type === "textarea" ? (
                <textarea
                spellCheck="false"
                  id={`${data.id}-${input.key}`}
                  value={data[input.key]}
                  className={input.className}
                  placeholder={input.placeholder}
                  onChange={(e) =>
                    onInput(sectionKey, input.key, e.target.value, data.id)
                  }
                />
              ) : (
                <input
                  type={input.type}
                  id={`${data.id}-${input.key}`}
                  value={data[input.key]}
                  className={input.className}
                  placeholder={input.placeholder}
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
