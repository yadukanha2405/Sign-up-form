import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const initialState = {
    username: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  const [details, setDetails] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmmit, setIsSubmmit] = useState(false);

  const submmit = () => {
    alert(JSON.stringify(details, "", 5));
  };

  const changeUser = (e) => {
    let { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  const handleSubmmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(details));
    setIsSubmmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).lenth === 0 && isSubmmit) {
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = "^[a-zA-Z0-9]*$";
    if (!values.username) {
      errors.username = "Username is requred";
    }
    if (!values.age) {
      errors.age = "Age is requred";
    }
    if (!values.email) {
      errors.email = "Email is requred";
    }
    if (!values.password) {
      errors.password = "Password is requred";
    }
  };

  return (
    <div className="App">
      <h1>Sign-up form </h1>
      <form className="container" onSubmit={handleSubmmit}>
        <div className="input">
          <label>Use Name:</label>
          <input
            type="text"
            placeholder="User Name"
            onChange={changeUser}
            name="username"
            value={details.username}
          />
          <p>{formErrors.username}</p>;
        </div>
        <div className="input">
          <label>Age:</label>
          <input
            type="number"
            placeholder="User Age"
            onChange={changeUser}
            name="age"
            value={details.age}
          />
          <p>{formErrors.age}</p>
        </div>
        <div className="input">
          <label>Email-id:</label>
          <input
            type="email"
            placeholder="email-id"
            onChange={changeUser}
            name="email"
            value={details.email}
          />
          <p>{formErrors.email}</p>
        </div>
        <div className="input">
          <label>Password:</label>
          <input
            type="password"
            placeholder="password"
            onChange={changeUser}
            name="password"
            value={details.password}
          />
          <p>{formErrors.password}</p>
        </div>
        <div className="input">
          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder="password"
            onChange={changeUser}
            name="confirmPassword"
            value={details.confirmPassword}
          />
          <p>{formErrors.confirmPassword}</p>
        </div>
        <div className="input">
          <button onClick={submmit}>Submmit</button>
        </div>
      </form>
    </div>
  );
}
