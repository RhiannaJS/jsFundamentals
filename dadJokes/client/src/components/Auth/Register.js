import {useState} from "react";

function Register() {
    let [email, setEmail] = useState("");
    let [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function registerUser() {
        fetch("http://localhost:3000/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
             user:{
                email,
                username,
                password
            }  
            })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })
        .catch (e => console.log(e));
    }

    return(
        <div>
            <h3>Register</h3>
            <form>  
            <input placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <br />
            <input placeholder="username" type="text" value={username} onChange={e => setUsername(e.target.value)}/>
            <br />
            <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <br />
            <button onClick={e =>{e.preventDefault(); registerUser()}}>Submit</button>
            </form>
           
        </div>
    )
};

export default Register;

// TO DO
/*
 - FORM/INPUT WHERE USERS CAN ENTER INFORMATION
    - STORE INFORMATION IN VARIABLES
    - EMAIL, USERNAME, PASSWORD

 - SEND IT TO THE DATABASE, USING AN API THROUGH FETCH?
*/