import TodoContext from "../Context/TodoContext";
import {useContext, useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TodoItem from "./TodoItem";

function TodoList() {
    const {todos,getTodo} = useContext(TodoContext);
    useEffect(() => {
        getTodo() // eslint-disable-next-line
      },[]);
  return (
    <div className='feedback-list'>
        <AnimatePresence>
        {todos.map((item) => (
            <motion.div
            key={item._id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
                <TodoItem key={item.id} item={item} />
            </motion.div>
        ))}
        </AnimatePresence>
  </div>
  )
}

export default TodoList