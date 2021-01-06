import React from 'react'


const Score=(props)=>{
    return(
        <div>
            {props.scores.map((scores,idx)=>
        <div>
           <p>Date: {scores.date}</p>
         <p>{scores.score} </p>          
        </div>
              )}      
           
       </div>
         )}   
          
    

export default Score;