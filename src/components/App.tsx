import React, { useState, useEffect, useRef } from 'react';

import { TodoList } from './TodoList';

import { ITodo } from '../types/date';
import '../vendor/normalize/normalize.scss'
import './App.scss';

const App: React.FC<{}> = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  }

  const addTodo = () => {
    if (value) {
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        complete: false,
      }])
      setValue('');
    }
  }

  const removeTodo = (id: number): void => { setTodos(todos.filter(todo => todo.id !== id)) };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map(
        (todo) => {
          if (todo.id !== id) { return todo }
          return { ...todo, complete: !todo.complete }
        }
      )
    );
  };

  useEffect(() => {
    if (inputRef.current) { inputRef.current.focus(); }
  }, [])

  return (
    <div >
      <main className='main'>
        <div className='todolist'          >
          <h1 className="todolist__title">TodoList</h1>
          <div className="todolist__input-wrapper">
            <input
              className='todolist__input'
              value={value}
              onChange={handleChange}
              ref={inputRef}
              onKeyDown={handleKeyDown} />
            <button
              className='todolist__button'
              onClick={addTodo}
            >add</button>
          </div>
          <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </div>
      </main>
    </div>
  )
}
export default App;
