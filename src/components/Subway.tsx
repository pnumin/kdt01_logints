import sarea from "../db/sarea.json"
import scode from "../db/scode.json"
import { useRef, useState, useEffect } from "react"

export default function Subway() {
  const [tdata, setTdata] = useState() ;
  const [tags, setTags] = useState() ;

  const refSel = useRef();
  const ops = sarea.map(item => <option key={item["코드"]} value={item["코드"]}>
                                  {item["측정소"]}
                                </option> );

  const getFetchData = async (code) => {
    let url = `https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?`;
    url = `${url}serviceKey=${import.meta.env.VITE_APP_API_KEY}`;
    url = `${url}&pageNo=1&numOfRows=10&resultType=json`;
    url = `${url}&controlnumber=${new Date().toISOString().slice(0, 10).replaceAll('-','')}07`;
    url = `${url}&areaIndex=${code}`;

    const resp = await fetch(url) ;
    const data = await resp.json() ;
    setTdata(data.response.body.items.item[0])
  }

  const handleChange = () => {
    getFetchData(refSel.current.value);
  }

  useEffect(() => {
    getFetchData("201193");
  } , []);

  useEffect(() => {
    if (!tdata) return ;

    console.log(Object.keys(scode))

    const itemKeys = Object.keys(scode) ;

    let tm = itemKeys.map(item => <div key={item} className="flex flex-col justify-center items-center">
                                    <div className="bg-lime-800 text-white w-full
                                                    border-r border-white">
                                    {scode[item]["name"]}
                                    </div>
                                    <div className="bg-lime-800 text-white w-full
                                                    border-r border-white">
                                    ({item})
                                    </div>
                                    <div className="py-2 font-bold text-md text-lime-800
                                                    border border-t-lime-800 w-full">
                                    {tdata[item]}
                                    {tdata[item] != "-" && scode[item]["unit"]}
                                    </div>
                                  </div>);

    setTags(tm);
    // console.log(tdata) ;
  }, [tdata]);
  return (
    <div className="w-full h-full mt-10  flex flex-col justify-start items-center">
      <div className="w-9/10 grid grid-cols-2 gap-4">
        <h1 className="text-2xl font-bold">측정소 선택</h1>
        <select id="sel1"
          onChange={handleChange}
          ref={refSel}
          className="bg-gray-50 border border-gray-300
                               text-gray-900 text-sm rounded-lg
                                focus:ring-blue-500 focus:border-blue-500 
                                block w-full p-2.5">
          { ops }
        </select>
      </div>
      <div className="w-9/10 grid grid-cols-9 gap4 mt-10">
          {tags}
      </div>
    </div>
  )
}
