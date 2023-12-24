import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'


const EditPage = ({data}) => {


 const [name, setName]=useState("");
 const[lastName,setLastName]=useState("");
const router=useRouter()

const editHandler=async()=>{
    const res= await fetch("/api/profile/",{
        method:"PATCH",
        body:JSON.stringify({name,lastName}),
        headers:{'Content-Type' :'application/json'}
    })
     const result=await res.json();
     if(result.status === "success") router.push("/profile")
}
   
  return (
    <div className="profile-form__input">
        
         {
            data ?  (<> <div>
              <h4>Your Email : {data.email}</h4>
              <p>Please update your profile</p>
              <br/>
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
           
          <button onClick={editHandler}>Edit</button> </>) : <h3>Loading ...</h3>
         }
    </div>
  )
}

export default EditPage
