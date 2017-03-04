var MongoClient =  require('mongodb').MongoClient

var firstName = process.argv[2]
var lastName = process.argv[3]
var doc = {
  firstName: firstName
, lastName: lastName
}

var url = 'mongodb://localhost:27017/learnyoumongo'

MongoClient.connect(url, function (err, db) {
	// body...
	if (err) throw err;
	var collection = db.collection('docs')
	// inserting document
	collection.insert(doc, function (err, data) {
		// body...
		if (err) throw err;
		console.log(JSON.stringify(doc));
		db.close();
	})
})