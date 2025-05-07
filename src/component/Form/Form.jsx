import React, { useState } from "react";
import styles from "./Form.module.css";

function Form() {
  const [info, setInfo] = useState({ first_name: "", last_name: "" });
  const [submittedInfo, setSubmittedInfo] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedInfo(info);
  };

  return (
    <div className={styles.mainContainer}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first">First Name:</label>
          <input
            id="first"
            name="first_name"
            type="text"
            value={info.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="last">Last Name:</label>
          <input
            id="last"
            name="last_name"
            type="text"
            value={info.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedInfo && (
        <p>{`Full name: ${submittedInfo.first_name} ${submittedInfo.last_name}`}</p>
      )}
    </div>
  );
}

export default Form;
