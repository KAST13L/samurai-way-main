import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'

export const Clock = () => {

    const [date, setDate] = useState(new Date())

    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date())
        },1000)
    }, [])

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const secondsStyle = {
        transform: `rotate(${seconds * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${minutes * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${hours * 30}deg)`
    };

    return (
        <div className={s.clock}>
            <div className={s.analogClock}>
                <div className={`${s.dial} ${s.seconds}`} style={secondsStyle}/>
                <div className={`${s.dial} ${s.minutes}`} style={minutesStyle}/>
                <div className={`${s.dial} ${s.hours}`} style={hoursStyle}/>
            </div>
            <div>
                {hours < 10 ? `0${hours}`: hours}:
                {minutes < 10 ? `0${minutes}`: minutes}:
                {seconds < 10 ? `0${seconds}`: seconds}
            </div>
        </div>
    );
};