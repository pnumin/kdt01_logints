type nameT = [string, number] ;
// type personT = {
//   name:string;
//   age:number ;
// } ;

interface personT {
  name:string;
  age:number ;
} ;

export default function TsxTest() {
  let name:string = "PNU" ;
  let age : number = 20 ;
  
  let names:string[] = ['Kim' , 'Lee'] ;
  // let ages:Array<number> = [10,30] ;

  // let nameTuple1:[string, number] = ['Kim', 10] ;
  // let nameTuple2:[string, number] = ['Lee', 30] ;
  let nameTuple1:nameT = ['Kim', 10] ;
  let nameTuple2:nameT = ['Lee', 30] ;

  // let person1: {name:string, age:number} = {name : 'Kim', age : 10} ;
  // let person2: {name:string, age:number} = {name : 'Lee', age : 30} ;
  let person1: personT = {name : 'Kim', age : 10} ;
  let person2: personT = {name : 'Lee', age : 30} ;

  //함수 타입 선언1 : 인수가 없고 리턴이 없는 경우
  //void는 생략가능 
  const handleOk1 = ():void  =>  {
    alert("안녕하세요.") ;
  }

  //함수 타입 선언2 : 인수가 있고 리턴이 없는 경우
  //인수에 타입 선언
  const handleOk2 = (name:string):void => {
    alert(`${name}님 안녕하세요.`) ;
  }

  //함수 타입 선언3 : 인수가 있고 리턴이 있는 경우
  //인수에 타입 선언하고 리턴 값의 타입도 선언 
  const helloStr = (name:string):string => {
    return `${name}님 안녕하세요.` ;
  }

  const handleOk3 = (name:string):void => {
    const s:string = helloStr(name) ;
    alert(s) ;
  }


  return (
    <div>
      <ul>
        <li>이름 : {name} , 나이 : {age}</li>
        <li>
          { names.map((item:string, idx:number) => 
                          <span key={`item${idx}`}>{item}</span>) }
        </li>
        <li>
          이름 : {nameTuple1[0]} ,나이 : {nameTuple1[1]}
        </li>
        <li>
          이름 : {nameTuple2[0]} ,나이 : {nameTuple2[1]}
        </li>
        <li>
          이름 : {person1.name} ,나이 : {person1.age}
        </li>
        <li>
          이름 : {person2.name} ,나이 : {person2.age}
        </li>
      </ul>
      <div className="grid grid-cols-3 mt-5">
         <button onClick={handleOk1}
                 className="p-1 m-1 bg-amber-100 rounded-md font-bold 
                            hover:cursor-pointer hover:bg-amber-700 hover:text-white"> 
          함수예제1 
         </button>
         <button onClick={() => handleOk2('Kim')}
                 className="p-1 m-1 bg-amber-100 rounded-md font-bold 
                            hover:cursor-pointer hover:bg-amber-700 hover:text-white"> 
          함수예제2 
         </button>
         <button onClick={() => handleOk3('Lee')}
                 className="p-1 m-1 bg-amber-100 rounded-md font-bold 
                            hover:cursor-pointer hover:bg-amber-700 hover:text-white"> 
          함수예제3 
         </button>
      </div>
    </div>
  )
}
