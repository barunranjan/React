import React from 'react'
function Timedatedyn() {
    const date = new Date()
    const hours = date.getHours();

    let timeoftheday;
    if (hours < 12) {
        timeoftheday = "morning"
    } else if (hours >= 12 && hours <= 18) {
        timeoftheday = "Afternoon"
    } else
        timeoftheday = "Night"

    return (
    <h1>Good {timeoftheday} the time is {hours%12}</h1>
    )
}
export default Timedatedyn