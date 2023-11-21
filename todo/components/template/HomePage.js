import { useEffect, useState } from "react"


const HomePage = () => {
    const[todos,setTodos]=useState([]);

    const fetchTodos = async ()=>{
        const res= await fetch("/api/todos");
        const data= await res.json();
        if(data.status === "success") setTodos(data.data.todos);
    }
    useEffect(()=>{
        fetchTodos();
    },[])

  return (
    <div className="home-page">
      <div className="home-page--todo"><p>Todo</p></div>
      <div className="home-page--inProgress"><p>Todo</p></div>
      <div className="home-page--review"><p>Review</p></div>
      <div className="home-page--done"><p>Done</p></div>
    </div>
  )
}

export default HomePage
