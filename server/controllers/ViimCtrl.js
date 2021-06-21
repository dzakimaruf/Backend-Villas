import formidable from "formidable";
import fs from "fs"


const pathDir = __dirname + "../../uploads/";

const update = async (req, res) => {
  console.log(req.fileName);
  const result = await req.context.models.Villas_images.update(
    { profile: req.fileName },
    { returning: true, where: { vila_id: parseInt(req.params.id) } }
  );
  return res.send(result);
};
const create = async (req, res, next) => {
  // jika gunakan spread operator
  const dataVillasimage = req.dataVillasimage;

  for (const data of dataVillasimage) {
    await createImage(req, res, data);
  }

  // using middleware
  //return res.send(dataVillasimage)
  next()
};
const remove = async (req, res) => {
  const villas_images = await req.context.models.Villas_images.destroy({
    where: { viim_id: req.params.id },
  });

  return res.send(true);
};


const createImage = async (req, res, data) => {
  const { viimId, fileName, fileSize, fileType, primary } = data;
  await req.context.models.Villas_images.create({

    viim_filename: fileName,
    viim_filesize: fileSize,
    viim_filetype: fileType,
    viim_primary: primary,
    viim_villa_id: viimId
  }).catch((error) => {
    console.log(error);
  });
};

const findAll = async (req, res) => {
  const Villas_images = await req.context.models.Villas_images.findAll(
    {
      // include: [{
      //     model: req.context.models.Villas_images
      // }],
      order: [
        ['viim_villa_id']
      ],
    }
  );
  return res.send(Villas_images);
}
//buat image
const findOne = async (req, res) => {
   
  const villas_images = await req.context.models.Villas_images.findOne({
      include:{
          all:true,
  },
      where: { viim_id: req.params.id }
  });
  return res.send(villas_images);

}

const createFileType = async (req, res) => {
  // jika directory belum ada then create new one
  if (!fs.existsSync(pathDir)) {
    fs.mkdirSync(pathDir);
  }

  const form = formidable({
    multiples: true,
    uploadDir: pathDir,
    keepExtensions: true
  });

  form
    .on("filebegin", function (name, file) {
      file.path = pathDir + file.name;

    })
    .parse(req, async (err, fields, files) => {
      if (err) {
        res.status(400).json({
          message: "Image tidak bisa diupload"
        });
      }
      let villas_images = new req.context.models.Villas_images(fields);
      if (files) {
        villas_images.viim_filename = files.image.name;
        villas_images.viim_filetype = files.image.type;
        villas_images.viim_filesize = files.image.size;

        console.log(villas_images);
      }
      try {
        const result = await req.context.models.Villas_images.create(villas_images.dataValues);
        return res.send(result)
      } catch (error) {
        res.send(error.message)

      }

    });
}

export default {
  update,
  create,
  findAll,
  findOne,
  remove,
  createImage,
  createFileType
};