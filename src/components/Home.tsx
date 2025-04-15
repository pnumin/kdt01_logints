import { useAtom } from "jotai";
import { isLogin } from "../atoms/IsLoginAtom";
import Login from "./Login";
import { useEffect } from "react";

export default function Home() {
  const [login, setLogin] = useAtom(isLogin);

  useEffect(()=>{
    if (localStorage.getItem("email")) setLogin(true) ;
  }, []);
  return (
    <div className="w-full h-full">
      {
        login ? <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                  <h1 className="text-2xl font-bold">
                    <span className="text-blue-700">{`${localStorage.getItem('email')}`}</span>
                    님 로그인이 되었습니다.
                  </h1>
                </div>
               : <Login />
      }
    </div>
  )
}
