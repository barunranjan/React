// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(<div><ul><li>1.Java</li><li>2.Python</li><li>3.C++</li></ul></div>, document.getElementById("root"))


// import React from 'react';
// import ReactDOM from 'react-dom';

// function MyApp() {
//     return (
//         <ol>
//             <li>
//                 Python
//             </li>
//             <li>
//                 C++
//             </li>
//             <li>
//                 Java
//             </li>
//         </ol>
//     )
// }
// ReactDOM.render(<MyApp />, document.getElementById("root"))

// import React from 'react';
// import ReactDOM from 'react-dom';

// function MyInfo(){
//     return(
//         <div>
//             <h1>Barun Ranjan</h1>
//             <p>Hi, I am Barun, a web developer who is now learning react.js to enhance my skill</p>
//             <ol>
//                 <li>
//                     Muzaffarpur
//                 </li>
//                 <li>
//                     Bihar
//                 </li>
//                 <li>
//                     Banglore
//                 </li>
//             </ol>
//         </div>    

//     )
// }
// ReactDOM.render( <MyInfo/>, document.getElementById("root"))




// import React from 'react';
// import ReactDOM from 'react-dom';
// import MyInfo from './component/MyInfo'

// ReactDOM.render( <MyInfo/>, document.getElementById('root'))


import React from 'react';


function MyInfo(){
    return(
        <div className = "myinfo">
            <h1>Barun Ranjan</h1>
            <p>Hi, I am Barun, a web developer who is now learning react.js to enhance my skill</p>
            <ul className="listItem">
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
export default MyInfo