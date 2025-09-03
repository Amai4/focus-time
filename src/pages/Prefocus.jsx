import Footer from "../components/Footer";
import PrefocusForm from '../components/PrefocusForm';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//utilities
import resetThemeVariables from "../utils/resetThemeVariables"

export const frPropOptions = ["20/5", "25/5", "30/10", "50/10"];
export const frDurationOptions = [
    { label: "1h", value: "1h" },
    { label: "2h", value: "2h" },
    { label: "3h", value: "3h" },
    { label: "4h", value: "4h" }
];
export const frThemeOptions = [
    { label: "Blue", value: "Blue" },
    { label: "Purple", value: "Purple" },
    { label: "Dark", value: "Grey" }
];

function getFrTimes(frProp, frDuration) {
    const table = {
        "20/5": { "1h": 3, "2h": 5, "3h": 8, "4h": 10 },
        "25/5": { "1h": 2, "2h": 4, "3h": 6, "4h": 8 },
        "30/10": { "1h": 2, "2h": 3, "3h": 5, "4h": 6 },
        "50/10": { "1h": 1, "2h": 2, "3h": 3, "4h": 4 }
    };
    return table[frProp]?.[frDuration] ?? 0;
}

export default function Prefocus() {
    const [frProp, setFrProp] = useState("20/5");
    const [frDuration, setFrDuration] = useState("1h");
    const [frSound, setFrSound] = useState(true);
    const [frTheme, setFrTheme] = useState("Blue");
    const navigate = useNavigate();
    const handleStart = () => {
        const frTimes = getFrTimes(frProp, frDuration);
        navigate("/focus", { state: { frProp, frTimes, frSound, frTheme } });
    };

    useEffect(() => {
        resetThemeVariables();
    }, []);

    return (
        <div>
            <PrefocusForm
                frProp={frProp}
                setFrProp={setFrProp}
                frDuration={frDuration}
                setFrDuration={setFrDuration}
                frSound={frSound}
                setFrSound={setFrSound}
                frTheme={frTheme}
                setFrTheme={setFrTheme}
                onSubmit={() => {
                    const frTimes = getFrTimes(frProp, frDuration);
                    handleStart();
                    console.log(frProp, frTimes, frSound, frTheme);
                }} />
            <Footer />
        </div>
    );
}