import { useState, useEffect, useRef } from "react";

export default function CountdownTimer({ initialMinutes = 1, initialSeconds = 0, onComplete }) {
    const [time, setTime] = useState({
        minutes: initialMinutes,
        seconds: initialSeconds,
    });
    const intervalRef = useRef(null);

    useEffect(() => {
        const secTimer = 1000;
        intervalRef.current = setInterval(() => {
            setTime(prevTime => {
                const { minutes, seconds } = prevTime;
                if (minutes === 0 && seconds === 0) {
                    clearInterval(intervalRef.current); // Stop the timer
                    if (onComplete) onComplete(); // Call the onComplete callback
                    return prevTime;
                } else if (seconds === 0) {
                    return { minutes: minutes - 1, seconds: 59 };
                } else {
                    return { minutes, seconds: seconds - 1 };
                }
            });
        }, secTimer); // Update every second

        return () => clearInterval(intervalRef.current);
    }, [onComplete]);

    // Format with leading zeros
    const format = num => num.toString().padStart(2, "0");

    return (
        <div>
            <span className="timer">{format(time.minutes)}:{format(time.seconds)}</span>
        </div>
    );
}