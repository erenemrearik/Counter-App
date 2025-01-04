import React, { useState, useEffect } from "react";
import { FcSynchronize } from "react-icons/fc";

function Counter(){
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    const resetCound = () => {
        setCount(0);
    }

    const decrementCount = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        if (count < 0) {
            document.getElementById("container").style.backgroundColor = "#af5d5d";
            document.getElementById("counter").style.color = "white";
        } else if (count > 0) {
            document.getElementById("container").style.backgroundColor = "#5daf5d";
            document.getElementById("counter").style.color = "white";
        } else {
            document.getElementById("container").style.backgroundColor = "#ababab";
            document.getElementById("counter").style.color = "#333";
        }
    }, [count]);

    return(
    <>
        <header>
            <h1><FcSynchronize /> Counter App</h1>
        </header>
        <body>
            <div id="container">
                <div id="counter">
                    <p>{count}</p>
                </div>

                <div className="buttons">
                    <button className='increment-button' onClick={incrementCount}>Increment</button>
                    <button className='reset-button' onClick={resetCound}>Reset</button>
                    <button className='decrement-button' onClick={decrementCount}>Decrement</button>
                </div>
            </div>
        </body>
        <footer>
            <img src="./src/assets/react.svg" alt="React Logo" />
            <p>Counter App using React Hooks</p>
        </footer>
    </>
    );
}

export default Counter;