const fs = require('fs')
const path = require('path')

fs.readFile(path.join('.', 'countries', 'usa', 'sortedBabyGirls.json'), 'utf8', async (err, data) => {
  if (err) throw err;

	// let alphabets = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

	let counter = 0
	let pageCounter = 9
	let pageInnerHtml = ''
	let book = {}
	let firstCharacter = 'A'


	JSON.parse(data).forEach(girl => {
		if (counter >= 63 || firstCharacter !== girl.Name.charAt(0)) {
			firstCharacter = girl.Name.charAt(0)
			book[`page-${pageCounter}`] = pageInnerHtml
			pageCounter++
			counter = 1
			pageInnerHtml = `<div><span class="selectable">${girl.Name}</span><a data-tooltip="${parseInt(girl.Frequency).toLocaleString('en')}" rel="nofollow noopener" href="https://duckduckgo.com/?q=${girl.Name}+name+meaning&kp=-1&kl=us-en&ia=web" class="small tooltip">♕</a></div>\n`
		} else {
			pageInnerHtml += `<div><span class="selectable">${girl.Name}</span><a data-tooltip="${parseInt(girl.Frequency).toLocaleString('en')}" rel="nofollow noopener" href="https://duckduckgo.com/?q=${girl.Name}+name+meaning&kp=-1&kl=us-en&ia=web" class="small tooltip">♕</a></div>\n`
			counter++
		}
	})

	if (pageInnerHtml !== '') { book[`page-${pageCounter}`] = pageInnerHtml }





	fs.writeFile(path.join('.', 'interim', 'tmp', '.book'), JSON.stringify(book, null, 1), (err) => {
		if (err) throw err;
		console.log('Sanitized HTML is ready!')
	})
})
