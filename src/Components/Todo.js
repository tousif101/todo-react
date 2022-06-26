// import { useState, useContext} from 'react'
// import TodoContext from '../Context/TodoContext'
// import Button from './shared/Button'
// import Card from './shared/Card'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todo() {

    return (
        <div>
            <TodoForm />
            <TodoList />
        </div>
    )
 
}



export default Todo