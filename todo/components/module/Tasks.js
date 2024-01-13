import { RiMastodonLine } from "react-icons/ri";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { MdModeEdit } from "react-icons/md";
import { useRouter } from "next/router";
import { useState } from "react";

const Tasks = ({ data, next, back, fetchTodos }) => {
  const [todos, setTodos] = useState(data);

  const router = useRouter();
  const changeHandler = async (id, status) => {
    const res = await fetch("/api/todos", {
      method: "PATCH",
      body: JSON.stringify({ id, status }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.status === "success") fetchTodos();
  };

  const deleteHandler = async (id) => {
  
    const res = await fetch("/api/todos", {
       method: "DELETE" ,
       body: JSON.stringify({id}),
        headers: { "Content-Type": "application/json" },
    });
    const resu = await res.json();
    if (resu.status === "success") console.log("deleteeeee boooo");
  };

  return (
    <div className="tasks">
      {data?.map((item) => (
        <div key={item._id} className="tasks__card">
          <MdModeEdit />
          <button onClick={()=> deleteHandler(item._id)}>Delete</button>
          <span className={item.status}></span>
          <RiMastodonLine />
          <h4>{item.title}</h4>
          <h5>{item.description}</h5>
          <div>
            {back ? (
              <button
                className="button-back"
                onClick={() => changeHandler(item._id, back)}
              >
                <BiLeftArrow /> Back
              </button>
            ) : null}
            {next ? (
              <button
                className="button-next"
                onClick={() => changeHandler(item._id, next)}
              >
                Next
                <BiRightArrow />
              </button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
