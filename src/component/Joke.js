import React from 'react'
import Jsxplusjs from './Jsxplusjs'
import jokeData from './jokeData'

function Joke(props) {
    return (
        <div>
            <h1>
                <b style = {{display: props.jokeData.question ? "block": "none"  }}>
                    Question: {props.jokeData.question}

                 </b>
            </h1> 
            <h3 style={{color: props.question ? "black" : "green" }}>
                    Answer: {props.jokeData.answer}
            </h3>   
            
        </div>
    )
}
export default Joke