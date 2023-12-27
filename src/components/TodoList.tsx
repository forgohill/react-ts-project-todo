import { ITodo } from "../types/date";
import { TodoItem } from "./TodoItem";

interface ITodoListProps {
  items: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items, removeTodo, toggleTodo } = props;

  return (
    <div className={`todolist__list-container ${items.length >= 10 ? 'todolist__list-container_onscrollbar' : ''}`}>
      {
        props.items.map(todo => <TodoItem
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          {...todo} />)
      }
    </div>
  )
}
