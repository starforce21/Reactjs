import Form from "./From";
import React, { useState } from 'react';
import axios from "axios";
import HomeData from "./HomeData";


function Home() {
    const [data,setData]= useState([])
    const submitForm=(value)=>{
        let url=`https://finnhub.io/api/v1/quote?symbol=${value.ticker}&token=c7o2nliad3idf06mljtg`
        axios.get(url)
        .then(res=>{
            res.data.ticker=value.ticker
            setData(prevState=>[...prevState,res.data])
            console.log(data)
        })
    }
    return (
        <div className="homepage">
            <Form submitForm={submitForm}/>
            <div className="flex">
             {data.map((data,index)=>{
                return <HomeData data={data} key={index} />
            })}   
            </div>
            
        </div>
    );
}

export default Home;