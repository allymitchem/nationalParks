import React, {useEffect, useState} from "react";
import { getAllParksData} from "../apiFunctions";


const ParkList = () => {
    const [parksData, setParksData] = useState(null)

    useEffect(()=>{
        async function fetchAllParks(){
            const data = await getAllParksData()
            if (data.data) {
                setParksData(data.data)
            }
        }
        fetchAllParks()
    }, [])
    console.log("parks data:", parksData)

    return (
        <div className="parkList">
            <h3>Park List</h3>
            <div className="list">
            {parksData ? (
                parksData.map((park)=> (
                    <div key={park.parkCode}>
                        <h4>{park.fullName}</h4>
                     </div>
                ))) : (
                    <p>Loading park data...</p>
                
            )}
            </div>
        </div>
    )

}

export default ParkList;