import React, { useEffect, useState } from 'react';
import axios from"axios"
import Card from './Card';
const Pays = () => {
    const [data, setData]=useState([]);
    const[rangeValue,setRangeValue]=useState(36)
    const radio=["Africa","America","Asia","Europe","Oceania"]
    const [selectionradio,setSelectionRadio]=useState("");
    useEffect(()=>{
 axios
 .get("https://restcountries.com/v3.1/all")
 .then((res)=>setData(res.data));
    },[])
    return (
        <div className='countries'>
            <ul className="radio-container">
              <input type="range" min="1" max="250" defaultValue={rangeValue} onChange={(e)=>setRangeValue(e.target.value)}/>
               {radio.map((continent)=>(
                   <li>
              <input type="radio"id={continent} name="continentradio"
              checked={continent===selectionradio}
                onChange={(e)=>setSelectionRadio(e.target.id)}/>
              <label htmlFor={continent}>{continent}</label>
                   </li>
               ))}

            </ul>
            {selectionradio &&(<button onClick={()=>setSelectionRadio("")}>anuler recherhe </button>
            )}
            <ul>
                {data.filter((country)=>country.continents[0].includes(selectionradio))
                .sort((a,b)=>b.population - a.population)
                .slice(0,rangeValue).map((country,index)=>(
                <Card key={index} country={country}/>
                ))
                }
            </ul>
        </div>
    );
};

export default Pays;