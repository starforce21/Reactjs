import Form from "./From";
import React, { useState } from 'react';
import axios from "axios";


function Home() {
    const [data,setData]= useState({data:''})
    const [ticker,setTicker]=useState()
    const submitForm=(value)=>{
        let url=`https://finnhub.io/api/v1/quote?symbol=${value.ticker}&token=c7o2nliad3idf06mljtg`
        console.log(url)
        axios.get(url)
        .then(res=>{
            console.log(res)
            setTicker(value.ticker)
            setData(res)
        })
    }
    return (
        <div className="homepage">
            <Form submitForm={submitForm}/>
            <div style={data.data.d>0 ? {color: "green"}:{color: "red"}}>
            <p>Ticker: {ticker}</p>
            <p>Current Price: {data.data.c}</p>
            <p>Day Change: {data.data.d}</p>
            <p>Day Change Percentage: {data.data.dp}%</p>
            <p>Day High: {data.data.h}</p>
            <p>Day Low: {data.data.l}</p>
            <p>Opening Price: {data.data.o}</p>
            <p>Previous Closing Price: {data.data.pc}</p>   
            </div>
        </div>
    );
}

export default Home;