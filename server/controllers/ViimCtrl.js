const update = async (req, res) => {
    console.log(req.fileName);
    const result = await req.context.models.Villas_images.update(
      { profile: req.fileName },
      { returning: true, where: { tale_id: parseInt(req.params.id) } }
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
    const { empId, empName, taim_id ,fileName, fileSize,  fileType ,primary } = data;
    await req.context.models.Villas_images.create({
        
        viim_filename: fileName,
        viim_filesize: fileSize,
        viim_filetype: fileType,
        viim_primary : primary,
        viim_villa_id: empId
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
  
  export default {
    create,
    findAll,
    remove,
    createImage
  };