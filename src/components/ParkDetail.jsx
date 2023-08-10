import React,{useEffect, useState} from "react";
import { getParkData } from "../apiFunctions";
import { useParams } from "react-router-dom";

const ParkDetail = () => {
    const {parkCode} = useParams()
    const [parkData, setParkData] = useState(null)

    useEffect(()=> {
        async function fetchIndividualData(){
            const response = await getParkData(parkCode)
            console.log(parkCode)
           console.log("API response data.data", response.data.park)
            
            if (response && response.data) {
               const individualPark = response.data.find(
                   (park)=> park.parkCode === parkCode
               )
                   
              
               
               console.log("Individual park:", individualPark)
               if (individualPark){
                setParkData(individualPark)
                console.log("parkData", parkData )
               }
            }
        }
        fetchIndividualData()
    }, [parkCode])
    return (
       
        <div className="parkDetail">
            {parkData ? (
                <>
                <h4>{parkData.fullName}</h4>
                <p>{parkData.description}</p>
                </>
                ) : (
                    <p>Loading park data...</p>
                )
            }
        </div>
        
    )
}

export default ParkDetail