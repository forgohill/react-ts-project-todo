import { ITodo } from "../types/date"
import './TodoItem.scss';
interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

export const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, removeTodo, toggleTodo } = props;

  return (
    <div
      className={`todoitem ${complete && 'todoitem_type_selected'}`}
    >
      <input
        className="todoitem__checkbox"
        type="checkbox" checked={complete} onChange={() => { toggleTodo(id) }} />
      <span
        className="todoitem__span">
        {title}
      </span>
      <button
        className="todoitem__button"
        type="button"
        onClick={() => { removeTodo(id) }}
      >X</button>
    </div>
  )
}
