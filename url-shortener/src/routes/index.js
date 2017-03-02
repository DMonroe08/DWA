module.exports = function(express){
  //makes router into a variable
  const router = express.Router();

//Path to book.js
  router.get('/book', function(req, res){
    res.json({assignment: 'static'});
  });

//Path to api
router.use('/api/', require('./api/api')(express));

  //Returns Router
  return router;
}
