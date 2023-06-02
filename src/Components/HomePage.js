import { useState , useEffect } from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"
import './Home.css'
import Search from "./Search"

const Home = ()=>{
   const history =useHistory()
    const [totalStarWars , settotalStarWars] = useState([])
    const [actorList , setactorList] = useState([]);
    const [starShipList , setstarShipList] = useState([]);
    const [planetList , setplanetList] = useState([]);

    const getStarWarsAPI = async() => {
        try{
            const films =await axios.get("https://swapi.dev/api/films/")
            settotalStarWars(films.data.results);
        }catch(error){
            if(error)
                console.log(error);
        }
    }

    const getActorAPI = async() =>{
        try{
            const actors = await axios.get('https://swapi.dev/api/people/')
            const newarr = actors.data.results;
            setactorList(newarr);

        }catch(error){
            if(error)
                console.log(error)
        }
    }

    const getstarshipsAPI = async() =>{
        try{
            const ships = await axios.get('https://swapi.dev/api/starships/')
            const newarr = ships.data.results;
            setstarShipList(newarr);
        }catch(error){
            if(error)
                console.log(error)
        }
    }

    const getPlanetsAPI = async() =>{
        try{
            const planetsw = await axios.get('https://swapi.dev/api/planets/')
            const newarr = planetsw.data.results;
            setplanetList(newarr);
        }catch(error){
            if(error)
                console.log(error)
        }
    }

    useEffect(()=>{
        getStarWarsAPI();
        getActorAPI();
        getstarshipsAPI();
        getPlanetsAPI();
       
    },[])
    console.log(totalStarWars)

    const handlefilmClick =(id)=>{
      history.push(`/${id}`)
    }

    return(
        <>
        <header>
            <Search 
            planetList={planetList}
            starShipList = {starShipList}
            actorList ={actorList} 
            />
        </header>
        {totalStarWars.map((item)=>(
                <div className="star-war-films" 
                key={item.episode_id}
                onClick={()=> handlefilmClick(item.episode_id)}
                >
                    {item.title}
                </div>
            ))}
        </>
    )
}
export default Home;