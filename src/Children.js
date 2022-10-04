import React, { useEffect, useState } from "react";

export default function Children({handleClickChildren}){
    const [time, setTime] = useState(1);
    const [sentence, setSentense] = useState("I was update from my child " + time + " time")

    useEffect(() => {
        setSentense("I was update from my child " + time + " time");
    }, [time])

    function handleClick(event){
        setTime(time + 1);
        handleClickChildren(event.target.name);
    }

    return (
        <>
            <button name={sentence} onClick={handleClick}>Change Parent Value</button>
        </>
    );
};