import React from 'react';
import FormData from './data.json';

export default function Form() {
  const [formData, setFormData] = React.useState({
    Name: '',
    EmployeeNo: '',
    Designation: '',
  });
  const [formDisplay, setFormDisplay] = React.useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }
  function handleClick() {
    setFormDisplay(formData);
  }

  return (
    <div>
      {Object.keys(FormData).map((data, idx) => {
        return (
          <div key={idx}>
            <label className="labels">{data}</label>
            {data === 'Designation' ? (
              <select
                name={FormData[data].name}
                id={FormData[data].id}
                onChange={handleChange}
              >
                {FormData[data].option.map((options, idx) => (
                  <option key={idx} value={options}>
                    {options}
                  </option>
                ))}
              </select>
            ) : (
              <>
                {data === 'Submit' ? (
                  <input
                    type={FormData[data].type}
                    id={FormData[data].id}
                    onClick={handleClick}
                  />
                ) : (
                  <input
                    type={FormData[data].type}
                    name={FormData[data].name}
                    placeholder={FormData[data].placeholder}
                    id={FormData[data].id}
                    onChange={handleChange}
                  />
                )}
              </>
            )}
          </div>
        );
      })}
      {formDisplay && (
        <>
          <p>
            Name: <span className="display">{formDisplay.Name}</span>
          </p>
          <p>
            Employee No:{' '}
            <span className="display">{formDisplay.EmployeeNo}</span>
          </p>
          <p>
            Designation:{' '}
            <span className="display">{formDisplay.Designation}</span>
          </p>
        </>
      )}
    </div>
  );
}
