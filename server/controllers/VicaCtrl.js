import { sequelize } from '../../config/config-db';
import villa_cart from '../models/villa_cart';
import Line_items from '../models/line_items';


const createc = async (req, res, next) => {
    try {
        const user = req.user
        let cart = req.cart
        if (!cart) {
            cart = await req.context.models.Villa_cart.create(
                {
                    vica_status: "open",
                    vica_user_id: user.user_id,
                    vica_created_on: new Date()
                }
            );
        }
        req.cart = cart
        next()
    } catch (error) {
        return res.send(error)
    }
}

const findOne = async (req, res, next) => {
    try {

        const villa_cart = await req.context.models.Villa_cart.findOne({

            include: {
                all: true,
            },
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
const cekclose = async (req, res, next) => {
    const user = req.cekord || req.cart
    //const user = req.cart
    try{
    const cart = await req.context.models.Villa_cart.findOne({
        include:[{
            all:true
        }],
        where: { vica_user_id: user.order_user_id,
                vica_id : user.line_items[0].lite_vica_id,
                vica_status : "close",
                 },
    });
    req.cekcart = cart
    next()
    } catch (error){
        return res.status(500).json({message : "Input Error"+error})
    }
}
const findqty = async (req,res,next) => {
    const query = req.cekcart
    try {
        const sum = await sequelize.query(
            'select count (lite_villa_id) as qty from line_items where (lite_vica_id = :liteid)',
            {
            replacements : {liteid:parseInt(query.vica_id)},
            type : sequelize.QueryTypes.SELECT
            }
        )
        req.all = sum[0]
        next()
    } catch (error) {
        return res.status(500).json({message:"Find error "+error})
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

const findOne1 = async (req, res) => {
    const villa_cart = await req.context.models.Villa_cart.findOne({
        include: {
            all: true
        },
        where: {
            vica_user_id: req.params.id,
            vica_status: "open"
        }
    });
    return res.send(villa_cart);
}
const checkCart = async (req, res, next) => {
    const villa_cart = await req.context.models.Villa_cart.findOne({
        include: [{
            all: true
        }],
        where: {
            vica_user_id: req.body.order_user_id,
            vica_status: "open"
        }
    });
    req.data = {
        vica_id: villa_cart.vica_id,
        item: villa_cart.line_items,
        days: villa_cart.lite_id
    }

    next();
}

const check = async (req, res, next) => {
    const user = req.user
    const villa_cart = await req.context.models.Villa_cart.findOne({
        include: [{
            all: true
        }],
        where: {
            vica_user_id: user.user_id,
            vica_status: "closed"
        }
    });
    req.cekcart = villa_cart
    next();
}

const remove = async (req, res) => {
    await req.context.models.Villa_cart.destroy({
        where: { vica_id: req.params.id }
    }).then(result => {
        console.log(result);
        return res.send("delete " + result + " rows.");
    });

}
export default {
    createc,
    findOne,
    findOne1,
    checkCart,
    update1,
    update,
    remove,
    cekclose,
    findqty,
    check
   
}