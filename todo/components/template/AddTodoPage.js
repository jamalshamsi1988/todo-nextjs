import { useState } from "react"
import {GrAddCircle} from "react-icons/gr"
import {BsAlignStart} from "react-icons/bs"
import {FiSettings} from "react-icons/fi"
import {AiOutLineFileSearch} from "react-icons/ai"
import {MdDoneAll} from "react-icons/md"
import RadioButton from "../element/RadioButton"



const AddTodoPage = () => {
    const [title , setTitle]=useState("");
    const [status , setStatus] = useState("todo");

  return (
    <div className="add-form">
       
        <h2>  <GrAddCircle />Add New Todo</h2>
        <div className="add-form__input">
            <div className="add-form__input--first" >
                <label htmlFor="title">title :</label>
                <input id="title" type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
            </div>
            <div className="add-form__input--second" ></div>
            {/* <div className="todo">
                <label htmlFor="todo"> <BsAlignStart />Todo</label>
                <input type="radio"  id="todo" checked={status === "todo"} value="todo" onChange={(e)=> setStatus(e.target.value)}/>
            </div> */}
            <RadioButton status={status} setStatus={setStatus} title="Todo" value="todo">
                <BsAlignStart />
            </RadioButton>

            <RadioButton status={status} setStatus={setStatus} title="In Progress" value="inProgress">
                <FiSettings />
            </RadioButton>

            <RadioButton status={status} setStatus={setStatus} title="Review" value="review">
                <AiOutLineFileSearch />
            </RadioButton>

            <RadioButton status={status} setStatus={setStatus} title="Done" value="done">
                  <MdDoneAll />
            </RadioButton>
            <button>Add </button>
        </div>
    
    </div>
  )
}

export default AddTodoPage
