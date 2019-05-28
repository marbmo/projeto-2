const PictureModel = require('../../model/pictureModel');

const multer  = require('multer');

const uploadPicture = (request, response) => {
  let picture = new PictureModel({
    name: request.body.name,
    path: `/uploads/${request.file.filename}`,
    originalName: request.file.originalname,
    schoolId: request.params.escolaId,
  });

  console.log(request.file);

  picture.save((err) => {
    response.redirect(`/perfil-escola/${request.params.escolaId}`);
  });
};

module.exports = uploadPicture;