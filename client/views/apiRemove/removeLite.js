import axios from 'axios'

const remove = async (id) => {
    const lite_id = parseInt(id);
    try {
        let response = await axios.delete(`/api/cart/${lite_id}`)
        return await response.data
    } catch (err) {
        return await err.message
    }
}

export default {remove} 