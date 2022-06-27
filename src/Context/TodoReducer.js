const todoReducr = (state, action) => {
    switch (action.type){
        case 'CREATE_TODO':
            return {
                ...state,
                todos:[...state.todos,action.payload]
            }
        case 'GET_TODO':
            return {
                    ...state,
                    todos:action.payload
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo._id !== action.payload)
            }
        case 'UPDATE_TODO':
            return{
                ...state,
                todos: state.todos.map((todo) => todo._id === action.payload.id ? { ...todo, ...action.payload.updatedTodo } : todo)
            }
    
        default:
            return state
    }

}
export default todoReducr