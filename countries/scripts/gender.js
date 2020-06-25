const fs = require('fs')
const path = require('path')


fs.readFile(path.join('.', 'countries', 'usa', 'us.json'), 'utf8', async (err, data) => {
  if (err) throw err;

	let names = JSON.parse(data)

	let result = names.reduce((r, a) => {
		[ r[a.Gender] = [] ] = [ r[a.Gender] ]
		let existingName = (r[a.Gender].filter(item => item.Name === a.Name));
		if (existingName.length > 0) {
			existingName[0].Frequency = parseInt(a.Frequency) + parseInt(existingName[0].Frequency)
		} else {
			r[a.Gender].push(a)
		}
		return r
	}, {})

	let [ girls = []] = [ result.F ]


	let [ boys = []] =  [ result.M ] // [...new Set( [ result.M ].map(obj => obj.Name)) ] // [ result.M ]

	fs.writeFile(path.join('.', 'countries', 'usa', 'girls.json'), JSON.stringify(girls, null, 1), (err) => {
		if (err) throw err;
		console.log('Baby girl names have been saved!')
	})

	fs.writeFile(path.join('.', 'countries', 'usa', 'boys.json'), JSON.stringify(boys, null, 1), (err) => {
		if (err) throw err;
		console.log('Baby boy names have been saved!')
	})


})


