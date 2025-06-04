import "../App.css"
import { useNavigate } from "react-router-dom"; 
import { useAuth } from '../App';
export default function HomePage() {
    const { user } = useAuth(); // Get user from context
    const navigate = useNavigate(); 
    return (
        <>
        <div className="log-out" onClick={() => navigate("/")}>
            Log out
        </div>
            {user ? (
                <h1>Welcome {user.name} {user.surname}</h1>
            ) : (
                <h1>No user is logged in.</h1>
            )}
        </>
    );
}