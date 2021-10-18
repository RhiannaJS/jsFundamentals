

const Home = (props) => {
         
    return(
        <div>
            <h1>Welcome Home!</h1>
            <button onClick={props.logout}>Logout</button>
        </div>
    )
}

export default Home;