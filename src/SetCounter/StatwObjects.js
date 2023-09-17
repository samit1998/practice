import React , { useState } from "react";


const StawObjects = () => {
    const [coins , setCoins] = useState({gold:0 , silver:0 , broze:0})
    // const [count , setCount] = useState(0)
function increaseGold() {
    setCoins({...coins , gold:coins.gold+1})
}
function increaseSilver() {
    setCoins({...coins , silver:coins.silver+1})
}
function increaseBronze() {
    setCoins({...coins , broze:coins.broze+1})
}

return(
    <div>
        <h1>Gold = {coins.gold} silver = {coins.silver} broze = {coins.broze}</h1>
        <button onClick={increaseGold}>Increase</button>
        <button onClick={increaseSilver}>Increase</button>
        <button onClick={increaseBronze}>Increase</button>
    </div>
)



}

export default StawObjects