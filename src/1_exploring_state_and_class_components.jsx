// Task 1 Code Correction

import { Component } from "react";
import './styles.css';
// Added relevant imports


class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: this.props.initialName };

        this.changeName = this.changeName.bind(this)
        // Added binding statement
    }
    // Changed value of object to stateful component from string


    // Corrected function uses setState method and key:value pair instead of assigning string
    changeName() {
        this.setState({ name: "Charlie" });
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default UserProfile