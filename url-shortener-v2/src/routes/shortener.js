function shorten(){
  var string = 'ABCDabcd1234';
  var amount = 6;
  var text ="";

  for(i = 0; i < 6; i++){
       text = string.charAt((Math.random()) * amount.length);
  };
  return text;
}

exports.shorten = shorten;
