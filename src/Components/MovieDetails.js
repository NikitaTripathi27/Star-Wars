import { useParams } from "react-router-dom"
import { useEffect , useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid"
import axios from "axios";
import Search from "./Search"
import Stack from "@mui/material/Stack"

const MovieDetails=()=>{

    const history = useHistory();
    const params = useParams();
    const[movie ,setmovie] = useState(0)
    const [character , setcharacter] = useState([])
    const [planets , setplanets] = useState([])

    const getMovieIdAPI = async(id)=>{
        const res = await axios.get(`https://swapi.dev/api/films/${id}`)
        console.log(res.data)
        setmovie(res.data);
        setcharacter(res.data.characters);
        setplanets(res.data.planets);
    }

    useEffect(()=>{
        getMovieIdAPI(params.id)
    },[params.id])

    console.log(movie);
    console.log(planets);

    const handleplanet =(item) =>{
        const sdata = item.split('/');
        console.log(sdata)
        console.log(sdata[sdata.length-2])
        const id = sdata[sdata.length-2];
        console.log(id)
        history.push(`/planets/${id}`)
        console.log("hi")
    }

    const handleCharacter =(item)=>{
        const idata = item.split('/');
        console.log(idata);
        console.log(idata[idata.length - 2]);
        const id = idata[idata.length - 2];
        history.push(`/people/${id}`);
    
    }

    return(
        <>
        {/* <header>
            <Search />
        </header> */}
        <h3>Details</h3>
        <Stack p={2}>Director :  {movie.director}</Stack>
        <Stack p={2}>Producer :  {movie.producer}</Stack>
        <Stack p={2}>Characters : </Stack>
        <br/>
        <Grid container spacing ={2}>
            {/* <Grid item xs={12} md={6} lg={4}> */}
        {character.map((item) => (
             <Grid item xs={12} md={6} lg={4}>
            <div onClick={()=>handleCharacter(item)}>{item}</div>
            </Grid>
        ))}
        </Grid>
        
        <Stack p={2}>Planets : </Stack>
        <br/>
        <Grid container spacing = {2}>
        {planets.map((item) => (
            <Grid item xs={12} md={6} lg={4}>
            <div onClick={()=>handleplanet(item)}>{item}</div>
            </Grid>
        ))}
        </Grid>
        </>
    )
}
export default MovieDetails