const { app, hbs, bodyParser, multer } = require('../config');
const upload = multer({ dest: '../public/uploads/' });

const uploadPicture = require('../controller/picture/create');

app.post('/upload/:escolaId', upload.single('photo'), uploadPicture);

module.exports = app;