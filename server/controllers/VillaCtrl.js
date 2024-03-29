import { sequelize } from '../../config/config-db';
import errorHandler from './../helpers/dbErrorHandler';
import { Op } from 'sequelize';

const findAll = async (req, res) => {
    const villas = await req.context.models.Villas.findAll(
        {
            include: [{
                all: true
            }]
        }
    );
    return res.send(villas);
}
const findOne = async (req, res, next) => {
    try {
        const villas = await req.context.models.Villas.findOne({
            include: [{ all: true }],
            where: { villa_id: req.body.villa_id }
        });
        req.villas = villas
        next()
    } catch (error) {
        console.log(error);
    }

}
const findOne1 = async (req, res, next) => {
    const { item } = req.data

    let price = 0;
    let discount = 0;

    for (let x of item) {
        const villas = await req.context.models.Villas.findOne({
            where: { villa_id: x.lite_villa_id }
        })
        price = villas.villa_price

        if (x.lite_days > 2) {
            discount = price * 0.05;
        }
    }

    req.price = {
        harga: price,
        discount: discount
    }

    next()
}

const create = async (req, res) => {
    const villas = await req.context.models.Villas.create({
        villa_id: req.body.villa_id,
        villa_title: req.body.villa_title,
        villa_description: req.body.villa_description,
        villa_address: req.body.villa_address,
        villa_tipe: req.body.villa_tipe,
        villa_kamar_tidur: req.body.villa_kamar_tidur,
        villa_kamar_mandi: req.body.villa_kamar_mandi,
        villa_lantai: req.body.villa_lantai,
        villa_fasilitas: req.body.villa_fasilitas,
        villa_price: req.body.villa_price,
        villa_status: req.body.villa_status,
        villa_user_id: req.body.villa_user_id

    });
    return res.send(villas);
}

const update = async (req, res) => {
    const villas = await req.context.models.Villas.update(
        {
            villa_id: req.body.villa_id,
            villa_title: req.body.villa_title,
            villa_description: req.body.villa_description,
            villa_address: req.body.villa_address,
            villa_tipe: req.body.villa_tipe,
            villa_kamar_tidur: req.body.villa_kamar_tidur,
            villa_kamar_mandi: req.body.villa_kamar_mandi,
            villa_lantai: req.body.villa_lantai,
            villa_fasilitas: req.body.villa_fasilitas,
            villa_price: req.body.villa_price,
            villa_status: req.body.villa_status,
            villa_user_id: req.body.villa_user_id

        },
        { returning: true, where: { villa_id: req.params.id } }
    );
    return res.send(villas);
}

const remove = async (req, res) => {
    await req.context.models.Villas.destroy({
        where: { villa_id: req.params.id }
    }).then(result => {
        console.log(result);
        return res.send("delete " + result + " rows.");
    });

}
const rawSQL = async (req, res) => {
    await sequelize.query('SELECT * FROM regions where villa_id = :villaId',
        { replacements: { villaId: parseInt(req.params.id) }, type: sequelize.QueryTypes.SELECT }
    ).then(result => {
        return res.send(result);
    })
}
const findOne2 = async (req, res) => {

    const villas = await req.context.models.Villas.findOne({
        include: {
            all: true,
        },
        where: { villa_id: req.params.id }
    });
    return res.send(villas);

}
//1. Upload Photo
const createVillasImages = async (req, res, next) => {

    const workingDir = process.cwd()+"../../uploads/";

     if (!fs.existsSync(workingDir)) {
        fs.mkdirSync(workingDir);
    } 

    const form = formidable({
        multiples: true,
        uploadDir: workingDir,
        keepExtensions: true
    });

    form
    .on('fileBegin', function (name, file) {
        file.path = workingDir + file.name;
    })
    .parse(req, async (err, fields, files) => {
        const viim = fields;
        //const empImage = files;

        // insert into employee models

        const viims ={
            villa_id : viim.villa_id,
            viimImages : files
        }
        req.viims = viims;
        next();
    })
}
const check = async (req, res) => {
    const result = await req.context.models.Villas.findOne({
        where: { villa_id: req.params.id }
    });
    return res.send(result);
}
const findAllSearch = async (req, res) => { 
    const {villa_title} = req.query
    try {
        const villa = await req.context.models.Villas.findAll(
            { where : {villa_title: {[Op.iLike]: `%${villa_title}%`}},
                include: [{
                    model: req.context.models.Villas_images
                }],
            }
            );
            return res.send(villa);
    } catch (error) {
        return res.send(error)
    }   
  }

  const searchFacility = async (req, res) => { 
    const {villa_fasilitas} = req.query
    try {
        const villa = await req.context.models.Villas.findAll(
            { where : {villa_fasilitas: {[Op.iLike]: `%${villa_fasilitas}%`}},
                include: [{
                    model: req.context.models.Villas_images
                }],
            }
            );
            return res.send(villa);
    } catch (error) {
        return res.send(error)
    }   
  }


export default {
    findAll,
    findOne,
    findOne1,
    findOne2,
    create,
    createVillasImages,
    update,
    remove,
    rawSQL,
    check,
    findAllSearch,
    searchFacility
}