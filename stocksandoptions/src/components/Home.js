import Form from "./From";
import React, { useState } from 'react';
import axios from "axios";


function Home() {
    const [ticker,setTicker]= useState()
    const submitForm=(value)=>{
        let url=`https://finnhub.io/api/v1/quote?symbol=${value.ticker}&token=c7o2nliad3idf06mljtg`
        console.log(url)
        axios.get(url)
        .then(res=>{
            console.log(res)
            setTicker(res)
        })
    }
    return (
        <div>
            <Form submitForm={submitForm}/>
            <p>{ticker.c}</p>
            <p>{ticker.d}</p>
            <p>{ticker.dp}</p>
            <p>{ticker.h}</p>
            <p>{ticker.l}</p>
            <p>{ticker.o}</p>
            <p>{ticker.pc}</p>
        </div>
    );
}

export default Home;