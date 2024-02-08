import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';
import TaskCreater from './TaskCreater';
import axios from 'axios';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get('http://localhost:3000/tasks');
        setTasks(data.data);
      } catch (error) {
        console.log('Error fetching task', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='h-screen flex flex-col justify-items-center grid content-start gap-1 pt-3 overflow-y-scroll'>
      <TaskCreater setTasks={setTasks} />
      {tasks.map((task) => {
        if (task.active) {
          return <TaskCard key={task.id} task={task.description} done={task.finished} id={task.id} setTasks={setTasks} />;
        }
        return null;
      })}
    </div>
  );
}