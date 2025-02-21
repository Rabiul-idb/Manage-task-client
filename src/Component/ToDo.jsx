import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import TaskList from "./TaskList";


const ToDo = () => {


    const addTask = async(e)=>{
        e.preventDefault();

        const task = e.target.todo.value;

        const addToDo = {
            task: task,
            time: new Date().toLocaleString(),
            
            status: "todo",
        }

        console.log(addToDo);

        axios.post(`http://localhost:5000/addTodoTask`, addToDo);
        Swal.fire({
          title: "Success!",
          text: "Task Added",
          icon: "success",
          confirmButtonText: "OK",
        });

        e.target.todo.value = "";
    }

    return (
        <div>
           
            <div className="drop-zone" data-category="tasks">
                <h2>To Do</h2>
                <form onSubmit={addTask}>
                    <input type="text" name="todo" className="add-task-input " placeholder="Add a task..."></input>
                    <button className="add-task-btn w-full">Add Task</button>
                </form>

                <div>
                    <h3 className="mb-3 font-semibold text-xl">Task List</h3>
                    <TaskList></TaskList>
                </div>
               
            </div>
        </div>
    );
};

export default ToDo;