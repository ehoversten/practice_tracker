import { useState, useRef, useEffect } from "react"; 

const Timer = () => {
    const [time, setTime] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const timeRef = useRef(0);

    
    useEffect(() => {
        let interval = null;
        
        // update Hours
        if(minutes == 60) {
            console.log("increment hours")
            setHours(prev => prev + 1);
            setMinutes(0);
        }
        // update Minutes
        if(seconds == 60) {
            console.log("increment minutes")
            setMinutes(prev => prev + 1);
            setSeconds(0);
        }

        if(isActive && isPaused === false) {
            interval = setInterval(() => {
                
                const secondCounter = time % 60;
                const minuteCounter = Math.floor(time / 60);
                
                console.log(secondCounter);
                
                const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
                const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
                
                setSeconds(computedSecond);
                setMinutes(computedMinute);
                
                setTime((prev) => prev + 1)

                // update Seconds
                setSeconds((prev) => prev + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        // Why do we need this(?)
        return () => clearInterval(interval)
    }, [isActive, isPaused])
    let timer;

    const endTimer = () => {
        console.log("stoping timer");
        // timer.clearInterval();
        setIsActive(false);
        setIsComplete(true);
        setOpenModal(true);
    }
    
    const startTimer = () => {
        console.log("Starting timer")
        if(time > 0) setTime(0);
        setSeconds(0);
        setIsActive(true);

    }

    return (
        <div className="time-container">

            <h1 className="time">{time}</h1>
            <h1 className="time"><span id="min">{minutes}</span><span id="sec">{seconds}</span></h1>
            <div className="timer-btn-container">
                { !isActive ?
                    <button className="start" onClick={startTimer}>Start</button>
                :
                    <>
                        <button className="pause" onClick={() => setIsPaused((prev) => !prev )}>Pause</button>
                        <button className="end" onClick={endTimer}>Stop</button>
                    </>
                }
            </div>
        </div>
    )
}


export default Timer;