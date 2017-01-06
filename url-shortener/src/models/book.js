const book = require('./db');

exports.create = (payload,err,success) => {
  db.book.create(payload).then(succes).catch(err);
}
exports.findAll = (err, success) => {
  db.book.findAll().then(success).catch(err);
}
