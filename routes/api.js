module.exports = function(express){
  //makes router into a variable
  var router = express.Router();

  router.get('/', function(req, res){
    res.json({assignment: 'static'});
  });
  router.get('/status', function(req, res){
    res.json({good: 'Working'});
  });

  var stringOne = ['He', 'She', 'It'];
  var stringTwo = ['Slept', 'Danced', 'Played'];
  var stringThree = ['Today', 'Alone', 'Happily'];

  var randString = (stringOne[Math.floor(Math.random() * stringOne.length)]) + (stringTwo[Math.floor(Math.random() * stringTwo.length)]) + (stringThree[Math.floor(Math.random() * stringThree.length)]);
console.log(randString);

router.get('/string', function(req, res){
  rand = require(randString);
  res.json({rand: true});
});
  //Returns Router
  return router;
}
