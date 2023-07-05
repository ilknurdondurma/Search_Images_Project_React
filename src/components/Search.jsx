import { useState } from "react";

function Search({search}) {
    const [value , setValue]=useState("");


    const HandlerSubmitChild=(props)=>{
        props.preventDefault(); 
        search(value);       
    };
    const HandleChange=(event)=>{
        setValue( event.target.value);
     };
    
    return (  
        <div>
            <form onSubmit={HandlerSubmitChild}>
                <label className="form-element" > Ne Arıyorsunuz ? </label>
                <input className="form-element" placeholder="Ara..." value={value} onChange={HandleChange}/>
            </form>
        </div>
    );
}

export default Search;