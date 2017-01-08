const book = require('../../models/book');

module.exports = (express) => {
  const router = express.Router();

  router.get('/books', (req, res) => {
  		book.findAll( (err) => {
  			res.status(500).json(err);
  		}, (data)=>{
  			res.status(200).json(data);
  		})
  		res.json({read: true,})
  	});

    router.get('/books/:id', (req, res) => {
		req.body.id = req.params.id;
		book.find(req.body, (err) => {
			res.status(500).json(err);
		}  , (data)=>{
			res.status(200).json(data);
		})
	});

  router.post('/genres:id', (req,res) => {
    req.body.id = req.params.id;
    book.find(req.body, (err) => {
			res.status(500).json(err);
		}  , (data)=>{
			res.status(200).json(data);
		})
  });

  router.get('/books', (req, res) => {
  		book.create( (err) => {
  			res.status(500).json(err);
  		}, (data)=>{
  			res.status(200).json(data);
  		})
  		res.json({read: true,})
  	});

router.delete('/books/:id', (req, res) => {
  req.body.id = req.params.id;
  book.update(req.body, (err) => {
    res.status(500).json(err);
  })
});


  return router;
}
