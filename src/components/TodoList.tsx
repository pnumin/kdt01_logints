import { useEffect , useState} from "react"
import axios from "axios"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

const baseurl = "http://localhost:3005/todos"
export default function TodoList() {
  const [tdata, setTdata] = useState() ; 

  const getData = async() => {
    const resp = await axios.get(baseurl) ;
    setTdata(resp.data) ;
  }

  const addTodo = async(text,completed) =>{
    await axios.post(baseurl, {
      text : text,
      completed : completed
    }) ;
    getData();
  }

  const handleDelete = async(id) => {
    await axios.delete(`${baseurl}/${id}`) ;
    
    getData();
  }

  const handleToggle = async(id, completed) => {
    const done = completed == 'O' ? 'X' : 'O' ;
    await axios.patch(`${baseurl}/${id}`, {
      completed : done
    }) ;
    console.log("Toggle", id, completed, done) ;
    getData();
  }
  useEffect(()=>{
    getData();
  } ,[]);

  useEffect(() => {
    if (!tdata) return ;

    console.log("useEffect", tdata) ;
  }, [tdata]);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-9/10 p-10 bg-amber-50" >
        <TodoForm addTodo={addTodo} />
      </div>
      <ul className="w-9/10">
        {
          tdata && tdata.map(item => <TodoItem key={item.id} 
                                               todo= {item} 
                                               onDelete={handleDelete}
                                               onToggle={handleToggle}
                                               />)
        }
      </ul>
    </div>
  )
}
