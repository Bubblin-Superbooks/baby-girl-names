const fs = require('fs')
const path = require('path')

fs.readFile(path.join('.', 'countries', 'usa', 'sortedBabyGirls.json'), 'utf8', async (err, data) => {
  if (err) throw err;

	let html = JSON.parse(data).map(girl => `<div><span class="selectable">${girl.Name}</span><a data-tooltip="${girl.Frequency}" rel="nofollow noopener" href="https://duckduckgo.com/?q=${girl.Name}+name+meaning&kp=-1&kl=us-en&ia=web" class="tooltip">♕</a></div>\n`)

	console.log(html)

	fs.writeFile(path.join('.', 'interim', 'sanitized.html'), `<body>${html.join('')}</body>`, (err) => {
		if (err) throw err;
		console.log('Sanitized HTML is ready!')
	})
})
