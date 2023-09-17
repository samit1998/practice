import React , {useState} from "react";

const Form1 = () => {
    const [name, setName] = useState('');
    //     const [email, setEmail]= useState('')

    function updateName(e) {
        // console.log(event.target.value)
        setName(e.target.value)
    }
       return (  <div>
            {/*<h2>{name}</h2>*/} 
                <input type="text"  placeholder="Enter your Name" onChange={updateName}/>
                    {/*onChange={(e) =>{setName(e.target.value)}}/>*/}
                        {/*<label htmlFor="">Name</label><br />*/}
                            {/*<p></p>*/}
                                <button onClick={(e)=>{setName(e.target.value)}} >Submit</button>
                                <p>{name}</p>
                                </div>);
    
}

export default Form1