const url = require('../../models/url');
module.exports = (express) => {
  const router = express.Router();

  router.get('/urls',  (req, res) => {
    res.json({ShortenerWorking: 'Yes',})
  });

// router.post('/urls', (req, res) => {
//   url.create(req.body, (err) => {
//   var shorten_url = require('../shortener');
//   res.json({
//     orig : req.body.shortened,
//     short : shorten_url.shorten()});
//   })
// });

router.post('/urls', (req, res) => {
  url.create(req.body, (err) => {
    res.status(500).json(err);
  } ,  (data) => {
    res.status(200).json(data);
  })
});


router.post('/urls/:id', (req, res) => {
		req.body.id = req.params.id;
		url.update(req.body, (err) => {
			res.status(500).json(err);
		}  , (data)=>{
			res.status(200).json(data);
		})
	});

router.get('/urls', (req, res) => {
  url.findAll((err) => {
    res.status(500).json(err);
  }, (data) => {
    res.status(200).json(data);
  })
});

router.get('/urls/:id', (req, res) => {
  req.body.id = req.params.id;
  genre.find(req.body, (err) => {
    res.status(500). json(err);
  }, (data) => {
    res.status(200). json(data);
  })
});

router.delete('/urls/:id', (req, res) => {
  req.body.id = req.params.id;
  url.destroy(req.body, (err) => {
    res.status(500).json(err);
  }, (data) => {
    res.status(200).json(err);
  })
});

  return router;
};
