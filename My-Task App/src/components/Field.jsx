import React, { useState } from 'react'
import './Field.css'
import { MdOutlineDone } from "react-icons/md";

const Field = ({ addTask }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSave = () => {
        if (inputValue.trim() !== '') {
            addTask({
                text: inputValue,
                completed: false
            });
            setInputValue('')
        }
    }
    return (
        <div className='fieldContainer'>
            <input className='mainInput' placeholder='Enter Your Task' type="text" value = {inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button className='saveBtn' onClick={handleSave}><MdOutlineDone /></button>
        </div>
    )
}

export default Field
