import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {deletetodo} from '../store/slicer/todoSlice'

function Viewtodo() {
    const [title, settitle] = useState('')
    const dispatch = useDispatch()
    const todo = useSelector(state => state.todos)
    const post = useSelector(state => state.post)
console.log('....',todo)
    console.log('.....',post)
    const handleDelete = (id)=>{
         dispatch(deletetodo(id))
    }
    return (
        <div>
            {
                todo.map((item)=>(
                    <div key={item.id}>
                        {item.title}
                    <button onClick={()=>handleDelete(item.id)}>X</button>
                     </div>
                ))
                //sdadas
            }
            {post.map((item)=>(
                     <div key={item.id}>
                     {item.title}
                 
                  </div>
            )
                )}
        </div>
    )
}

export default Viewtodo
