import axios from 'axios'

const remove = async (id) => {
    const vica_id = parseInt(id);
    try {
        let response = await axios.delete(`/api/cart/${vica_id}`)
        return await response.data
    } catch (err) {
        return await err.message
    }
}

const removeOrder = async (id) => {
    const lite_order_id = parseInt(id);
    try {
        let response = await axios.delete(`/api/lite/order/${lite_order_id}`)
        return await response.data
    } catch (err) {
        return await err.message
    }
}

export default {remove, removeOrder} 