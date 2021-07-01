import axios from "axios"

const list = async (data) => {
    const id = parseInt(data)
    try {
       let response = await axios.get(`/api/lite/findone/order/${id}`)
       return await response.data
   } catch (err) {
       return await err.message
   } 
}
export default {list}; 