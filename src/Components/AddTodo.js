import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Viewtodo from './Viewtodo'
import { addtodo } from '../store/slicer/todoSlice'
import {fetchApi_data} from '../store/slicer/ReduxToolkit_Thunk_Slice'

import { v4 as uuidv4 } from 'uuid'
function AddTodo() {
    const dispatch = useDispatch()
    //const [task, settask] = useState({})
    const [title, settitle] = useState()
    const handleChange = (e) => {
        settitle(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
       
        dispatch(addtodo(title))//pori state bhejwai
        console.log('sdsd')

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='title' onChange={handleChange} />
                <button type='submit'>Add</button>
                <button type='submit' onClick={()=>dispatch(fetchApi_data()) } >APi</button>
            </form>
            <Viewtodo />
        </div>
    )
}

export default AddTodo
