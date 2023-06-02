import { useParams } from "react-router"; 
import { useEffect ,useState } from "react";
import { useHistory } from "react-router";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack"
import Search from "./Search";
import axios from "axios"
const CharacterDetails =()=>{
    const params = useParams();
    const history = useHistory();
    const [characterSW , setcharacterSW] = useState({})
    const [starShipsSW , setstarShipsSW] = useState([]);

    const getCharacter =async(id)=>{
        const getchar = await axios.get(`https://swapi.dev/api/people/${id}/`)
        setcharacterSW(getchar.data);
        setstarShipsSW(getchar.data.starships);
    }

    useEffect( ()=>{
        getCharacter(params.id)
    },[params.id] )

    console.log(characterSW)
    console.log(starShipsSW)

    const handleBack =()=>{
        history.push("/");
    }

    const handleNext =(item)=>{
        const arr = item.split('/');
        const id = arr[arr.length-2];
        console.log(id);
        history.push(`/starships/${id}`)
    }

    return(
        <>
        {/* <header>
            <Search/>
        </header> */}
            <Button onClick ={()=>handleBack()}>Back</Button>
            <Stack p={2}>Name : {characterSW.name}</Stack >
            <Stack p={2}>Gender : {characterSW.gender}</Stack >
            <Stack p={2}>Birth Year : {characterSW.birth_year}</Stack>
            <Stack p={2}>eye_color : {characterSW.eye_color}</Stack >
            <Stack p={2}>hair color: {characterSW.hair_color}</Stack >
            <Stack p={2}>height : {characterSW.height}</Stack>
            <Stack p={2}>StarShips : </Stack >
            {starShipsSW.map((item)=>(
                <Stack p={2} onClick={()=>handleNext(item)}>{item}</Stack>
            ))}
        </>
    )
}
 export default CharacterDetails