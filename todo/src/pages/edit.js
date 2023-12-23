import React, { useState } from 'react'
import ProfileForm from '../../components/module/ProfileForm'
import connectDB from '../../utils/connectDB'
import { getServerSession } from 'next-auth';
import User from '../../model/User';
import Profile from '../../model/Profile';
import { useRouter } from 'next/navigation';

const editPage = async( {params:{profileId}}) => {


  await connectDB();

  const user =await User.findOne({_id :profileId })
  console.log()
  // const [name,setName]=useState("");
  // const [lastName,setLastName]=useState("")
  // const router=useRouter()
 

// const editHandler=async()=>{
//   const res= await fetch(`/api/profileId/${user._id}`,{
//     method:"PATCH",
//     body:JSON.stringify({name,lastName}),
//     headers :{"Content-Type" : "application/json"}
//   })
//   const result=await res.json()
//  if(result.status=== "success") router.push("/profile")
// }  

  return (
    <ProfileForm  data={user}/>
 
    // <div className="profile-form__input">
    // <div>
    //   <label htmlFor="name">Name</label>
    //   <input
    //     type="text"
    //     id="name"
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //   />
    // </div>
    // <div>
    //   <label htmlFor="lastName">Last Name</label>
    //   <input
    //     type="text"
    //     id="lastName"
    //     value={lastName}
    //     onChange={(e) => setLastName(e.target.value)}
    //   />
    // </div>
    // <button onClick={editHandler}>Submit</button>
    // </div>  
      );
    };
    
  

export default editPage

