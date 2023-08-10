import React,{useEffect, useState} from "react";
import { getParkData } from "../apiFunctions";
import { useParams } from "react-router-dom";

const ParkDetail = () => {
    const {parkCode} = useParams()
    const [parkData, setParkData] = useState(null)

    useEffect(()=> {
        async function fetchIndividualData(){
            const data = await getParkData(parkCode)
           console.log("API response data.data:", data.data[0])
            
            if (data && data.data) {
               const individualPark = data.data[0]
               console.log("Individual park:", individualPark)
               if (individualPark){
                setParkData(individualPark)
               }
            }
        }
        fetchIndividualData()
    }, [parkCode])
    return (
       
        <div>
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