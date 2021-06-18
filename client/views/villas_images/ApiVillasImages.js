import axios from 'axios';
import { response } from 'express';

const list = async () => {
     try {
        let response = await axios.get(`/api/villasimages/`)
        return await response.data
    } catch (err) {
        return await err.message
    } 

}

const create = async (villas_images) => {
   await axios.post('/api/villasimages/upload', villas_images).then(response => {return response})
    .catch(error => {return error.message})
}

const findOne = async (data) => {
    const id = parseInt(data)
    try {
        let response = await axios.get(`/api/villasimages/${id}`)
        return await response.data
    } catch (err) {
        return await err.message    
    }
}

// const update = async (villa) => {
//     const villa_id = parseInt(villa.villa_id);
//     try {
//         let response = await axios.put(`/api/villasimages/${villa_id}`,
//             villa)
//         return await response.data
//     } catch (err) {
//         return await err.message
//     }
// }

const remove = async (id) => {
    try {
        let response = await axios.delete(`/api/villasimages/${id}`)
        return await response.data
    } catch (err) {
        return res.status(400).json({error : "error when delete row"})
    }
}

export default { list, create, remove, findOne}
