import React from 'react';

function Styling() {
    const styles = {
    color:"red", 
    backgroundColor: "gold",
    fontSize: 30,
}

const stri = {
    name : "React Js",
    type : "JS Library",
    usedFor : "Front End Development",
    help : "User Experience"
}
    return (
        <div style={styles}>
            <h1>React Js</h1>
    <p>Hi, I am {`${stri.name}`}, a {`${stri.type}`} who is now used for {`${stri.usedFor}`} for better {`${stri.help}`}</p>
            <ul>
                <li>
                    Muzaffarpur
                </li>
                <li>
                    Bihar
                </li>
                <li>
                    Banglore
                </li>
                <li>
                    Karnataka
                </li>
            </ul>
        </div>
    )
}
export default Styling