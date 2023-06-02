import { TextField } from "@mui/material";
import { useState } from "react";
import './Home.css'
import PlanetDetails from "./PlanetDetails";

const Search =({actorList , starShipList ,planetList}) =>{
   
    const[target , setTarget] = useState([]);
    const[debounceId ,setdebounceId] = useState(0)
    let p =[];
    let a =[];
    let s =[];
    if(planetList.length !== 0){
    for(let i = 0 ; i < planetList.length ;i++)
        p.push(planetList[i].name);
    }
    console.log(p);

    if(starShipList.length !== 0){
    for(let i =0 ; i< starShipList.length ;i++)
        s.push(starShipList[i].name)
    }
    console.log(s)

    if(actorList.length !== 0){
           for(let i =0 ; i< actorList.length ;i++)
             a.push(actorList[i].name);
    }
    console.log(a);

    const handleOnchange =(val) =>{
      const pfilter = p.filter((ele) => ele.toLowerCase() === val.toLowerCase());
      const sfilter = s.filter((ele) => ele.toLowerCase() === val.toLowerCase());
      const afilter = a.filter((ele) => ele.toLowerCase() === val.toLowerCase());
      if(pfilter.length !==0)
        setTarget(pfilter)
        
      if(sfilter.length !==0){
        setTarget(sfilter)
      }
       
      if(afilter.length !==0)
        setTarget(afilter)     
    
    console.log(val)
    console.log(pfilter)
    }
    const debounceSearch =(event)=>{
        if(debounceId)
            clearTimeout(debounceId)

        const dId = setTimeout(()=>{
            handleOnchange(event.target.value)
        },1000);
        setdebounceId(dId)
    }
    return(
        <>
        <TextField
         name="search"
         type="text"
         inputProps={{sx:{color:"white"}}}
         sx={{color:"white", width: "100vmin"}}
         placeholder ="search for actors , starships and planets"
         onChange={(event)=>debounceSearch(event)}/>
        </>
    )
}
export default Search;