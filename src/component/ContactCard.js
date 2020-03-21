import React from 'react'

function ContactCard(props) {
    console.log(props)
    const styles = {
        width: "20%",
        margin: "auto",
    }
    return (
       

        <div>
            <img src={props.contact.imgUrl} style={styles}  />
            <div class="container">
                <h4><b>{props.contact.name}</b></h4>
                <p>{props.contact.profession}</p>
                <p>Phone Number: {props.contact.phoneNumber}</p>
            </div>
        </div>

    )
}
export default ContactCard