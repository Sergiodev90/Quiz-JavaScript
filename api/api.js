import axios from "axios";

const API_URL = 'https://opentdb.com/api.php?amount=20'

async function getData(){
    try{
        const response  = await axios.get(API_URL);
        const result = response.data;
        console.log(result);
    }catch{
        console.error("Failed to make request:", error.message);
    }

}
export {getData,API_URL}