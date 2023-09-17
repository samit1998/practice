import React , { useState } from "react";
import { FaPlus,FaMinus } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

const Counter = () => {
    const [count, setCount] = useState(0);

    return(
        <div className="container">
        <div className="setCounter">
            <h1>{ count }</h1><br/>
            <div className="count">
            <button onClick={()=>setCount(count+1)}><FaPlus/></button>
            <button onClick={() => count>1 ? setCount(count-1) : "" }><FaMinus/></button>
            <button onClick={()=>setCount(0 )}><TfiReload/></button>
            </div>
        </div>
    </div>
    )
}


export default Counter;