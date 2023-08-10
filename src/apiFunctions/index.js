const API_KEY = "MBgtPdBo8LmOB5HGbLZZjRqMUR9oQjfaTFBRCkc2";
const BASE = "https://developer.nps.gov/api/v1/parks";

export async function getParkData(parkCode){
    try {
        const response = await fetch(`${BASE}?parkCode=${parkCode}&api_key=${API_KEY}`);
        if(!response.ok){
            throw Error("Request failed");
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error){
        console.error("Error fetching park data:", error)
        return null;
    }
}

getParkData("chat")




