import { useEffect,useState } from "react"
import axios from "axios"
import { useParams } from "react-router"
import { useHistory } from "react-router"
import { Button} from "@mui/material"
import Search from "./Search"
const StarShips =() =>{
    const [starShip , setStarship] = useState({})
    const params = useParams()
    const history = useHistory()
    const getStarShip = async(id)=>{
        const fetchStarShip = await axios.get(`https://swapi.dev/api/starships/${id}/`)
        setStarship(fetchStarShip.data)
        
    }
    useEffect(()=>{
        getStarShip(params.id)
    },[params.id])

    const handleBack =() =>{
        history.push('/')
    }
    return(
        <>
            {/* <header>
                <Search/>
            </header> */}
        <Button onClick={()=>handleBack()}>Back</Button>
            <div>Name : {starShip.name} </div>
            <div>Length : {starShip.length} </div>
            <div>Model : {starShip.model}</div>
            <div>Passengers : {starShip.passengers}</div>
            <div>Crew :  {starShip.crew} </div>

        </>
    )
}
export default StarShips;