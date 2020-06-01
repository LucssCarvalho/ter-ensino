const app = require('./config/server')
const db = require('./database/connection')
const routes = require('./config/routes')

app.db = db

routes(app)

const port = 9001

app.listen(port, () => {
  console.log(`BACKEND IS RUNNING ON PORT ${port}`)
})
