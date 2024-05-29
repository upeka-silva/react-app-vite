import './App.css'
import React, {useState} from "react";

 const Counter:React.FC =()=>{


      const[count,setCount]=useState<number>(0)

     return(

         <>
             <p>count : {count}</p>
             <button onClick={()=>setCount(count+1)}> Increment</button>
             <button onClick={()=>setCount(count-1)}> Decrement</button>


         </>
     )


 }




export default Counter
