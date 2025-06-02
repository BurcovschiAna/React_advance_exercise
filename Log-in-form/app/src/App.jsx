import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [visible, setVisible] = useState(false);
  const [userData, setUserData] = useState([]);

  // Effect to enable/disable the login button
  useEffect(() => {
    setDisabled(!(user && password)); 
  }, [user, password]);

const fetchData = () => {
  fetch(`/data.json`)
    .then((response) => response.json()) 
      .then((jsonData) => setUserData(jsonData))
      .catch((error) => console.log(error)); 
};

  useEffect(() => {
    fetchData();
    
    
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    // Check if the entered username and password match any user in userData
    const loggedInUser = userData.find(u => u.username === user && u.password === password);
    if (loggedInUser) {
      alert(`Welcome, ${loggedInUser.name}!`);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="flex">
          <div className="item">
            <input
              type="text"
              id="user"
              required
              onChange={e => setUser(e.target.value)}
            />
            <span className="material-symbols-outlined">person</span>
            <label htmlFor="user">Username</label>
            <div className="line user-line"></div>
          </div>

          <div className="item">
            <input
              type={visible ? "text" : "password"}
              id="password"
              required
              onChange={e => setPassword(e.target.value)}
            />
            <span
              className="material-symbols-outlined"
              onClick={() => setVisible(!visible)}
            >
              {visible ? "visibility" : "visibility_off"}
            </span>
            <label htmlFor="password">Password</label>
            <div className="line password-line"></div>
          </div>
        </div>
        <button type="submit" disabled={disabled}>Log In</button>
      </form>
    </div>
  );
}
