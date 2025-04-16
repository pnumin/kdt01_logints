import FoodCard from "./FoodCard"
import fooddata from "./fooddata.json"
import { useState } from "react" 
import TailButton from "../../ui/TailButton";
import { FoodItem } from "../../types/Food";

export default function FoodMain() {
  //useState 타입 선언 
  const [tags, setTags] = useState<React.ReactNode[]>([]);

  let category = fooddata.map(item => item["운영주체 분류"].replaceAll(' ', ''));
  category = [...new Set(category)];
  console.log(category)

  const handleCategory = (c:string) => {
    console.log("handleCategory", c)

    let tm = (fooddata as FoodItem[])
                     .filter( (item:FoodItem) => item["운영주체 분류"].replaceAll(' ', '') == c) 
                     .map((item:FoodItem) => <FoodCard 
                                            key={item["사업장명"]}
                                            obj={item}
                                        />);
    setTags(tm) ;
      // console.log("handleCategory", tm)
  }
  
  const bts = category.map(item => <TailButton 
                                    key = {item}
                                    caption = {item}
                                    color = "lime"
                                    onClick = {() => handleCategory(item)}
                                    />);
  return (
    <div className="w-11/12">
      <div className="w-full flex justify-center items-center
                      p-5 border border-lime-800">
        {bts}
      </div>
      <div className="w-full my-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {tags}
      </div>
    </div>
  )
}
