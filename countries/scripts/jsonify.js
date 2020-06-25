const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')

csv()
	.fromFile(path.join('.', 'countries', 'usa', 'us.csv'))
	.then((json)=>{
		fs.writeFile(path.join('.', 'countries', 'usa', 'us.json'), JSON.stringify(json, null, 1), (err) => {
			if (err) throw err;
			console.log('The file has been saved!')
		})
	}).catch(err => console.log(err))


