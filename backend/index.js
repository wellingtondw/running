const app = require('./app')
require('./db')

const port = process.env.PORT || 3003

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
