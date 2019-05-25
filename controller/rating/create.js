const RatingModel = require('../../model/ratingModel');

const createRating = (request, response) => {
  const avalDoc = {
    text: request.body.text,
    userId: request.session.currentUser._id,
    nameUser: request.session.currentUser.name,
    schoolId: request.params.schoolId,
  }

  RatingModel.create(avalDoc, (error) => {
    if (error) {
      console.log(`Erro a criar a avaliacao: ${error}`);
    } else {
      console.log(`Salvamos o documento: ${avalDoc}`);
      response.redirect('/escola/'+request.params.schoolId);
    }
  });
};

module.exports = createRating;