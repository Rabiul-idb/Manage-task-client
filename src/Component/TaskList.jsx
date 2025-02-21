
import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { io } from "socket.io-client";

const socket = io("wss://manage-task-server-five.vercel.app", {
    transports: ["websocket"]
});

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {


    const fetchTasks = async () => {
        try {
          const response = await fetch("https://manage-task-server-five.vercel.app/allTask"); // Fetch existing tasks
          const data = await response.json();
          setTasks(data); 
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
      };
  
      fetchTasks();



    // Listen for real-time updates from the backend
    socket.on("taskUpdate", (change) => {
      console.log("Task change detected:", change);

      if (change.operationType === "insert") {
        setTasks((prevTasks) => [...prevTasks, change.fullDocument]);
      } else if (change.operationType === "delete") {
        setTasks((prevTasks) =>
          prevTasks.filter((task) => task._id !== change.documentKey._id)
        );
      } else if (change.operationType === "update") {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id === change.documentKey._id
              ? { ...task, ...change.updateDescription.updatedFields }
              : task
          )
        );
      }
    });

   

    return () => {
      socket.off("taskUpdate"); 
    };
  }, []);

  // delete a task
  
    const deleteTask = async (id) => {

        try {
          await axios.delete(`https://manage-task-server-five.vercel.app/deleteTasks/${id}`);
      
          // Remove the deleted task from state
          setTasks(tasks.filter(task => task._id !== id));
        } catch (error) {
          console.error("Error deleting task:", error);
        }
      };

    // const remainingTask = tasks.filter(item => item._id === id);
    // setTasks(remainingTask);

  

  return (
    <div>
      
      
        {tasks.map((task) => (
          <div className="item mb-3" key={task._id} >
            {task.task}
            <span className="icons">
                <FaRegEdit className="cursor-pointer" />
                <MdDeleteForever onClick={() => deleteTask(task._id)} className="cursor-pointer"/>
            </span>
            </div>
        ))}
      
    </div>
  );
};

export default TaskList;
