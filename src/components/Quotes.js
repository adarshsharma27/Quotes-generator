import {React,useState,useEffect} from 'react'
import Chat from '../images/chat.svg'
import { FaTwitter } from "react-icons/fa";

import './Quotes.css'
const Quotes = () => {
    let iconStyles = { margin: '5px', fontSize: "1.1rem" };
    const[quotes,setQuotes]=useState([]);
const getQuotes=async()=>{
    const url = `https://type.fit/api/quotes`;
     const response= await  fetch(url);
     const data = await response.json();
     let random = Math.floor(Math.random()*data.length);
     setQuotes(data[random]);
}

useEffect(()=>{
   getQuotes(); 

},[])

    return (
        <>
            <div className="cards">
    <div className="container">
        <figure>
            <img src={Chat} alt="message icon"/>
        </figure>
      <h2>{quotes.author}</h2>
      <p>{quotes.text}</p>
      <div class="btns">   
              <button className=" btn btn-primary" onClick={getQuotes}>Get Quotes</button>
              <a  className="btn btn-tweet" target="_blank" href={`https://twitter.com/intent/tweet?text=${quotes.text}`} rel="nooperner noreferrer">Tweet <FaTwitter style={iconStyles}/></a> 
              </div>
     
    </div>
</div>

        </>
    )
}

export default Quotes
