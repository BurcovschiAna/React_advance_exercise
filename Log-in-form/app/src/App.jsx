import { useState, useEffect,  createContext, useContext} from "react";
import { useNavigate, Route, Routes } from "react-router-dom"; 
import HomePage from "./Components/HomePage";
import LogInForm from "./Components/LogInForm"
import "./App.css";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default function App() {
  const [userData, setUserData] = useState([]);

  const fetchData = () => {
    fetch(`/data.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then((jsonData) => {
        console.log("Fetched data:", jsonData);
        setUserData(jsonData);
      })
      .catch((error) => console.log("Fetch error:", error)); 
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <AuthProvider>
      <Routes>
        <Route path="/" element={<LogInForm userData={userData}/>}/>
        <Route path="/home" element={<HomePage userData={userData}/>}/>
      </Routes>
      </AuthProvider>
    </div>
  );
}
