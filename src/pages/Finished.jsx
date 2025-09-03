import { useEffect } from "react";

//Components
import Footer from "../components/Footer";
import MentalRest from "../components/MentalRest";

//utilities
import resetThemeVariables from "../utils/resetThemeVariables"

export default function Finished() {
    useEffect(() => {
        resetThemeVariables();
    }, []);
    return (
        <div className="home">
            <h1>Well done!</h1>
            <div className="info-text">
                <h2>Before you go, I have a challenge for you...</h2>
                <MentalRest />
            </div>
            <Footer />
        </div>
    )
}