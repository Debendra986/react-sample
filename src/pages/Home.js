import { useEffect, useState } from "react";
import Counter from "./Counter";

function Home() {    

    useEffect(() => {
        document.title = "Home Page";
    },[]);

    const reversr = (str) =>{
        return str.split("").reverse().join("");
    };

    const unique = (arr) =>{ return [...new Set(arr)].join(','); };
       
    return (
        <>
            <h2>Welcome to Home Page</h2>
            <Counter />   
            <p>Reversed String: {reversr("Hello World")}</p>         
            <p>Unique Elements: {unique([1,2,2,3,4,4,5])}</p>         
        </>
    );
}

export default Home;
