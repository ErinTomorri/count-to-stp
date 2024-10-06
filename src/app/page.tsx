'use client'
import { useEffect, useState } from 'react';
import './countdown.css'; // {{ edit_1 }} Import a CSS file for styles

const Countdown = () => {
    const targetDate = new Date('2025-03-17T00:00:00');
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const calculateTimeRemaining = () => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            setTimeRemaining({ days, hours, minutes, seconds });
        } else {
            setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
    };

    useEffect(() => {
        calculateTimeRemaining(); // {{ edit_1 }} Call immediately to set initial state
        const interval = setInterval(calculateTimeRemaining, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div > 
            <h1>Countdown to March 17, 2025</h1>
            <div className="timer">
                <div className="time-block">
                    <span className="time">{timeRemaining.days}</span>
                    <span className="label">Days</span>
                </div>
                <div className="time-block">
                    <span className="time">{timeRemaining.hours}</span>
                    <span className="label">Hours</span>
                </div>
                <div className="time-block">
                    <span className="time">{timeRemaining.minutes}</span>
                    <span className="label">Minutes</span>
                </div>
                <div className="time-block">
                    <span className="time">{timeRemaining.seconds}</span>
                    <span className="label">Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default function Home() {
    return (
        <div className="countdown-container">
            <Countdown />
        </div>
    );
}
