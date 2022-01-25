import React, { useState, useEffect } from 'react';
import Data from './Data';



function Amazon() {
    const [data,setData]=useState([])
    useEffect(() => {
        fetch("https://api.polygon.io/v2/aggs/ticker/AMZN/range/1/day/2022-01-02/2022-01-24?adjusted=true&sort=asc&limit=120&apiKey=IbzW4PY8wxkA11GpBtVXPheMvKtGneHK")
          .then((res) => res.json())
          .then((data) => {
            setData(data.results);
            console.log(data)
          })
          .catch((error) => console.log(error));
      }, []);
    return (
        <div>
            {data.map((data,index)=>{
                return <Data data={data} key={index} day={index+1}/>
            })}
        </div>
    );
}

export default Amazon;