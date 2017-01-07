const book = require('./db');

//Creates a book
exports.create = (payload,err,success) => {
  db.book.create(payload).then(succes).catch(err);
}

//Gets all books
exports.findAll = (err, success) => {
  db.book.findAll().then(success).catch(err);
}

//Gets a book by a specific ID
exports.find = (payload, err, success) => {
	db.book.find({
		where:{id: payload.id,},
		include: [{
			all: true,
			nested: true,
		}],
	}).then(success).catch(err);
}

//Deletes a book by a specific ID
exports.destroy = (payload, err, success) => {
	db.genre.find({
		where:{id: payload.id,},

	}).then(success).catch(err);
}

//updates a book by a specific ID
exports.update = (payload, err, success) => {
	db.genre.find({
		where:{id: payload.id,},
	}).then((updatingData)=>{
		updatingData.updateAttributes(payload).then(success).catch(err);
	}) .catch(err);
}
