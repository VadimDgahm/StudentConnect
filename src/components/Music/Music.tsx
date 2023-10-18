import React, {useEffect, useState} from 'react';
import './Music.module.css';
import Prealoder from '../Prealoder/Prealoder';
type MusicPropsType = {

}
const Music = () => {
    const [numberDate, setDate] = useState(new Date())

    useEffect(() => {
        let interval = setInterval(()=>{
            setDate(new Date())
        }, 1000)
        return () => clearInterval(interval)
    },[])

    let numbRedactor = (num: number) => num < 10 ? `0${num}`: num

    let date = `${numbRedactor(numberDate.getHours())}:${numbRedactor(numberDate.getMinutes())}:${numbRedactor(numberDate.getSeconds())}`
    return (
        <div >
            {numberDate ? date  : <Prealoder/>}
        </div>
    );
}

export default Music;
