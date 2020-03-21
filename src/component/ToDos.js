import React from 'react'
import toDosdata from './toDosdata'

function ToDos(props){
    // console.log("props", props)
    const styles = {
        margin: "auto",
        width: "50%",
        border: "3px solid green",
        padding: "10px",
        backgroundColor: "#80808030",

    }
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"

    }
    return(
        <div style= {styles}>
            <input type="checkbox" id={props.toDosdata.id} name="vehicle1" checked={props.toDosdata.completed} onChange = {() => props.handleChange(props.toDosdata.id)}></input>
            <p style = {props.toDosdata.completed ? completedStyle: null}>{props.toDosdata.text}</p>
        </div>
    )
}
export default ToDos