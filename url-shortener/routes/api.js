module.exports = function(express){
  //makes router into a variable
  var router = express.Router();

  router.get('/', function(req, res){
    res.json({assignment: 'static'});
  });
  router.get('/status', function(req, res){
    res.json({good: 'Working'});
  });

  //sets variables for strings
  var stringOne = ['He', 'She', 'It'];
  var stringTwo = ['Slept', 'Danced', 'Played'];
  var stringThree = ['Today', 'Alone', 'Happily'];

  //creates random string with different variable options
  var randString = (stringOne[Math.floor(Math.random() * stringOne.length)]) + (stringTwo[Math.floor(Math.random() * stringTwo.length)]) + (stringThree[Math.floor(Math.random() * stringThree.length)]);
console.log(randString);

router.get('/string', function(req, res){
  //rand = require(randString);
  res.json({randSt: true});
});

var oneString = "ABCDEFG123456";
var limit = 8;

app.get('/rand', function(req, res){
  res.json({rand: yup});
});

  //Returns Router
  return router;
}
