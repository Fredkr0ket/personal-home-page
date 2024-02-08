import React, { useState } from 'react';
import IMAGES from '../../images/Images';
import axios from 'axios';

async function createItem(description, setTasks) {
  await axios.post(`http://localhost:3000/tasks/create`, {}, {
    headers: { "description": description }
  });
  // Fetch the updated tasks after creating a new task
  const updatedTasks = await axios.get('http://localhost:3000/tasks');
  setTasks(updatedTasks.data);
}

export default function TaskCreater({ setTasks }) {
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (taskDescription) {
      await createItem(taskDescription, setTasks);
    }
    // You can also reset the textarea value if needed
    setTaskDescription('');
  };

  const handleTextareaChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleKeyDown = (event) => {
    // Check if the pressed key is "Enter"
    if (event.key === 'Enter') {
      event.preventDefault();
      // Trigger form submission
      handleSubmit(event);
    }
  };

  return (
    <div className='w-[95%] h-fit bg-white min-h-10 flex flex-row rounded-lg pt-[1.5%] pb-[1.5%] pl-[5%]'>
      <form onSubmit={handleSubmit}>
        <textarea
          className='outline-none h-[100%] w-[83%] bg-task'
          placeholder='task'
          cols='100'
          value={taskDescription}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <button type='submit' className='w-[8%] ml-[5%]'>
          <img src={IMAGES['add-icon']} alt='Add Icon' />
        </button>
      </form>
    </div>
  );
}
