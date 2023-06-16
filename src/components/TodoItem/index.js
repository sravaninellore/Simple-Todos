// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, functionName} = props
  const {title, id} = todo

  const onDelete = () => functionName(id)

  return (
    <li className="todo-container">
      <p className="todo-content">{title}</p>
      <div className="button-align">
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
