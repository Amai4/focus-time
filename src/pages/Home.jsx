import { Link } from "react-router-dom"
import { useEffect } from "react";

//utilities
import resetThemeVariables from "../utils/resetThemeVariables"

export default function Home() {
    useEffect(() => {
        resetThemeVariables();
    }, []);
    return (
        <div className="home">
            <h1>Welcome to <i>Focus-Time</i></h1>
            <div className="info-text">
                <p>A simple app where you can personalize your own pomodoro, to help you keep your focus the way it works for YOU.</p>
            </div>
            <Link to="/prefocus">
                <button>Get Started</button>
            </Link>
        </div>
    )
}