import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Nav from './components/Nav';
import Subway from './components/Subway';
import TodoList from './components/TodoList';
function App() {
  return (
    <BrowserRouter>
    <div className="w-full xl:w-4/5 h-screen mx-auto
                  flex flex-col justify-start items-center">
      
      <Nav />
      <main className="w-full flex-grow flex flex-col items-center
                    overflow-y-auto">
                     
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/subway' element={<Subway />} />
            <Route path='/todoList' element={<TodoList />} />
         </Routes>
      </main>

      <footer className="w-full h-24 min-h-24 flex justify-center items-center
                       bg-gray-950 text-white text-lg">
        [부산대학교 K-Digital] AI 데이터 분석 풀스택 웹 개발자 양성과정
      </footer>
    </div>
    </BrowserRouter>
  )
}

export default App


