import React from 'react';
// import ReactDom from 'react-dom';
function Header(props){
    return(
        <div className = "header">
            <h1>
                <b>
                    This is header of {props.name} 
                </b>
            </h1>
        </div>
    )
}
export default Header;