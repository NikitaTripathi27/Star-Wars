import { useState , useEffect} from "react";
import { useParams } from "react-router";
import axios from "axios"
import { Button } from "@mui/material";
import { useHistory } from "react-router";
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Search from "./Search";
const PlanetDetails =()=>{
    const params = useParams();
    const history = useHistory();
    const [ planetSW , setplanetSW] = useState({})

    const getPlanet =async(id)=>{
        const fetchPlanet = await axios.get(`https://swapi.dev/api/planets/${id}/`)
        setplanetSW(fetchPlanet.data);
    }

    useEffect(()=>{
        getPlanet(params.id)
    },[params.id])

    const handleBack =()=>{
        history.push('/');
    }
    return(
        <>
        {/* <header>
            <Search/>
        </header> */}
            <Button onClick ={()=>handleBack()} >Back</Button>
            <Box p={2}>
            <Stack p={2}>Name : {planetSW.name}</Stack>
            <Stack p={2}> Climate : {planetSW.climate}</Stack>
            <Stack p={2}>Diameter : {planetSW.diameter}</Stack>
            <Stack p={2}>Diameter : {planetSW.diameter}</Stack>
            <Stack p={2}>Terrain : {planetSW.terrain}</Stack>
            <Stack p={2}>surface_water : {planetSW.surface_water}</Stack>
            <Stack p={2}>Gravity: {planetSW.gravity}</Stack>
            </Box>
        </>
    )
}
export default PlanetDetails;