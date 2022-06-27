import { FaEdit } from 'react-icons/fa'
import { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Card from "./shared/Card";
import TodoContext from '../Context/TodoContext';
import Modal from 'react-modal';


/*
TODO: 
    Add login to the todo. Protect the routes with isLoggedIn
    Fix the CSS and styling. Modal, and each item. 
    Add radio buttons. Add a mark as done on the context. 
*/

function TodoItem({item}) {

    const [modelOpen, setModelOpen] = useState(false)
    const {removeTodo,editTodo} = useContext(TodoContext);
    const [text,setText] = useState('');

    const deleteTodo = () => {
        removeTodo(item._id)
    }

    const openModal = () => {
        setModelOpen(!modelOpen)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        item.item = text
        editTodo(item._id, item)
    }

    const handleTextChange = (e) => {
        e.preventDefault()
        setText(e.target.value)
    }


  return (
    <Card>
        {/* <input type="radio" name="radio-1" class="radio" checked /> */}
        <div className='flex items-center'>

        <button className="btn btn-square btn-outline " onClick={deleteTodo}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
         </button>

        <h5>{item.item}</h5>
    
         <button className="btn btn-square btn-outline " onClick={openModal}>
             <FaEdit></FaEdit>
         </button>

          <Modal
            isOpen={modelOpen}
            onRequestClose={openModal}
            contentLabel="My dialog"
            ariaHideApp={false}
            style={{
                display: "flex",
                justifyConent: "center",
                alignItems: "center",
            }}
        >
            
            <div className='flex items-center'>
            <form onSubmit={handleSubmit}>
                <div className='input-group flex items-center'>
                    <input
                        onChange={handleTextChange}
                        type='text'
                        placeholder={item.item}
                    />
                    <button type='submit'>
                        Edit
                    </button>
                </div>
            </form>
        
            {/* center this button */}
     
            </div>
            <button className="btn btn-square btn-outline" onClick={openModal}>
                Close
            </button>


         </Modal>

         </div>
    </Card>
  )
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
  }

export default TodoItem