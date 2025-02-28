
import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { io } from "socket.io-client";

const socket = io("https://manage-task-server.onrender.com/", {
    transports: ["websocket"],
    reconnection: true,
});

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {


    const fetchTasks = async () => {
        try {
          const response = await fetch("https://manage-task-server.onrender.com/allTask"); 
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

        console.log(id)
          await axios.delete(`https://manage-task-server.onrender.com/deleteTask/${id}`);
      
         
          setTasks(tasks.filter(task => task._id !== id));
         
      };

    // const remainingTask = tasks.filter(item => item._id === !id);
    // setTasks(remainingTask);

  

  return (
    <div>
      
      
        {tasks.map((task) => (
          <div className="item mb-3" key={task._id} >
            {task.task}
            <span className="icons">
                <FaRegEdit className="cursor-pointer" />
                <MdDeleteForever onClick={() => deleteTask(task._id)} className="cursor-pointer "/>
            </span>
            </div>
        ))}
      
    </div>
  );
};

export default TaskList;
