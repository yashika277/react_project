import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        
            <div className="app-container">
                <div className="counter-container">
                <h1 className="heading">Counter App</h1>
                <div className="counter">
                    <span className="count">{count}</span>
                    <br/>
                    <button className="btn" onClick={decrement}>Decrement</button>
                    <button className="btn" onClick={increment}>increment</button>
                </div>
                </div>
            </div>
    )
}

export default Counter
