import LoginForm from "./LoginForm";
import UserPage from "../../User/Components/UserPage"

function checkToken(token) {
    // apply logic to validate token
    // for now token just has to be defined
    if (token) {
        return true;
    } else {
        return false;
    }
}

export default function LoginChecker(props) {
    // if token exists return component with user data
    // else return login form
    if (checkToken(props.token)) {
        return <UserPage/>;
    } else {
        return <LoginForm/>;
    }
}
