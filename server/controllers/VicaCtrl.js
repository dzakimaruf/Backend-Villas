import { sequelize } from '../../config/config-db';
import villa_cart from '../models/villa_cart';
import Line_items from '../models/line_items';


const createc = async (req, res, next) => {
    try {
        const user = req.users
        let cart = req.cart
        if(!cart){
        cart = await req.context.models.Villa_cart.create(
            {
                vica_status: "open",
                vica_user_id: user.user_id,
                vica_created_on: new Date()
            }
        );}
        req.cart = cart
        next()
    } catch (error) {
        return res.send(error)
    }
}

const findOne = async (req, res, next) => {
    try {

        const villa_cart = await req.context.models.Villa_cart.findOne({
            
            include: req.context.models.Line_items,
           
            where: {
                vica_user_id: req.params.id,
                vica_status: "open"
            }
        });
        req.cart = villa_cart
        next();

    } catch (error) {
        console.log(error)
    }
}





const update = async (req, res) => {
    const { vica_id, vica_created_on, vica_status, vica_user_id } = req.body;
    const villa_cart = await req.context.models.Villa_cart.update(
        {
            vica_id: vica_id,
            vica_created_on: vica_created_on,
            vica_status: vica_status,
            vica_user_id: vica_user_id,
        },
        { returning: true, where: { vica_id: req.params.id } }
    );
    return res.send(villa_cart);
}

const update1 = async (req, res, next) => {
    const { vica_id } = req.data;
    const villa_cart = await req.context.models.Villa_cart.update(
        {
            vica_id: vica_id,
            vica_status: "closed",
        },
        { returning: true, where: { vica_id: vica_id } }
    );

    next();
}

export default {
    createc,
    findOne,
    update1,
    update
}