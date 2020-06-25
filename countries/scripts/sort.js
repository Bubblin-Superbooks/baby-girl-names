const fs = require('fs')
const path = require('path')


fs.readFile(path.join('.', 'countries', 'usa', 'girls.json'), 'utf8', async (err, data) => {
  if (err) throw err;

	let girls = JSON.parse(data).sort((a, b) => (a.Name > b.Name) ? 1 : ((b.Name > a.Name) ? -1 : 0))

	fs.writeFile(path.join('.', 'countries', 'usa', 'sortedBabyGirls.json'), JSON.stringify(girls, null, 1), (err) => {
		if (err) throw err;
		console.log('Baby girl names have been sorted!')
	})

})
