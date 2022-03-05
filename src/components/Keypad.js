// Code Keypad Component Here
import React, {Component} from "react";


export default class Keypad extends Component {
    render(){
        return (
            <div>
                Type in password <input onKeyUp={console.log("Entering Password...")} />
            </div>
        )
    }
}