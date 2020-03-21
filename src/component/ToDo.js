import React from 'react';
import ReactDom from 'react-dom';

function ToDo() {
    const styles = {
        margin: "auto",
        width: "50%",
        border: "3px solid green",
        padding: "10px",
        backgroundColor: "#80808030",

    }
    return (
        <div style={styles}>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <p for="vehicle1"> I have a bike</p>

        </div>

    )
}
export default ToDo