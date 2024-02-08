import React from 'react';
import axios from 'axios';
import IMAGES from '../../images/Images';

async function CheckboxUpdate(id, finished, setTasks) {
  await axios.put(`http://localhost:3000/tasks/update/${id}/finished/${finished}`);
  const updatedTasks = await axios.get('http://localhost:3000/tasks');
  setTasks(updatedTasks.data);
}

async function deleteItem(id, setTasks) {
  await axios.delete(`http://localhost:3000/tasks/delete/${id}`);
  const updatedTasks = await axios.get('http://localhost:3000/tasks');
  setTasks(updatedTasks.data);
}

function Checkbox({ done, id, setTasks }) {
  if (done) {
    return (
      <input className='ml-[5%] mr-[5%]' type="checkbox" onChange={() => CheckboxUpdate(id, 0, setTasks)} checked />
    );
  } else {
    return (
      <input className='ml-[5%] mr-[5%]' type="checkbox" onChange={() => CheckboxUpdate(id, 1, setTasks)} />
    );
  }
}

export default function TaskCard({ task, done, id, setTasks }) {
  return (
    <div className='w-[95%] h-fit min-h-10 bg-white flex flex-row rounded-lg pt-[1.5%] pb-[1.5%] pl-[5%] justify-between '>
      <p className='w-[85%]'>{task}</p>
      <Checkbox done={done} id={id} setTasks={setTasks} />
      <button className='w-[7%] mr-[10px]' onClick={() => deleteItem(id, setTasks)}><img src={IMAGES.trashcan} alt="Trashcan" /></button>
    </div>
  );
}
