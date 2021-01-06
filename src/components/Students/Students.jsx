import React from 'react';
import Score from '../Scores/Scores'

const Student =(student)=>{
   return(     
         <div>
             <h1>{student.name}</h1>
             <p>{student.bio}</p>
            <Score scores={student.scores}/>
                
                </div> 
        )}
    
  



export default Student;