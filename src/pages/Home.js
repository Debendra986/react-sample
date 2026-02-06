import { useEffect, useState } from "react";
import Counter from "./Counter";

function Home() {    

    useEffect(() => {
        document.title = "Home Page";
    },[]);
       
    return (
        <>
            <h2>Welcome to Home Page</h2>
            <Counter />            
        </>
    );
}

export default Home;
