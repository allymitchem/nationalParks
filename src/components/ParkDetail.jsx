import React,{useEffect, useState} from "react";

const ParkDetail = ({match}) => {
    const parkCode = match.params.parkCode
    const [parkData, setParkData] = useState

    useEffect(()=> {
        async function fetchIndividualData(){
            const data = await getParkData(parkCode)
            if (data) {
                set
            }
        }
    })
    return (
        <div>
            <h4>Individual Parks</h4>
        </div>
    )
}

export default ParkDetail