import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Todo from './Components/Todo';
import { TodoProvider } from './Context/TodoContext';
import {UserProvider} from './Context/UserContext';


function App() {
  return (
    <UserProvider>
      <TodoProvider>
      <BrowserRouter>
        {/* <NavBar /> Add Navbar and Footer Later */}
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/todo' element={<Todo />} />
          </Routes>
          {/* <Footer />  */}
        </BrowserRouter>
        </TodoProvider>
      </UserProvider>
  );
}

export default App;
