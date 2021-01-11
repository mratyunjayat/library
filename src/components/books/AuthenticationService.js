class AuthenticationService {

    registerLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
    }

    handleLogout() {
        sessionStorage.clear();
    }

    isUserLoggedIn() {
        
        let loggedInUser = sessionStorage.getItem('authenticatedUser')

        if(loggedInUser===null) {
            return false
        }
        return true
    }
}

export default new AuthenticationService()