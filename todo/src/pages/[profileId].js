import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import EditPage from '../../components/template/EditPage';

const Index = () => {

  const [data,setData]=useState(null);
  const router=useRouter();
  const{query:{profileId},isReady}=router;

  useEffect(()=>{
    if(isReady){
      fetch("/api/profile").then(res=> res.json()).then(data=> setData(data.data))
    }
  },[isReady])
 if(isReady) return <EditPage data={data} id={profileId}  />
}

export default Index
