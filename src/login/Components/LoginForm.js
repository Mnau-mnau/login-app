import { Component } from "react";

class LoginForm extends Component {
    constructor(props){
        super(props);

        // event handlers
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);

        this.state = {
            user_name: '',
            user_password: '',
        };
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    submit(event) {
        event.preventDefault();
    }

    formField = (name, label, type) => {
        return (
            <div>
                <label>
                    {label}
                </label>
                <input
                    id={name}
                    type={type}
                    name={name}
                    onChange={e => this.handleChange(e)}
                />
            </div>
        );
    }
        
    render() {
        return (
            <div className="dla-form">
                <form onSubmit={e => this.submit(e)}>
                    <legend>Log in to demo application</legend>
                    {this.formField("user_name", "User name", "text")}
                    {this.formField("user_password", "Password", "password")}
                    <input type="submit"  value="Submit"/>
                </form>
            </div>
        );
    }
}

// here I need to add state change actions => aka submit form 
// and await fake server response

export default LoginForm;
