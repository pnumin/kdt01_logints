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
    </div>
  )
}
