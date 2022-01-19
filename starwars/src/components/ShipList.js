import { useEffect, useState } from "react";
import StarShips from "./StarShips";

function ShipList() {
    const [data,setData]=useState([])
    const [nextPage,setPage]=useState([])
    useEffect(()=>{
        fetch('https://swapi.dev/api/starships')
            .then(res=>res.json())
            .then(data=>{
                setPage(data.next)
                setData(data.results)
            })
            .catch(error=>console.log(error))
    },[])
    const getMoreShips=()=>{
        fetch(nextPage)
            .then(res=>res.json())
            .then(moreData=>{
                setPage(moreData.next)
                // setData(prevData=>prevData.concat(moreData.results))
                setData(prevData=>{
                    return [...prevData,moreData.results]
                })
            })
            .catch(error=>console.log(error))
    }
    return (
        <div className="flex">
            {data.map((ship,index)=>{
                return <StarShips ship={ship} key={index}/>
            })}
            <button onClick={getMoreShips}>More Ships</button>
        </div>
    );
}

export default ShipList;