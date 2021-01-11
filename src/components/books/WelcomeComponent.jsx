import { Component } from 'react';
import {Link} from 'react-router-dom';

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome !!</h1>
                <div className="container">
                    Welcome to Book Store {this.props.match.params.name}. Please check <Link to="/listBooks">Books</Link> here.
                </div>
            </>
        )
    }
}

export default WelcomeComponent