import { useState, useRef, useEffect } from "react"; 

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const timeRef = useRef(0);

    
    useEffect(() => {
        let interval = null;

        if(isActive) {
            interval = setInterval(() => {
                setTime((prev) => prev + 1)
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval)
    }, [isActive])
    let timer;

    const endTimer = () => {
        console.log("stoping timer");
        // timer.clearInterval();
        setIsActive(false);
        setIsComplete(true);
        setOpenModal(true);
    }

    // const startTimer = () => {
    //     console.log("Starting timer")
    //     setIsActive(true);
    //     timer = setInterval(() => {
    //         setTime((prev) => {
    //             console.log(prev)
    //             prev = prev + 1
    //         })}, 1000);
    //     timeRef.current.value = time;
    // }

    return (
        <div className="time-container">

            <h1 className="time">{time}</h1>
            <div className="timer-btn-container">
                { !isActive ?
                    <button className="start" onClick={() => setIsActive(true)}>Start</button>
                :
                    <>
                        <button className="pause" onClick={() => setIsPaused(true)}>Pause</button>
                        <button className="end" onClick={endTimer}>Stop</button>
                    </>
                }
            </div>
        </div>
    )
}


export default Timer;