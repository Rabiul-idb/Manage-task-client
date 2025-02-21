import axios from "axios";

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

       // console.log(addToDo);

        axios.post(`https://manage-task-server-five.vercel.app/addTodoTask`, addToDo);
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