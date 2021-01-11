import { Component } from 'react';
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {

    constructor(props) {

        super(props)

        this.state = {
            username: 'dummy',
            password: '',
            isLoginSuccessful: false,
            invalidCredentials: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    handleLogin() {
        if (this.state.username === 'dummy' && this.state.password === '1234') {
            AuthenticationService.registerLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)

            // this.setState({
            //     isLoginSuccessful: true,
            //     invalidCredentials: false
            // })
        }
        else {
            this.setState({
                isLoginSuccessful: false,
                invalidCredentials: true
            })
        }

    }

    render() {
        return (
            <div>
                <h1>Login Here...</h1>
                <div className="container">
                    {/* <ShowSuccessfulLoginMessage isLoginSuccessful={this.state.isLoginSuccessful}></ShowSuccessfulLoginMessage> */}
                    {/* <ShowInvalidCredentialsMessage invalidCredentials={this.state.invalidCredentials}></ShowInvalidCredentialsMessage> */}

                    {this.state.invalidCredentials && <div className="alert alert-warning"><span>Invalid Credentials, please enter correct username/password.</span></div>}
                    {/* {this.state.isLoginSuccessful && <div>Login Successful !!</div>} */}

                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent