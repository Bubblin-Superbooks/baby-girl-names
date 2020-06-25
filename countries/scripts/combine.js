const fs = require('fs')
const path = require('path')
const concat = require('concat')

const outputPath = path.join('.', 'countries', 'usa', 'us.csv')

fs.readdir(path.join('.', 'countries', 'usa'), (err, files) => {

	files = files.map(file => `${path.join('.', 'countries', 'usa')}/${file}` )

	concat(files, outputPath).catch(err => { console.log(err) })

})
