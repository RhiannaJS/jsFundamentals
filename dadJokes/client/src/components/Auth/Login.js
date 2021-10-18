import {useState} from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function loginUser(props) {
        fetch("http://localhost:3000/user/login", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
                email,
                password
        }
        )
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            props.setToken(json.sessionToken)
        })
        .catch (e => console.log(e))
    }

    return(
        <div>
            <h3>Login</h3>
            <form>
            <input placeholder="email" type="email" value={email} onChange={e => setEmail(e.targe.value)}/>
            <br />
            <input placeholder="password" type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
            <br/>
            <button onClick={e =>{e.preventDefault(); loginUser()}}>Submit</button>
            <br />
            </form>
        </div>
    )
};

export default Login;