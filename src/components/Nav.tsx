import reactLogo from '../assets/react.svg'
import { useAtom } from 'jotai'
import { isLogin } from '../atoms/IsLoginAtom'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [login, setLogin] = useAtom(isLogin);

  const handleClick = () => {
    setLogin(false);
    localStorage.setItem("email", "");
  }
  return (
    <header className="w-full h-24 min-h-24 px-10 bg-emerald-600 flex justify-between items-center">
      <div className='flex'>
        <div className="flex text-sm items-center mx-2">
          <img src={reactLogo} alt="react" className="w-8" /> +
          <img src="/vite.svg" alt="vite" className="w-8" />
        </div>

      </div>
      <ul className='flex justify-center items-center text-white'>
        <li className='mx-1 p-2 rounded-sm hover:bg-lime-50 hover:text-lime-700'>
          <Link to="/">홈으로</Link>
        </li>
        {login &&
          <li className='mx-1 p-2 rounded-sm hover:bg-lime-50 hover:text-lime-700'>
            <Link to="/subway">지하철대기정보</Link>
          </li>
        }
        {login &&
          <li className='mx-1 p-2 rounded-sm hover:bg-lime-50 hover:text-lime-700'>
            <Link to="/todoList">할일목록</Link>
          </li>
        }
      </ul>
      <div className='p-2  text-white
                         border rounded-sm
                                      hover:cursor-pointer hover:bg-emerald-400'>
        {login ? <span onClick={handleClick}>로그아웃</span>
          : <span>로그인</span>
        }
      </div>
    </header>
  )
}
