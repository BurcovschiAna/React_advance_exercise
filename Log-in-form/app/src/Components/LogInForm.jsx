import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { useAuth } from '../App';

export default function LogInForm(props) {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [visible, setVisible] = useState(false);
  const [modalClose, setModalClose] = useState(false)
  const navigate = useNavigate(); 
    const { login } = useAuth();
  
  useEffect(() => {
    setDisabled(!(user && password)); 
  }, [user, password]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const loggedInUser = props.userData.find(u => u.username === user && u.password === password);
        if (loggedInUser) {
            login(loggedInUser);
            navigate("/home");
        } else {
           setModalClose(true)
        }
    };
  const Modal = () => {
    return (
        <>
            {modalClose ? (
                <div className="modal">
                    Invalid username or password
                    <span className="material-symbols-outlined" onClick={() => setModalClose(false)}> close</span>
                </div>
            ) : null}
        </>
    );
  }

  return (
    <div className="container">
      <Modal/>
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
