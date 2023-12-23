import React, { useState } from 'react'


const EditPage = ({data,id}) => {
 console.log({data})

 const [name, setName]=useState("");
 const[lastName,setLastName]=("");

const editHandler=async()=>{
    const res= await fetch("/api/peofileId/",{
        method:"PATCH",
        body:JSON.stringify({name,lastName}),
        headers:{'Content-Type' :'application/json'}
    })
     const result=await res.json();
     console.log(result)
}
   
  return (
    <div>
        
         {
            data ?  (<> <div>
            <label htmlFor="name"> Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
      <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div> 
           <span>{data.email}</span>
          <button onClick={editHandler}>Submit</button> </>) : "Loading"
         }
    </div>
  )
}

export default EditPage
