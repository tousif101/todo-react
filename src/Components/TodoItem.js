import { FaEdit } from 'react-icons/fa'
import { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Card from "./shared/Card";
import TodoContext from '../Context/TodoContext';
import Modal from 'react-modal';


function TodoItem({item}) {

    const [modelOpen, setModelOpen] = useState(false)
    const {removeTodo,editTodo} = useContext(TodoContext);
    const [text,setText] = useState('');

    //Bring in the user context here

    const deleteTodo = () => {
        removeTodo(item._id)
    }

    const openModal = () => {
        setModelOpen(!modelOpen)
    }

    // const editTodo = (newTodo) => {

    // }

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
        <div className='text-display'>{item.item}</div>
        <button className="btn btn-square btn-outline" onClick={deleteTodo}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
         </button>

         <button className="btn btn-square btn-outline" onClick={openModal}>
             <FaEdit></FaEdit>
         </button>


         {/* button on click set modal open to true. On click, get the Todo object*/}
          {/* figure out this modal stuff to take the item */}
          <Modal
            isOpen={modelOpen}
            onRequestClose={openModal}
            contentLabel="My dialog"
            ariaHideApp={false}
        >
            
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
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
        
            {/* <button className="btn btn-square btn-outline" onClick={openModal}>
                Submit
            </button> */}
            <button className="btn btn-square btn-outline" onClick={openModal}>
                Close
            </button>
         </Modal>

    </Card>
   
  )
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
  }

export default TodoItem