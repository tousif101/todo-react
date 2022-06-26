import axios from 'axios'
import {createContext, useReducer} from 'react'
import todoReducr from './TodoReducer'

const TodoContext = createContext()

export const TodoProvider = ({children}) => {

    const initialState = {
        todos:[],
        todo:{}    
    }
    const [state,dispatch] = useReducer(todoReducr,initialState)

    //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWVhM2Q3YzhlMmU0OTFlZGE1ODkzNyIsIm5hbWUiOiJ0YWNhdHRhYyIsInV1aWQiOiJmZDZjN2MwZi0yOWM3LTRjMzAtYTZlMy1lMDNmMGM0ODZhODkiLCJpYXQiOjE2NTYxMTUwNDUsImV4cCI6MTY4NzY3MTk3MX0.FzWdF_0GWeKBL3rzEJRickCSfCHOFqv9fwLCxvKQWnw
    //TODO: Bearer token in Session next please.
    //TODO: Save Todo into the backend!
    const config = {
        headers: { Authorization: `${localStorage.getItem('token')}`}
    };
    const createTodo = (todo) => {
        console.log(config)
        console.log(todo)
        axios.post( 
            'http://localhost:3500/api/todo',
            todo,
            config
            ).then(function (response) {
                console.log(response.data)
                dispatch ({
                    type: `CREATE_TODO`,
                    payload: response.data.todo
                })
            }).catch(function (error) {
                console.log(error);
            });
            //What to do when you dispatch a create
            //Add the new one to the state
    }

    const getTodo = () => {
        axios.get( 
            'http://localhost:3500/api/todo',
            config
            ).then(function (response) {
                console.log(response.data)
                dispatch ({
                    type: `GET_TODO`,
                    payload: response.data
                })
            }).catch(function (error) {
                console.log(error);
            });
             
    }

    const removeTodo = (id) => {
        axios.delete( 
            `http://localhost:3500/api/todo/${id}`,
            config
            ).then(function (response) {
                console.log(response.data)
                dispatch({
                    type:'DELETE_TODO',
                    payload:id
                })
            }).catch(function (error) {
                console.log(error);
            });
            //add the todos to state 
    }

    const editTodo = (id,updatedTodo) => {
        axios.put( 
            `http://localhost:3500/api/todo/${id}`,
            updatedTodo,
            config
            ).then(function (response) {
                console.log(response.data)
                dispatch({
                    type: 'UPDATE_TODO',
                    payload:{id,updatedTodo}
                })
            }).catch(function (error) {
                console.log(error);
            });
            //add the todos to state 
    }




    return (
        <TodoContext.Provider
            value={{
                createTodo,
                getTodo,
                editTodo,
                removeTodo,
                todos:state.todos
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext