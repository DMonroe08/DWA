const book = require('../../models/book');

module.exports = (express) => {
  const router = express.Router();

  router.get('/books', (req, res) => {
  		genre.findAll( (err) => {
  			res.status(500).json(err);
  		}, (data)=>{
  			res.status(200).json(data);
  		})
  		res.json({read: true,})
  	});

    router.get('/books/:id', (req, res) => {
		req.body.id = req.params.id;
		genre.find(req.body, (err) => {
			res.status(500).json(err);
		}  , (data)=>{
			res.status(200).json(data);
		})
	});

  return router;
}
