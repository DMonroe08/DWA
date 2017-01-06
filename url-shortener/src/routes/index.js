module.exports = function(express){
  //makes router into a variable
  const router = express.Router();

  router.get('/book', function(req, res){
    res.json({assignment: 'static'});
  });
  // router.get('/status', function(req, res){
  //   res.json({good: 'Working'});
  // });

router.use('/api/', require('./api/api')(express));

  //Returns Router
  return router;
}
