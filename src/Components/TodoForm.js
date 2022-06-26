import { useState, useContext} from 'react'
import TodoContext from '../Context/TodoContext'
import Button from './shared/Button'
import Card from './shared/Card'


function TodoForm() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const {createTodo} = useContext(TodoContext);

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } 
    else {
      setMessage(null)
      setBtnDisabled(false)
    }
    
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const todo = {
        item:text
    }
    createTodo(todo)
    setText('')
    setBtnDisabled(true)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Enter Your Todo</h2>
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a task'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default TodoForm