import TailButton from "../ui/TailButton"
export default function TodoItem({todo, onDelete, onToggle}) {
  return (
    <li className="w-full border border-gray-300 rounded-lg
                    flex justify-between items-center
                    m-1 px-4 py-1">
      <div>
        <div onClick={() => onToggle(todo.id, todo.completed)}
             className="hover:cursor-pointer">
         {todo.completed == "X" ? "🔲" :"✅" }
         <span className={todo.completed == "X" ? "" : "text-red-500 line-through"}>
          {todo.text}
          </span>
        </div>
      </div>
      <div>
        <TailButton caption="삭제"
                    color="blue" 
                    onClick={() => onDelete(todo.id)} />
      </div>
    </li>
  )
}
