import { useState } from 'react'
import './App.css'
import { ValidateEmail } from "./Components/ValidateEmail";
import { ValidatePassword } from './Components/ValidatePassword';
import { ValidateName } from './Components/ValidateName';
const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">
      Password should have from 8 to 20 characters and include uppercase letters, lowercase letters, numbers, and special characters.
      </p>
  );
};
const EmailErrorMessage = () => {
  return (
    <p className="FieldError">
      Please enter a valid email address
    </p>
  );
}
const NameErrorMessage = () => {
  return (
    <p className="FieldError">
      Please enter a valid first name
    </p>
  );
}
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("gender");

  const getIsFormValid = () => {
    const isNameValid = firstName.trim() !== "" && ValidateName(firstName);
    const isEmailValid = ValidateEmail(email);    
    const isPasswordValid = ValidatePassword(password.value);
    console.log(isPasswordValid);
    
    const isRoleValid = role === "male" || role === "female";
    return isNameValid && isEmailValid && isPasswordValid && isRoleValid;
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("gender")
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <div className="circle"></div>
      <div className="circle"></div>
      <form onSubmit={handleSubmit}>
        
          <h2>Sign Up</h2>
          <div className="Field">
            <label htmlFor="first-name">
              First name <sup>*</sup>
            </label>
            <input
              id="first-name"
              placeholder="First name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            {!ValidateName(firstName) && firstName && <NameErrorMessage />}
          </div>
          <div className="Field">
            <label htmlFor="last-name">Last name</label>
            <input
              id="last-name"
              placeholder="Last name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label htmlFor="email">
              Email address <sup>*</sup>
            </label>
            <input
              id="email"
              placeholder="Email address"
              value={email}
              onChange={e =>  setEmail(e.target.value)}
            />
            {!ValidateEmail(email) && email && <EmailErrorMessage />}
          </div>
          <div className="Field">
            <label htmlFor="password">
              Password <sup>*</sup>
            </label>
            <input
              id="password"
              placeholder="Password"
              value={password.value}
              onChange={e => setPassword({ value: e.target.value, isTouched: true })}
            />
            {password.isTouched && !ValidatePassword(password.value) ? <PasswordErrorMessage/> : null}
          </div>
          <div className="Field">
            <label htmlFor="gender">
              Gender <sup>*</sup>
            </label>
            <select
              id="gender"
              value={role}
              onChange={e => setRole(e.target.value)}
            >
              <option value="gender">Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
      </form>
    </div>
  );
}

export default App;

