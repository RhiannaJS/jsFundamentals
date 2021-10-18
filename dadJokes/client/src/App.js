import React, {useState, useEffect} from "react";
import "./App.css";
import Auth from "./components/Auth/Auth"
import Home from "./components/Home/Home"


function App () {
    const [token, setToken] = useState("")

    function tokenStorage(newToken){
        setToken(newToken)
        localStorage.setItem("token", newToken);
    }   

    // useEffect(() =>{
    //     console.log("The token has changed!")
    // }, [token])

    function gatherToken() {
        if(localStorage.getItem("token") && localStorage.getItem("token") !== ""){
            setToken(localStorage.getItem("token"))
    }
}

    useEffect(gatherToken, [])

    function logout() {
        localStorage.removeItem("token");
        setToken("");
    }

    return(
        <div>
            {token}
        <h1>App Component</h1>
        
        {token !== "" ? <Home logout={logout} /> : <Auth setToken={tokenStorage}/>}
        </div>
    )
};

export default App;