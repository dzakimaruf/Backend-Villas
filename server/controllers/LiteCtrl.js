const findAll = async (req, res) => {
    const Lite = await req.context.models.Line_items.findAll(
        {
            include: [{
                all: true
            }]
        }
    );
    return res.send(Lite);
}
const findOne = async (req, res) => {
    const Lite = await req.context.models.Line_items.findOne({
        where: { lite_id: req.params.id },
        include: [{
            all: true
        }]

    });
    return res.send(Lite);
}

const createlite = async (req, res) => {
    
    try {
        let {lite_days} = req.body
        const cart = req.cart
        const villas = req.villas 
        const lite_price = parseInt(villas.villa_price) * lite_days 
        const item = await req.context.models.Line_items.create(
            {
                lite_days: req.body.lite_days,
                lite_status: 'cart',
                lite_villa_id: villas.villa_id,
                lite_vica_id: cart.vica_id,
                lite_price: lite_price 

            },
        )
        return res.send(item)
    } catch (error) {
        console.log(error)
        return res.send(error);
    }
}
const update1 = async (req, res) => {
    const { item } = req.data;

    for (let x of item) {
        await req.context.models.Line_items.update(
            {
                lite_status: "ordered",
            },
            { returning: true, where: { lite_id: x.lite_id } }
        );
    }

    res.send(req.order);
}

const Delete = async (req,res) =>{
    try {
        const lite = await req.context.models.Line_items.destroy({
            where:{lite_id:req.params.id}
        })
    } catch (error) {
        return res.status(500).json({ message:"Find error " + error })
    }
}

export default {
    createlite,
    findAll,
    findOne,
    update1,
    Delete
}