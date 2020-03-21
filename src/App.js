// import React from 'react';
// // import logo from './logo.svg';
// // import './App.css';
// // import MyInfo from './component/MyInfo';
// // import Footer from './component/Footer';
// // // import Header from './component/Header';
// // import Timedatedyn from './component/Timedatedyn';
// // import Styling from './component/Styling';
// // import ToDo from './component/ToDo';
// // import ContactCard from './component/ContactCard';
// // import Joke from './component/Joke';
// // import jokeData from './component/jokeData.js';
// // import productData from './component/productData.js';
// // import Product from './component/Product'
// // import ToDos from './component/ToDos'
// // import toDosdata from './component/toDosdata.js'
// // import CondRed from './component/CondRed';


// // function App() {
// //   const jokecomp = jokeData.map(joke => 
// //     <Joke id={joke.id} question={joke.question} answer={joke.answer}/>

// //   )
// //   return (
// //     <div>
// /* <ContactCard contact = {{imgUrl : "https://yt3.ggpht.com/a-/AOh14Giy1An6FUS4-0pw86H9w_XSOGxI_K-CkIxBqrWDzg=s88-c-k-c0xffffffff-no-rj-mo", name :"Barun", profession: "Web-Developer", phoneNumber:"9123279928"}} 
// />
// <ContactCard contact = {{imgUrl : "https://lh3.googleusercontent.com/-czjyQjniZqg/W2auAvVdRTI/AAAAAAAACIE/9fhboIWUUwQfDB1exj9Tpj2LE84GHdAfQCEwYBhgL/w139-h140-p/IMG_20180318_174523.jpg", name: "Ranjan", profession: "Tester", phoneNumber: "9123279928"}}/> */
// /* {
//   jokecomp
// }
// </div>
// );
// }

// export default App; */

// // function App(){
// //   const todosDatas = toDosdata.map(todo => 

// //     <Todos toDosdata = {todo}/> 


// //     )
// //     return (
// //     <div>
// //     {todosDatas}
// //     <button onClick={()=>{alert("suscribed")}}>Suscribe</button>
// //     </div>
// //     )
// // }
// // export default App;

// // class App extends React.Component{
// //   render(){
// //     return(
// //       <div>
// //         <Header username = "Varun"/>
// //         <Greeting/>
// //       </div>
// //     )
// //   }
// // }
// // class Header extends React.Component{
// //   render(){
// //     return(
// //       <div>
// //         <h1>Hello {this.props.username}</h1>
// //       </div>
// //     )
// //   }
// // }
// // class Greeting extends React.Component{
// //   render(){
// //     const date = new Date()
// //     const hours = date.getHours();

// //     let timeoftheday;
// //     if (hours < 12) {
// //         timeoftheday = "morning"
// //     } else if (hours >= 12 && hours <= 18) {
// //         timeoftheday = "Afternoon"
// //     } else
// //         timeoftheday = "Night"
// //     return(
// //       <h1>Good {timeoftheday} the time is {hours%12}</h1>

// //     )
// //   }
// // }

// // class App extends React.Component{
// //   constructor(){
// //     super()
// //     this.state = {
// //       ans: "for office"
// //     }
// //   }
// //   render(){
// //     return(
// //       <div>
// //         <h3>
// //           Why learn react?
// //         </h3>
// //         <h4>
// //           because {this.state.ans}
// //         </h4>
// //       </div>
// //     )
// //   }
// // }

// // class App extends React.Component{
// // constructor(){
// //   super()
// //   this.state = {
// //     logedin: false 
// //   }
// // }
// // render(){
// //   let session
// //   if (this.state.logedin==true){
// //     session = "In"
// //   }
// //   else{
// //     session = "out"
// //   }
// //   return(
// //     <div>
// //       <p>
// //         You are loged {session}
// //       </p>
// //     </div>
// //   )
// // }
// // class App extends React.Component{
// //   constructor(){
// //     super()
// //     this.state = {
// //       tosdo : toDosdata
// //     }
// //   }
// //   render(){
// //     // const todata = this.state.tosdo.map(datas => <Todos tosata = {datas}/>
// //     const todosDatas = this.state.tosdo.map(todo => 

// //          <Todos toDosdata = {todo}/>
// //       )
// //     return(
// // <div>
// // {todosDatas}
// // </div>
// //     )
// //   }

// // }
// // function handleOver(){

// // }

// // function App(){
// //   return(
// //     <div>
// //       <img src = "https://yt3.ggpht.com/a-/AOh14Giy1An6FUS4-0pw86H9w_XSOGxI_K-CkIxBqrWDzg=s88-c-k-c0xffffffff-no-rj-mo" alt= "" onMouseOver={handleOver}/>
// //     </div>
// //   )
// // }

// // class App extends React.Component{
// //   constructor(){
// //     super()
// //     this.state = {
// //       count: 0
// //     }
// //     this.handleClick = this.handleClick.bind(this)
// //   }
// //   handleClick() {
// //     this.setState(previousState => {
// //       return{
// //         count: previousState.count +1
// //       }
// //     })
// //   }

// //   render(){
// //     const styles = {
// //       margin: "auto",
// //       width: "50%",
// //       border: "3px solid green",
// //       padding: "10px",
// //       backgroundColor: "#80808030",

// //   }

// //     return(
// //     <div style={styles}>
// //       <h1>{this.state.count}</h1>
// //       <button onClick={this.handleClick}>Change</button>
// //       </div>
// //     )
// //   }
// // }

// // export default App;

// // class App extends React.Component{
// //   constructor(){
// //     super()
// //     this.state = {
// //       count: 1
// //     }
// //     this.handleClick = this.handleClick.bind(this)
// //     this.handlenextClick = this.handlenextClick.bind(this)
// //   }
// //   handleClick() {
// //     this.setState(function(item){
// //       return{
// //         count:  item.count * 2
// //       }
// //     }
// //     )
// //   }
// //   handlenextClick(){
// //     this.setState(prevdata =>{
// //       return{
// //         count: prevdata.count * .5
// //       }
// //     })
// //   }
// //   render(){
// //     const styles = {
// //             margin: "auto",
// //             width: "50%",
// //             border: "3px solid green",
// //             padding: "10px",
// //             backgroundColor: "#80808030",
// //             textAlign: "center",
// //     }

// //     return(

// //       <div style = {styles}>
// //         <h1>
// //           {this.state.count}
// //         </h1>
// //         <button onClick={this.handleClick}>Multiply by 2</button>
// //         <button onClick={this.handlenextClick}>Go Back</button>
// //       </div>
// //     )
// //   }
// // }

// // class App extends React.Component {
// //   constructor() {
// //     super()
// //     this.state = {
// //       toDosdatas : toDosdata
// //     }
// //     this.handleChange = this.handleChange.bind(this)
// //   }
// //   handleChange(id){
// //     this.setState(previousValue =>{
// //       const newValue = previousValue.toDosdatas.map(value => {
// //         if (value.id ===id){
// //           value.completed = !value.completed
// //         }
// //         return value
// //         console.log("value", value)
// //       })
// //       return{
// //         toDosdatas: newValue
// //       }

// //     })
// //   }
// //   render() {

// //     const todosDatas = this.state.toDosdatas.map(todo =>

// //       <Todos key = {todo.id} toDosdata={todo} handleChange = {this.handleChange} />
// //     )
// //     return (
// //       <div>
// //         {todosDatas}
// //       </div>


// //     )
// //   }
// // }

// // class App extends React.Component{
// //   constructor(){
// //     super()
// //     this.state = {
// //       tosdo: toDosdata
// //     }
// //     this.handleChange = this.handleChange.bind(this)
// //   }
// //   handleChange(id){
// //     this.setState(oldVale => {
// //       const newValue = oldVale.tosdo.map(data => {
// //           if (data.id ===id){
// //             data.completed = !data.completed
// //           }
// //           console.log("data::", data)
// //           return data
// //       })
// //       console.log("newdata", newValue)
// //       return{

// //         toDosdatas: newValue
// //       }
// //     })

// //   }
// //   render(){
// //     const ToDo = this.state.tosdo.map(data =>
// //       <ToDos key = {data.id} toDosdata={data} handleChange = {this.handleChange}/>
// //     )
// //     return(
// //       <div>
// //       {ToDo}
// //       </div>
// //     )
// //   }
// // }

// // class App extends React.Component{
// //   constructor(){
// //     super()
// //     this.state = {
// //       isloading: true
// //     }
// //   }
// //   componentDidMount(){
// //     setTimeout(() => {
// //       this.setState({
// //         isloading: false
// //       })
// //     },1500)
// //   }
// //   render(){
// //     return(
// //       <div>
// //         {this.state.isloading ? <h1>Loading data...</h1>:
// //         <CondRed isloading={this.state.isloading}/>}
// //       </div>
// //     )
// //   }
// // }

// // class App extends React.Component{
// //   constructor(){
// //     super()
// //     this.state = {
// //       unreadMessage: [

// //       ]
// //     }
// //   }
// //   render(){
// //     return(
// //       <div>
// //         {this.state.unreadMessage.length == 0 ? <h2>No new message</h2> : <h2>You have {this.state.unreadMessage.length} unread message</h2>}
// //       </div>
// //     )
// //   }
// // }

// // class App extends React.Component{
// //   constructor(){
// //     super()
// //     this.state = {
// //       status: true

// //     }
// //     this.handleClick = this.handleClick.bind(this)
// //   }
// //   handleClick(){
// //     this.setState(oldStatus => {
// //       return{
// //         status: !oldStatus.status
// //       }
// //     })
// //   }



// //   render(){
// //     let buttonText = this.state.status ? "log out": "log in"
// //       return(
// //         <div>
// //           <h1>{this.state.status}</h1>

// //       <button onClick ={this.handleClick}>{buttonText}</button>
// //         </div>
// //       )
// //   }

// // }
// // 


// // class App extends React.Component {
// //   constructor() {
// //     super()
// //     this.state = {
// //       firstName: "",
// //       lastName: "",
// //       query: "",
// //       haveFever: "",
// //       favcolor: "blue"
// //     }
// //     this.handlechange = this.handlechange.bind(this)
// //   }
// //   handlechange(e) {
// //     const { name, value, type, checked } = e.target
// //     type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
// //   }
// //   render() {
// //     return (
// //       <div>
// //         <form>
// //           <input type="text" value={this.state.firstName}
// //             name="firstName" placeholder="first name"
// //             onChange={this.handlechange} /><br />


// //           <input type="text" value={this.state.lastName}
// //             name="lastName" placeholder="last name"
// //             onChange={this.handlechange} /><br
// //           />

// //           <textarea value={this.state.query}
// //             name="query" placeholder="your query"
// //             onChange={this.handlechange}
// //           /><br />

// //           <label>
// //             <input type="checkbox" name="haveFever"
// //               checked={this.state.haveFever}
// //               onChange={this.handlechange}
// //             />Have Fever?
// //           </label><br />
// //           <label>favoirate game</label>
// //           <select value={this.state.favcolor}
// //             name="favcolor"
// //             onChange={this.handlechange}>
// //             <option value="blue">blue</option>
// //             <option value="red">red</option>
// //             <option value="green">green</option>
// //             <option value="orange">oranges</option>
// //           </select>





// //           <h1>you are {this.state.firstName} {this.state.lastName}</h1>
// //           <p>you have doubt about {this.state.query}</p>
// //           <p>Do yo have like {this.state.favcolor}</p>
// //         </form>
// //       </div>
// //     )

// //   }
// // }

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       firstName: "",
//       lastName: "",
//       Age: "",
//       gender: "",
//       location: "",
//       food: "",
//       medical: false
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(event) {
//     const { name, value, type, checked } = event.target
//     type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })

//   }
//   handleSubmit(event){
//     alert("first name"+ this.state.firstName);
//     event.preventDefault();
//   }


//   render() {
//     const styles = {
//       margin: "auto",
//       width: "50%",
//       border: "3px solid green",
//       padding: "10px",
//       backgroundColor: "#80808030",

//     }
//     return (
//       <form style={styles} onSubmit={this.handleSubmit}>
//         <input type="text" value={this.state.firstName} name="firstName" placeholder="first name"
//           onChange={this.handleChange} />

//         <br />
//         <input type="text" value={this.state.lastName} name="lastName" placeholder="last name" onChange={this.handleChange} />
//         <br />
//         <input type="number" name="age" value={this.state.age} placeholder="Age" onChange={this.handleChange} />
//         <br />
//         <label><input type="radio" name="gender" onChange={this.handleChange} value="male" checked={this.state.gender === "male"} />male</label><br />
//         <label><input type="radio" name="gender" onChange={this.handleChange} value="female" checked={this.state.gender === "female"} />female</label><br />
//         <textarea type="text" name="location" onChange={this.handleChange} value={this.state.location} placeholder="your location"></textarea><br />
//         <select name="food" value={this.state.food} onChange={this.handleChange}>
//           <option value="veg">Veg</option>
//           <option value="non-veg">Non-Veg</option>
//           <option value="vegan">Vegan</option>
//         </select>
//         <br/>
//         <label><input type = "checkbox" value= "medical attention" name="medical" checked={this.state.medical} onChange={this.handleChange}></input>Medical attention required</label><br/>
//         <button type="submit">submit</button>
// <hr></hr>
// <div>
//     <h2>first name : {this.state.firstName}</h2>
//     <h2>last name : {this.state.lastName}</h2>
//     <h2>Age : {this.state.age}</h2>
//     <h2>gender : {this.state.gender}</h2>
//     <h2>food : {this.state.food}</h2>
//     <h2>Medical attention required: {this.state.medical ? "yes": "No"}</h2>
// </div>
//       </form>
//     )

//   }
// }

// export default App

import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "",
      food: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    event.preventDefault();
    alert(this.state.firstName + "have been added" +
          this.state.lastName + "added")

    
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
    const styles = {
      margin: "auto",
      width: "40%",
      padding: "10px",
      backgroundColor: "#80808030",
    }
    const inputStyle = {
      width: "75%",
      padding: "15px 20px",
      margin: "15px 10px",
      display: "inline-block",
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxSizing: "border-box",
    }
    const sumbitStyle = {

      width: "45%",
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "14px 20px",
      margin: "8px 0",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      margin: "0 28%"

    }

    return (
      <div>
        <form style={styles}  onSubmit={this.handleSubmit}>
          <input style={inputStyle} type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name" />

          <input style={inputStyle} type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name" />

          <input style={inputStyle} type="text"
            name="age" value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age" /><br />

          <label>Male</label>
          <input type="radio" name="gender"
            value="male" onChange={this.handleChange}
            checked={this.state.gender === "male"} />
          <br />
          <label>Female</label>
          <input type="radio" name="gender"
            value="female" onChange={this.handleChange}
            checked={this.state.gender === "female"} />
          <br />


          <label>Chose Destination</label>
          <select style={inputStyle} name="location"
            value={this.state.location} onChange={this.handleChange}>
            <option disabled >Where you want to go</option>
            <option value="India">India</option>
            <option value="pakistan">Pakistan</option>
            <option value="Nepal">Nepal</option>
            <option value="Srilanka">Sri Lanka</option>
          </select><br />

          <label> Vegetarian</label>
          <input type="checkbox" value="Vegetarian" name = "food" onChange={this.handleChange}
            checked={this.state.food} /><br />
          <label>kosher</label>
          <input type="checkbox" value="Kosher" name = "sood" onChange={this.handleChange}
             /><br />
          <label>lactose free</label>
          <input type="checkbox" value="lactose" name = "lood" onChange={this.handleChange}
             /><br />
             <button style = {sumbitStyle}  onSubmit = {this.handleSubmit}>Submit</button>
        </form>
        

    <p>{this.state.firstName}</p> 
    <p>{this.state.lastName}</p> 
    <p>{this.state.age}</p> 
    <p>{this.state.gender}</p>
    <p>{this.state.location}</p> 
    <p>{this.state.food}</p>

      </div>
    )
  }
}

export default App