import React from 'react';
import { Link } from "react-router-dom";
import "./VendingMachine.css";

class VendingMachine extends React.Component {
    render() {
        let spinachStyle = {
            color: "green",
            fontSize: "30px",
            position: "relative",
            left: "750px",
            top: "500px"

        }
        let BobaStyle = {
            color: "black",
            fontSize: "30px",
            position: "relative",
            left: "755px",
            top: "500px"

        }
        let oStyle = {
            color: "black",
            fontSize: "30px",
            position: "relative",
            left: "720px",
            top: "410px"

        }
        return (

            <body className="vend" background="https://cnn.it/2OoO4dt">
                <div >

                    <h1>Welcome to our Vending Machine!</h1>

                    <p><Link to="/spinach"> <i className="fas fa-leaf" style={spinachStyle}> </i> </Link></p>
                    <p><Link to="/Boba"> <i class="fas fa-glass-martini-alt" style={BobaStyle}></i> </Link></p>
                    <p><Link to="/Olives"> <i class="fas fa-cookie"style={oStyle}></i> </Link></p>

                </div>
            </body>
           


        )
    }
}

export default VendingMachine;