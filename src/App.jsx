
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {

    fetchData();
  }, []);

  const fetchData = async () => {
    const respone = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await respone.json();
    setTodos(data);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody>
         
            { todos.map((todo) => (
              <tr key={ todo.id }>
                <td>{ todo.id }</td>
                <td>{ todo.title }</td>
                {
                  todo.completed ?
                  (
                    <p>Done</p>
                  ):
                  (
                    <p className='none'>None</p>
                  )
                }
              </tr>
            )) }
       
        </tbody>
      </table>
    </>
  );
}

export default App;
