import React, { useState } from 'react'
import './Card.css'
import { MdOutlineDone } from "react-icons/md";
import { MdEdit } from "react-icons/md"
import { MdDelete } from "react-icons/md";


const Card = ({ task, toggleTaskCompletionState, saveEditTask, deleteTask, addTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);


  const handleCompleted = () => {
    toggleTaskCompletionState(task.id);
  }

  const handleEdit = () => {
    setIsEditing(true)
    console.log(newText)

  }

  const handleSave = () => {
    saveEditTask(task.id, newText);
    setIsEditing(false);
  }

  const handleDelete = () => {
    deleteTask(task.id);
  }

  return (
    <div className='card'>
      <div className='cardContent'>
        <input type="checkbox" checked={task.completed} onChange={handleCompleted} />
        {isEditing ? (
          <input type='text' value={newText} onChange={(e) => setNewText(e.target.value)} />
        ) :
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>}
      </div>

      <div className='cardButtons'>
        {isEditing ? (
          <button onClick={handleSave} className='saveBtn'><MdOutlineDone /></button>
        ) : (
          <button onClick={handleEdit} className='editBtn'><MdEdit /></button>
        )}
        <button onClick={handleDelete} className='deleteBtn'><MdDelete /></button>
      </div>
    </div>
  )
}

export default Card;
