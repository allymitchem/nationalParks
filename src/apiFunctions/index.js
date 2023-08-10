const API_KEY = "MBgtPdBo8LmOB5HGbLZZjRqMUR9oQjfaTFBRCkc2";
const BASE = "https://developer.nps.gov/api/v1/parks";

export async function getParkData(parkCode){
    try {
        const response = await fetch(`${BASE}?parkCode=${parkCode}&api_key=${API_KEY}`);
        if(!response.ok){
            throw Error("Request failed");
        }
        const data = await response.json();
        return data;
    } catch (error){
        console.error("Error fetching park data:", error)
        return null;
    }
}

// async function testParkData(){
//     const parkCode = "chat"
//     const apiResponse = await getParkData(parkCode)

//     if (apiResponse && apiResponse.data){
//         const parkData = apiResponse.data[0]
//         console.log("ParkData:", parkData)
//     } else
//     console.log("No park data available.")
// }
// testParkData();





