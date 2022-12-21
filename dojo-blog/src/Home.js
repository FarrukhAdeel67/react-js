const Home = () => {
    const handleClick = (event)=>{
            console.log("React Developer", event.target);
    }
    const clickAgain = (e,name)=>{
        console.log("Farrukh " + name, e.target);
    }
    return ( 
        <div className="home">
            <h2>HomgPage</h2>
            <button onClick={handleClick}>Click Here</button>
            <button onClick={(e)=>clickAgain(e,"Adeel")}>Click Again</button>
        </div>
     );
}
 
export default Home;