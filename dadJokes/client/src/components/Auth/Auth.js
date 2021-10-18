import Register from "./Register";
import Login from "./Login"
import {useState} from "react";

function Auth(props) {
    // const [register, setRegister] = useState(false);
    const [login, setLogin] = useState(false);


    return(
        <div>
           
            {/* Calling Register Component onto the page */}
            {
                login ? <Login setToken={props.setToken} /> : <Register />
            }
            <button onClick={() => setLogin(!login)}>
                {login ? "Register" : "Login"}
            </button>
            {/* <Register /> */}
            <Login />
        </div>
    )
}

export default Auth;