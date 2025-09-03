import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
//Components
import CountdownTimer from "../components/CountdownTimer";
import Footer from "../components/Footer";
import MentalBreak from "../components/MentalBreak";
//Assets
import focusSound from "../assets/sounds/focus-sound-effect.mp3";
import restSound from "../assets/sounds/rest-sound-effect.mp3";

const theme = createTheme({
    palette: {
        blue: {
            main: '#5eb0daff',
            light: '#b3cce7ff',
            dark: '#C57807',
            contrastText: '#FBF5DD',
        },
        purple: {
            main: '#7d45a4ff',
            light: '#bd8dddff',
            dark: '#cbbd00ff',
            contrastText: '#fefae8ff',
        },
        offBlue: {
            main: '#445058ff',
            light: '#8da2b3ff',
            dark: '#7e653dff',
            contrastText: '#E0D9CA',
        },
        green: {
            main: '#6EC472',
            light: '#d1f1c4ff',
            dark: '#6d6805ff',
            contrastText: '#ffffe5ff',
        },
        offGreen: {
            main: '#7a976eff',
            light: '#dfead7ff',
            dark: '#3c4933ff',
            contrastText: '#e4f4deff',
        }
    }
})


export default function Focus() {
    const location = useLocation();
    const navigate = useNavigate();
    const { frProp, frTimes, frSound, frTheme } = location.state || {};
    const [phase, setPhase] = useState("Focus");
    const [currentRound, setCurrentRound] = useState(1);

    const focusAudioRef = useRef(null);
    const restAudioRef = useRef(null);

    useEffect(() => {
        if (!frSound) return;
        if (phase === "Focus" && focusAudioRef.current) {
            focusAudioRef.current.currentTime = 0;
            focusAudioRef.current.play();
        }
        if (phase === "Rest" && restAudioRef.current) {
            restAudioRef.current.currentTime = 0;
            restAudioRef.current.play();
        }
    }, [phase, frSound]);

    const getPalette = (frTheme, phase) => {
        if (phase === "Focus") {
            if (frTheme === "Blue") return theme.palette.blue;
            if (frTheme === "Purple") return theme.palette.purple;
            if (frTheme === "Grey") return theme.palette.offBlue;
        } else if (phase === "Rest") {
            if (frTheme === "Blue" || frTheme === "Purple") return theme.palette.green;
            if (frTheme === "Grey") return theme.palette.offGreen;
        }
        return theme.palette.blue;
    }

    const currPalette = getPalette(frTheme, phase);

    useEffect(() => {
        document.documentElement.style.setProperty('--main-bg', currPalette.main);
        document.documentElement.style.setProperty('--main-text', currPalette.contrastText);
        document.documentElement.style.setProperty('--main-light', currPalette.light);
        document.documentElement.style.setProperty('--main-dark', currPalette.dark);
    }, [currPalette]);

    const focusMinutes = (() => {
        if (frProp === "20/5") return 20;
        if (frProp === "25/5") return 25;
        if (frProp === "30/10") return 30;
        if (frProp === "50/10") return 50;
        return 25;
    })();

    const restMinutes = (() => {
        if (frProp === "20/5" || frProp === "25/5") return 5;
        if (frProp === "30/10" || frProp === "50/10") return 10;
        return 5;
    })();

    const handleFocusComplete = () => {
        if (currentRound < frTimes) {
            setPhase("Rest");
        } else {
            navigate("/finished");
        }
    };

    const handleRestComplete = () => {
        setCurrentRound(prev => prev + 1);
        setPhase("Focus");
    };

    return (
        <div>
            <audio ref={focusAudioRef} src={focusSound} />
            <audio ref={restAudioRef} src={restSound} />
            <div className="timer-container">
                <h2 className="focus">{phase}</h2>
                {phase === "Focus" ? (
                    <CountdownTimer
                        key={`Focus-${focusMinutes}`}
                        initialMinutes={focusMinutes}
                        initialSeconds={0}
                        onComplete={handleFocusComplete}
                    />
                ) : (
                    <CountdownTimer
                        key={`Rest-${restMinutes}`}
                        initialMinutes={restMinutes}
                        initialSeconds={0}
                        onComplete={handleRestComplete}
                    />
                )}
                {phase === "Rest" && <MentalBreak />}
            </div>
            <Footer />
        </div>
    );
};