import axios from 'axios';

const list = async () => {
     try {
        let response = await axios.get(`/api/villa`)
        return await response.data
    } catch (err) {
        return await err.message
    } 

}

const create = async (villa) => {
    try {
        let response = await axios.post(`/api/villa/`,villa)
        return await response.data
    } catch (err) {
        return await err.response.data
    } 
}

const findOne = async (data) => {
    const id = parseInt(data)
    try {
        let response = await axios.get(`/api/villa/${id}`)
        return await response.data
    } catch (err) {
        return await err.message    
    }
}

const update = async (villa) => {
    const villa_id = parseInt(villa.villa_id);
    try {
        let response = await axios.put(`/api/villa/${villa_id}`,
            villa)
        return await response.data
    } catch (err) {
        return await err.message
    }
}

const remove = async (id) => {
    try {
        let response = await axios.delete(`/api/villa/${id}`)
        return await response.data
    } catch (err) {
        return res.status(400).json({error : "error when delete row"})
    }
}

export default { list, create, remove, findOne, update }