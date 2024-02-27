const path = require('path');
const Shark = require('../models/sharks');

exports.index = function (req, res) {
	res.sendFile(path.resolve('views/sharks.html'));
};
/*
exports.create = async function (req, res) {
	var newShark = new Shark(req.body);
	console.log(req.body);
	try {
		await newShark.save();
		res.redirect('/sharks/getshark');
	} catch (err) {
		res.status(400).send('Unable to save shark to database');
	}
};

exports.list = async function (req, res) {
	try {
		const sharks = await Shark.find({}).exec();
		res.render('getshark', { sharks: sharks });
	} catch (err) {
		res.status(500).send(err);
	}
};
*/
exports.create = function (req, res) {
	var newShark = new Shark(req.body);
	console.log(req.body);
	newShark.save()
		.then(() => {
			res.redirect('/sharks/getshark');
		})
		.catch((err) => {
			res.status(400).send('Unable to save shark to database');
		});
};

exports.list = function (req, res) {
	Shark.find({}).exec()
		.then((sharks) => {
			res.render('getshark', { sharks: sharks });
		})
		.catch((err) => {
			res.status(500).send(err);
		});
};
