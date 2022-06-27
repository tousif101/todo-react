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