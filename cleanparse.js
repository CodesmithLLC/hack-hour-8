const fs = require('fs')

fs.readFile('body.html', 'utf8', (err, result) => {
  if (err) throw err
  fs.writeFile('body.json', JSON.stringify(result), (err) => {
    if (err) throw err
    console.log('booya')
  })
})

